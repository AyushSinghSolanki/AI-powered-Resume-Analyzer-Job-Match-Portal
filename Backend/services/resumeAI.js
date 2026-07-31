import client from "../config/openrouter.js";

export const analyzeResumeAI = async (resumeText) => {
  const prompt = `
You are an expert ATS resume analyzer.

Analyze this resume.

Give response ONLY in JSON format.

Resume:

${resumeText}


Return:

{
 "score": number,
 "strengths":[
   "point1",
   "point2"
 ],
 "weaknesses":[
   "point1",
   "point2"
 ],
 "suggestions":[
   "point1",
   "point2"
 ],
 "summary":"short review"
}

Score should be between 0-100.
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
