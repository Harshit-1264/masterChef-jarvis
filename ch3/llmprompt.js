import dotenv from 'dotenv';
dotenv.config();
// LLMs - Prompt Template

import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { PromptTemplate } from "@langchain/core/prompts";

const llm = new ChatGoogleGenerativeAI({
    model: "gemini-2.0-flash",
    apiKey: process.env.GEMINI_API_KEY
});

// // Ex1 - prompt having no input variable
// const noInputPrompt = new PromptTemplate({
//     inputVariables: [],
//     template: "Tell me a joke"
// })

// const formattedNoInputPrompt = await noInputPrompt.format(); 
// console.log("No Input Prompt: ", formattedNoInputPrompt);

// const response = await llm.invoke(formattedNoInputPrompt);
// // console.log("LLM Response: ", response);
// console.log("LLM Response: ", response.content); //it prints only content -> joke


// // Ex2 - prompt having one input variable
// const oneInputPrompt = new PromptTemplate({
//     inputVariables: ["language"],
//     template: "Tell me a trick of {language}"
// })

// const formattedOneInputPrompt = await oneInputPrompt.format({ language: "LinkedList" });
// console.log("One Input Prompt: ", formattedOneInputPrompt);

// const response = await llm.invoke(formattedOneInputPrompt);
// console.log("LLM Response: ", response.content);


// // Ex3 - prompt having multiple input variable
// const multiInputPrompt = new PromptTemplate({
//     inputVariables: ["language", "topic"],
//     template: "Tell me a trick of {language} in {topic}"
// })

// const formattedMultipleInputPrompt = await multiInputPrompt.format({
//     language: "python",
//     topic: "function"
// });
// console.log("Multiple Input Prompt: ", formattedMultipleInputPrompt);

// const response = await llm.invoke(formattedMultipleInputPrompt);
// console.log("LLM Response: ", response.content);



// Ex4 - Prompt Template - no input variable manually
const template = "Tell me a trick of {language} in {topic}"
const promptTemplate = PromptTemplate.fromTemplate(template);
// console.log("Prompt Template : ", promptTemplate);
// console.log("Prompt Template Input Variables: ", promptTemplate.inputVariables);
// console.log("Prompt Template : ", promptTemplate.template);

const formattedPromptTemplate = await promptTemplate.format({
    language: "python",
    topic: "function"
});
console.log("Formatted Prompt Template: ", formattedPromptTemplate);

const response = await llm.invoke(formattedPromptTemplate);
console.log("LLM Response: ", response.content);