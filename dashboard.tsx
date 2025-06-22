import { useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [idea, setIdea] = useState('');
  const [result, setResult] = useState('');

  const handleGenerate = async () => {
    const res = await axios.post('/api/generate', { prompt: idea });
    setResult(res.data.result);
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-semibold mb-4">AI Content Generator</h1>
      <textarea
        className="w-full p-4 border rounded mb-4"
        placeholder="Skriv en kort beskrivelse af dit opslag..."
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
      />
      <button onClick={handleGenerate} className="bg-black text-white px-4 py-2 rounded">Generer opslag</button>
      <div className="mt-6 bg-gray-100 p-4 rounded">
        <p>{result}</p>
      </div>
    </div>
  );
}