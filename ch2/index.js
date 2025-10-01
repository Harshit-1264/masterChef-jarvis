import dotenv from 'dotenv';
dotenv.config();
// console.log(process.env.GEMINI_API_KEY);

// import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
// const llm = new ChatGoogleGenerativeAI({
//     model: "gemini-2.0-flash",
//     apiKey: process.env.GEMINI_API_KEY,
//     temperature: 0.7,
//     maxOutputTokens: 1024
// });

// // LLM
// const response = await llm.invoke("Who is Prime minister of India?")
// console.log("Response: ", response);

// // Batch and stream are also supported
// const res = await llm.invoke([
//   [
//     "human",
//     "What would be a good company name for a company that makes colorful socks?",
//   ],
// ]);
// console.log(res);


// Chat Model

// // Ex-1
// import { ChatGoogleGenerativeAI } from "@langchain/google-genai";


// const model = new ChatGoogleGenerativeAI({
//   model: "gemini-2.0-flash",
//   apiKey: process.env.GEMINI_API_KEY,
//   temperature: 0
// });

// // const response = await model.call(["Who is Prime minister of India?"])
// const response = await model.invoke("Who is Prime minister of India?")
// console.log("Response: ", response);

// Ex-2
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HumanMessage, SystemMessage } from '@langchain/core/messages';
const model = new ChatGoogleGenerativeAI({
    model: "gemini-2.0-flash",
    apiKey: process.env.GEMINI_API_KEY,
    temperature: 0
})

const messages = [
    new SystemMessage("You are a helpful assistant that translates English to French."),
    new HumanMessage("Translate the following sentence: 'Hello, how are you?'")
]

const messages1 = [
    new SystemMessage("You are a stand-up comedian"),
    new HumanMessage("tell me a joke about programmer")
]

const response = await model.invoke(messages1)
console.log("Response: ", response);