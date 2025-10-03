// app/page.tsx
export default async function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL; // 👈 variable de entorno

  let data = { message: "No se pudo conectar al backend" };

  try {
    const res = await fetch(`${apiUrl}/api/hello`, { cache: "no-store" });
    if (res.ok) {
      data = await res.json();
    }
  } catch (error) {
    console.error("Error al consumir API:", error);
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Frontend en Next.js 🚀
      </h1>
      <p className="text-lg text-gray-800">Respuesta desde el backend:</p>
      <pre className="text-green-600">{data.message}</pre>
    </main>
  );
}
