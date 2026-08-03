import prisma from "../config/db.js";

import { PDFParse } from "pdf-parse";
import { analyzeResumeAI } from "../services/resumeAI.js";
import { improveResumeAI } from "../services/improveResumeAI.js";

export const uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Resume file required",
      });
    }

    let extractedText = "";

    if (req.file.mimetype === "application/pdf") {
      const buffer = req.file.buffer;

      const parser = new PDFParse({
        data: buffer,
      });

      const result = await parser.getText();

      extractedText = result.text;

      await parser.destroy();
    }

    let aiResult = null;
    let improvedResume = null;
    let improvedAnalysis = null;

    if (extractedText) {
      aiResult = await analyzeResumeAI(extractedText);

      improvedResume = await improveResumeAI(extractedText);

      improvedAnalysis = await analyzeResumeAI(improvedResume);
    }

    const resume = await prisma.resume.create({
      data: {
        fileName: req.file.originalname,
        fileUrl: "memory-upload",

        extractedText,

        atsScore: aiResult?.score || null,
        analysis: aiResult || null,

        improvedScore: improvedAnalysis?.score || null,
        improvedResume: improvedResume || null,
        improvedAnalysis: improvedAnalysis || null,

        user: {
          connect: {
            id: req.user.id,
          },
        },
      },
    });

    res.status(201).json({
      success: true,
      message: "Resume analyzed successfully",
      resume,
    });
  } catch (error) {
    console.log("Resume Upload Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
