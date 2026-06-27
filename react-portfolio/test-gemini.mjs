import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = 'AQ.Ab8RN6LdCyYx-8iuq8dbmqTLBpgJqwhHG5f1y3u4tqkwCUlRaQ';
async function run() {
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`);
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error:', error);
  }
}

run();
