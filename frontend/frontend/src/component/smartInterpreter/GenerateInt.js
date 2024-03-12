// import OpenAI from "openai";
// // console.log(import.meta.env.VITE_API_KEY);

// const openai = new OpenAI({
//   apiKey: "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",
//   dangerouslyAllowBrowser: true,
// });

// async function gen(res) {
//   const para = []
//   for (let i = 0; i < 1; i++) {
//     var s = `Write interpretation in less than 100 words about ${res[i][0]} in ${res[i][1]}.It should include about test, symptoms, causes, what are it's diseases.`;
//     const completion = await openai.chat.completions.create({
//       messages: [{ role: "system", content: s }],
//       model: "gpt-3.5-turbo",
//     });
//     para.push(completion.choices[0].message.content);

//     // Introduce a delay of 2 second between each iteration
//     await new Promise((resolve) => setTimeout(resolve, 2000));
//   }
//   return para;
// }


// export default gen;

import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyDlCecZCROqBdOULY8h1rOsHsKlQV6SDeM");

// ...

async function gen(res) {
  const para = [];
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  for (let i = 0; i < res.length; i++) {
    const prompt = `Write a brief detail in less than 150 words about ${res[i][0]} in ${res[i][1]}.It should include about test, symptoms, causes, what are it's diseases.Write in one single paragraph`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    para.push(text);
  }
  return para;
}

export default gen;
// ...