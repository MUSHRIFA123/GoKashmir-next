// pages/404.js
export default function Custom404() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes float {
              0% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
              100% { transform: translateY(0); }
            }
          `,
        }}
      />
      <div className="text-center animate-fadeIn min-h-screen flex flex-col justify-center items-center bg-green-50">
        <img
          src="https://yemca-services.net/404.png"
          alt="404 Illustration"
          className="mx-auto w-80 animate-[float_3s_infinite] shadow-xl rounded-lg"
        />
        <h1 className="text-7xl font-extrabold text-green-700 mt-6">
          Looks Like You're Lost!
        </h1>
        <p className="text-xl text-green-800 mt-2">
          We can't seem to find the page you're looking for.
        </p>
        <a
          href="/"
          className="mt-6 inline-block bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transform transition hover:scale-105 hover:bg-green-700"
        >
          Return Home
        </a>
      </div>
    </>
  );
}
