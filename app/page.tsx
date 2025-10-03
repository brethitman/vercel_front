// app/page.tsx
export default async function Home() {
  // Detecta la URL del backend según el entorno
  const apiUrl =
    process.env.NODE_ENV === "production"
      ? "https://backend-express.vercel.app/api/hello" // URL de Vercel cuando despliegues
      : "http://localhost:3001/api/hello"; // Local

  const res = await fetch(apiUrl, { cache: "no-store" });
  const data = await res.json();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Frontend en Next.js 🚀
      </h1>
      <p className="text-lg text-gray-800">Respuesta desde el backend:</p>
      <div className="mt-4 px-4 py-2 bg-white rounded-lg shadow">
        <pre className="text-green-600 font-mono">{data.message}</pre>
      </div>
    </main>
  );
}
