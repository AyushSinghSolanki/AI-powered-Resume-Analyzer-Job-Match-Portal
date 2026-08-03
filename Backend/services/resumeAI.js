import client from "../config/openrouter.js";

export const analyzeResumeAI = async (resumeText) => {
 const prompt = `
You are an expert ATS (Applicant Tracking System) Resume Evaluator, Resume Parser and Senior Technical Recruiter.

Your job is to evaluate this resume exactly like a modern ATS.

Analyze the resume using the following scoring rubric.

Maximum Score = 100

1. ATS Keywords & Job-Relevant Skills .......... 25
2. Professional Summary ........................ 15
3. Work Experience & Impact .................... 20
4. Projects & Technical Depth .................. 15
5. Skills Section .............................. 10
6. Formatting & ATS Compatibility .............. 10
7. Grammar, Clarity & Readability .............. 5

Scoring Rules:

- Be strict but fair.
- Never assign random scores.
- Award points only when evidence exists.
- Reward:
  • Strong ATS keywords
  • Action verbs
  • Quantified achievements
  • Good formatting
  • Clear section hierarchy
  • Relevant projects
  • Strong technical skills
  • Recruiter readability

Deduct points for:
- Weak summary
- Missing ATS keywords
- Poor formatting
- Weak project descriptions
- Grammar mistakes
- Repetitive content
- Missing measurable impact

Candidate Information Rules:

Extract ONLY information that actually exists.

If any field is missing return "".

Never invent information.

Resume:

${resumeText}

Return ONLY valid JSON.

{
  "score": 0,

  "breakdown": {
    "keywords": 0,
    "summary": 0,
    "experience": 0,
    "projects": 0,
    "skills": 0,
    "formatting": 0,
    "grammar": 0
  },

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
    "",
    ""
  ],

  "weaknesses": [
    "",
    "",
    "",
    ""
  ],

  "suggestions": [
    "",
    "",
    "",
    ""
  ]
}

The total of all breakdown values MUST equal score exactly.

Return ONLY JSON.
`;

  const completion = await client.chat.completions.create({
    model: "openai/gpt-4.1-mini",

    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],

    max_tokens: 1200,
    temperature: 0.2,
  });
  let response = completion.choices[0].message.content;

  // remove markdown json
  response = response
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(response);
};
