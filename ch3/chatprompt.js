import dotenv from 'dotenv';
dotenv.config();
// Chat model - prompt template 

import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatPromptTemplate, PromptTemplate, SystemMessagePromptTemplate, HumanMessagePromptTemplate } from '@langchain/core/prompts';
import { HumanMessage, SystemMessage } from '@langchain/core/messages';

const chat = new ChatGoogleGenerativeAI({
    model: "gemini-2.0-flash",
    apiKey: process.env.GEMINI_API_KEY
});

// // Ex1 - message prompt Templates as tuples
// const sys_template = "You're a helpful assistant that translates {input_language} to {output_language}.";
// const human_template = "{text}";

// const chatPrompt = ChatPromptTemplate.fromMessages([
//     ["system", sys_template],
//     ["human", human_template],
// ])

// const formattedChatPrompt = await chatPrompt.formatMessages({
//     input_language: "English",
//     output_language: "French",
//     text: "I am learning LangChain JS from GeekyShows YT"
// })

// // console.log("Formatted Chat Prompt: ", formattedChatPrompt);
// const response = await chat.invoke(formattedChatPrompt);
// // console.log("Response: ", response );
// console.log("Response Content: ", response.content );


// // Ex2 - Using Message Classes
// const SystemMessagePrompt = SystemMessagePromptTemplate.fromTemplate("You're a helpful assistant that translates {input_language} to {output_language}.");
// const HumanMessagePrompt = HumanMessagePromptTemplate.fromTemplate("{text}");

// // console.log("System Message Input Variables : ", SystemMessagePrompt.inputVariables);
// // console.log("Human Message Input Variables : ", HumanMessagePrompt.inputVariables);

// const chatPrompt = ChatPromptTemplate.fromMessages([
//     SystemMessagePrompt, HumanMessagePrompt
// ])

// // console.log("Chat Prompt :", chatPrompt);
// // console.log("Chat Prompt Input Variables :", chatPrompt.inputVariables);

// const formattedChatPrompt = await chatPrompt.formatMessages({
//     input_language: "English",
//     output_language: "French",
//     text: "I love programming"
// })
// // console.log("Formatted Chat Prompt: ", formattedChatPrompt);

// const response = await chat.invoke(formattedChatPrompt);
// // console.log("Response: ", response);
// console.log("Response Content: ", response.content);


// Ex3 - Using PromptTemplate
const systemPrompt = new PromptTemplate({
    template: "You're a helpful assistant that translates {input_language} to {output_language}.",
    inputVariables: ["input_language", "output_language"]
})
const humanPrompt = new PromptTemplate({
    template: "{text}",
    inputVariables: ["text"]
})

const SystemMessagePrompt = new SystemMessagePromptTemplate({
    prompt: systemPrompt 
})
const HumanMessagePrompt = new HumanMessagePromptTemplate({
    prompt: humanPrompt
})

const chatPrompt = ChatPromptTemplate.fromMessages([
    SystemMessagePrompt, HumanMessagePrompt
])

// console.log("Chat Prompt: ", chatPrompt);
// console.log("Chat Prompt Input Variables: ", chatPrompt.inputVariables);

const formattedChatPrompt = await chatPrompt.formatMessages({
    input_language: "English",
    output_language: "French",
    text: "I love programming"
})

// console.log("Formatted Chat Prompt: ", formattedChatPrompt);

const response = await chat.invoke(formattedChatPrompt);
// console.log("Response: ", response);
console.log("Response Content: ", response.content);