import prisma from "../config/db.js";
import fs from "fs";
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
    // AI ANALYSIS
    let aiResult = null;
    let improvedResume = null;
    let improvedAnalysis = null;

    if (extractedText) {
      // Step 1: Analyze Original Resume
      aiResult = await analyzeResumeAI(extractedText);

      // Step 2: Improve Resume
      improvedResume = await improveResumeAI(extractedText);

      // Step 3: Analyze Improved Resume
      improvedAnalysis = await analyzeResumeAI(improvedResume.improvedResume);
    }

    // SAVE RESUME
    // SAVE RESUME
    const resume = await prisma.resume.create({
      data: {
        fileName: req.file.originalname,
        fileUrl: req.file.path,

        extractedText,

        // Original Analysis
        atsScore: aiResult?.score || null,
        analysis: aiResult || null,

        // Improved Analysis
        improvedScore: improvedAnalysis?.score || null,
        improvedResume: improvedResume?.improvedResume || null,
        improvedAnalysis: improvedAnalysis || null,

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
