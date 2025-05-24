import { useState } from 'react'

export default function AIHelper() {
  const [prompt, setPrompt] = useState('')
  const [response, setResponse] = useState('')

  const handleAIRequest = async () => {
    setResponse("Loading...")
    try {
      const res = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer YOUR_OPENAI_API_KEY"
        },
        body: JSON.stringify({
          model: "text-davinci-003",
          prompt,
          max_tokens: 150
        })
      })
      const data = await res.json()
      setResponse(data.choices[0].text)
    } catch (err) {
      setResponse("Failed to fetch AI response.")
    }
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Ask AI for Help</h2>
      <textarea
        placeholder="Ask AI to write something or give ideas..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded h-28"
      />
      <button
        onClick={handleAIRequest}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Ask AI
      </button>
      {response && <p className="mt-4 bg-white p-4 rounded shadow">{response}</p>}
    </div>
  )
}
