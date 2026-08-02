import client from "../config/openrouter.js";

export const analyzeResumeAI = async (resumeText) => {
 const prompt = `
You are an expert ATS Resume Analyzer and Resume Parser.

Analyze the resume and extract the candidate's details.

Return ONLY valid JSON.

Resume:

${resumeText}

Return this exact JSON structure:

{
  "score": 0,

  "candidate": {
    "name": "",
    "email": "",
    "phone": "",
    "location": "",
    "linkedin": "",
    "github": ""
  },

  "summary": "",

  "strengths": [
    "",
    "",
    ""
  ],

  "weaknesses": [
    "",
    "",
    ""
  ],

  "suggestions": [
    "",
    "",
    ""
  ]
}

Rules:

- Score must be between 0 and 100.
- Extract candidate information only from the resume.
- If any field is missing, return an empty string.
- Do not invent any information.
- Return ONLY JSON.
`;

  const completion = await client.chat.completions.create({
    model: "openai/gpt-4.1-mini",

    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],

    max_tokens: 500,
    temperature: 0.3,
  });
  let response = completion.choices[0].message.content;

  // remove markdown json
  response = response
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(response);
};
