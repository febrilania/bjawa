// import { Link } from "react-router-dom";
// function Home() {
//   return (
//     <>
//       <div
//         className="judul bg-red-500 h-screen content-center bg-cover bg-center"
//         style={{ backgroundImage: "url('Artikel_173_-_Preview.webp')" }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-60"></div>
//         <div className="relative mx-auto text-center text-white">
//           <p className="text-2xl font-bold text-white">
//             Menyalakan Literasi Dan Edukasi Menjaga Identitas Bangsa
//           </p>
//           <h1
//             className="text-8xl font-bold bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent"
//             style={{
//               WebkitTextStroke: "1px white", // atau black, sesuai selera
//             }}
//           >
//             MELITA
//           </h1>
//           <div className="my-6">
//             <Link
//               to="/definisi"
//               className="text-4xl font-bold bg-gradient-to-r from-amber-500 to-amber-700 px-5 py-2 rounded-lg"
//             >
//               MULAI
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Home;
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="judul relative bg-red-500 min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('Artikel_173_-_Preview.webp')" }}
    >
      {/* Overlay hitam transparan */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Konten */}
      <div className="relative flex flex-col items-center justify-center min-h-screen text-center text-white px-4">
        <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-snug">
          Menyalakan Literasi Dan Edukasi Menjaga Identitas Bangsa
        </p>

        <h1
          className="mt-4 text-5xl sm:text-6xl md:text-8xl font-bold bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent"
          style={{
            WebkitTextStroke: "1px white",
          }}
        >
          MELITA
        </h1>

        <div className="mt-8">
          <Link
            to="/definisi"
            className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-500 to-amber-700 px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          >
            MULAI
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
