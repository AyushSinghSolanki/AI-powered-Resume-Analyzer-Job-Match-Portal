import client from "../config/openrouter.js";

export const improveResumeAI = async (resumeText) => {
  const prompt = `
You are an expert ATS Resume Writer and Career Coach.

Your task is to rewrite the following resume so it becomes highly ATS-friendly.

IMPORTANT RULES:

- Never invent fake experience.
- Never invent fake projects.
- Never invent fake skills.
- Never invent fake certifications.
- Keep all information truthful.
- Improve grammar.
- Improve formatting.
- Rewrite summary professionally.
- Rewrite bullet points using strong action verbs.
- Add ATS keywords wherever appropriate.
- Make the resume concise and recruiter-friendly.
- Improve readability.
- Keep the same education, skills, projects and experience.
- Do NOT remove important information.

Resume:

${resumeText}

Return ONLY valid JSON.

{
  "improvedResume":"Complete improved resume as plain text"
}
`;

  const completion = await client.chat.completions.create({
    model: "openai/gpt-4.1-mini",

    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],

    temperature: 0.3,
    max_tokens: 500,
  });

  let response = completion.choices[0].message.content;

  response = response
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(response);
};
