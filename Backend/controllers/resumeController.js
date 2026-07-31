import prisma from "../config/db.js";
import fs from "fs";
import { PDFParse } from "pdf-parse";
import { analyzeResumeAI } from "../services/resumeAI.js";

export const uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Resume file required",
      });
    }

    let extractedText = "";

    // PDF TEXT EXTRACTION
    if (req.file.mimetype === "application/pdf") {
      const buffer = fs.readFileSync(req.file.path);

      const parser = new PDFParse({
        data: buffer,
      });

      const result = await parser.getText();

      extractedText = result.text;

      await parser.destroy();
    }

    // AI ANALYSIS
    let aiResult = null;

    if (extractedText) {
      aiResult = await analyzeResumeAI(extractedText);
    }

    // SAVE RESUME
    const resume = await prisma.resume.create({
      data: {
        fileName: req.file.originalname,
        fileUrl: req.file.path,

        extractedText,

        atsScore: aiResult?.score || null,

        analysis: aiResult || null,

        userId: req.user.id,
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
