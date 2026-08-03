import client from "../config/openrouter.js";

export const improveResumeAI = async (resumeText) => {
  const prompt = `
You are an expert ATS Resume Writer and Career Coach.

Rewrite the following resume to make it highly ATS-friendly.

Rules:

- Never invent fake experience.
- Never invent fake projects.
- Never invent fake skills.
- Never invent fake certifications.
- Keep all information truthful.
- Improve grammar.
- Improve formatting.
- Rewrite the summary professionally.
- Rewrite bullet points using strong action verbs.
- Add ATS-friendly keywords wherever appropriate.
- Improve readability.
- Keep the same education, skills, projects and experience.

IMPORTANT:
Return ONLY the improved resume as plain text.

Do NOT return JSON.
Do NOT use markdown.
Do NOT add explanations.

Resume:

${resumeText}
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
    max_tokens: 2000,
  });

  return completion.choices[0].message.content.trim();
};
