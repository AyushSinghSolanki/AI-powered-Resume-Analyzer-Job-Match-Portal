import client from "../config/openrouter.js";

export const improveResumeAI = async (resumeText) => {
  const prompt = `
You are a world-class ATS Resume Writer, Recruiter and Career Coach.

Your PRIMARY GOAL is to maximize the ATS score of this resume while keeping every piece of information truthful.

STRICT RULES:

- Never invent fake experience.
- Never invent fake companies.
- Never invent fake projects.
- Never invent fake certifications.
- Never invent fake technical skills.
- Never exaggerate achievements.

Improve the resume by:

- Writing a strong professional summary.
- Rewriting every bullet point using powerful action verbs.
- Adding relevant ATS keywords naturally.
- Improving formatting and readability.
- Organizing sections professionally.
- Improving skills ordering.
- Improving project descriptions with measurable impact whenever the information already exists.
- Removing unnecessary repetition.
- Making the resume recruiter-friendly.

IMPORTANT:

Your goal is to make this resume capable of achieving a HIGHER ATS score than the original.

If the resume is already strong, still optimize wording, keywords, formatting and readability to maximize ATS compatibility.

Return ONLY the improved resume as plain text.

Do NOT return JSON.
Do NOT use Markdown.
Do NOT add explanations.
Do NOT wrap the response in code blocks.

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
    temperature: 0.6,
    max_tokens: 2000,
  });

  return completion.choices[0].message.content.trim();
};
