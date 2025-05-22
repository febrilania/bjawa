import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div
        className="judul bg-red-500 h-screen content-center bg-cover bg-center"
        style={{ backgroundImage: "url('Artikel_173_-_Preview.webp')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative mx-auto text-center text-white">
          <p className="text-2xl font-bold text-white">
            Menyalakan Literasi Dan Edukasi Menjaga Identitas Bangsa
          </p>
          <h1
            className="text-8xl font-bold bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent"
            style={{
              WebkitTextStroke: "1px white", // atau black, sesuai selera
            }}
          >
            MELITA
          </h1>
          <div className="my-6">
            <Link
              to="/definisi"
              className="text-4xl font-bold bg-gradient-to-r from-amber-500 to-amber-700 px-5 py-2 rounded-lg"
            >
              MULAI
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
