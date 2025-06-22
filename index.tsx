export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold mb-4">Byg dit brand med AI</h1>
      <p className="text-lg mb-6 text-center">Automatiseret content. Hyperpersonligt. Klar til at poste.</p>
      <a href="/dashboard">
        <button className="bg-black text-white px-6 py-3 rounded-xl">Kom i gang</button>
      </a>
    </div>
  );
}