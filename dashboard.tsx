// pages/dashboard.tsx

export async function getServerSideProps() {
  const mockData = {
    username: "Rams122",
    notifications: 3,
    suggestions: ["Post om AI-tips", "Del din rejse", "Lav et opslag om brand-DNA"],
  };

  return {
    props: {
      data: mockData,
    },
  };
}

export default function Dashboard({ data }) {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-semibold mb-4">Hej {data.username} 👋</h1>
      <p className="mb-2">Du har {data.notifications} nye notifikationer</p>
      <h2 className="text-xl font-bold mt-6 mb-2">AI-indholdsforslag:</h2>
      <ul className="list-disc ml-6">
        {data.suggestions.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}
