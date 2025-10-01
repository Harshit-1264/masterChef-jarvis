import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatPromptTemplate, SystemMessagePromptTemplate, HumanMessagePromptTemplate } from "@langchain/core/prompts";

export const askJarvisChef = async (recipeMessage) => {
    // console.log(recipeMessage)
    const SECRET_KEY = import.meta.env.VITE_GOOGLE_GENAI_API_KEY;
    const chat = new ChatGoogleGenerativeAI({
        model: "gemini-2.5-flash",
        apiKey: SECRET_KEY,
    });

    const systemMessagePrompt = SystemMessagePromptTemplate.fromTemplate(
        "Your name is Jarvis. You are a master chef so first introduce yourself as Jarvis The Master Chef. You can write the any type of food recipe which can be cooked. You can only allowed to answer the food related queries. If you don't know the answer, just say you don't know the answer."
    );

    const humanMessagePrompt = HumanMessagePromptTemplate.fromTemplate("{asked_recipe}");

    const chatPrompt = ChatPromptTemplate.fromMessages([
        systemMessagePrompt, humanMessagePrompt
    ])

    const formattedChatPrompt = await chatPrompt.formatMessages({
        asked_recipe: recipeMessage,
    })
    // console.log("Formatted Chat Prompt: ", formattedChatPrompt);

    const response = await chat.invoke(formattedChatPrompt);
    return response.content;
}