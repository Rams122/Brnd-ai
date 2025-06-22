// pages/index.tsx

export async function getStaticProps() {
  return {
    props: {
      message: "Velkommen til Brnd.ai – din AI-drevne branding-assistent",
    },
  };
}

export default function Home({ message }) {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold mb-4">{message}</h1>
      <p className="text-lg mb-6 text-center max-w-xl">
        Brnd.ai hjælper dig med at opbygge dit personlige brand på sociale medier.
        Få skræddersyet indhold genereret af AI – klar til at publicere med ét klik.
      </p>
      <a href="/dashboard">
        <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
          Gå til dit dashboard
        </button>
      </a>
    </div>
  );
}
