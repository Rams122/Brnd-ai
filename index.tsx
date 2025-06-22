// pages/index.tsx

export async function getStaticProps() {
  return {
    props: {
      message: "Velkommen til Brnd.ai – AI-drevet brandplatform",
    },
  };
}

export default function Home({ message }) {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold mb-4">{message}</h1>
      <p className="text-lg mb-6 text-center">
        Byg dit brand, generer opslag og publicér med ét klik.
      </p>
      <a href="/dashboard">
        <button className="bg-black text-white px-6 py-3 rounded-xl">
          Gå til dashboard
        </button>
      </a>
    </div>
  );
}
