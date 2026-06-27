import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = 'AQ.Ab8RN6LdCyYx-8iuq8dbmqTLBpgJqwhHG5f1y3u4tqkwCUlRaQ';
const genAI = new GoogleGenerativeAI(API_KEY);

async function run() {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });
    const result = await model.generateContent('Hello');
    console.log(result.response.text());
  } catch (error) {
    console.error('Error Details:');
    console.error('Message:', error.message);
    console.error('Stack:', error.stack);
  }
}

run();
