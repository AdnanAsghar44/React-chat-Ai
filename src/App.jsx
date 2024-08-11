import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'



function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function generateAnswer() {
    setAnswer("loading...")
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBXOkhv9WjabWoqGqKKNumkKD-66bsueYQ",
      method: "post",
      data: {
        "contents": [
          { "parts": [{ "text": question }] }]
      },
    })

    setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);
  }


  return (
    <>
      <h1 className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">AI CHAT APP</h1>

      <textarea
        required
        className="border border-gray-300 rounded w-full my-2 min-h-fit p-3 transition-all duration-300 focus:border-blue-400 focus:shadow-lg"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask anything"
      ></textarea>



      <button onClick={generateAnswer} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"> Generate Answer</button>

      <p >{answer}</p>
    </>
  )
}

export default App









