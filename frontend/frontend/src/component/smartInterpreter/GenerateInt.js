import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);

async function gen(res) {
  const para = [];
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  for (let i = 0; i < res.length; i++) {
    const prompt = `Write a brief detail in less than 100 words about ${res[i][0]} in ${res[i][1]}.It should include about test, symptoms, causes, what are it's diseases.Write in one single paragraph`;
    const result = await model.generateContent(prompt);
    const response =  result.response;
    const text = response.text();
    para.push(text);
  }
  return para;
}

export default gen;
// ...