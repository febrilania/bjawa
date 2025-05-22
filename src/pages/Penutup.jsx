// import { Link } from "react-router-dom";
// function Penutup() {
//   return (
//     <>
//       <div
//         className="judul h-screen content-center bg-cover bg-center"
//         style={{ backgroundImage: "url('wayang.jpg')" }}
//       >
//         <div className="mx-auto heading bg-amber-700 w-96 p-6 rounded-xl mb-3 text-center">
//           <h1 className="font-bold text-2xl text-white">
//             Sekian dan Terimakasih
//           </h1>
//           <h1 className="font-bold text-xl text-white">
//             By : Zidan Maulana Rizqi
//           </h1>
//         </div>
//         <div className="mx-auto heading bg-amber-700 w-96 p-6 rounded-xl mb-3 text-center">
//           <Link
//             to="/"
//             className="text-2xl font-bold bg-amber-700 px-5 py-2 rounded-lg text-white"
//           >
//             Home
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Penutup;
import { Link } from "react-router-dom";

function Penutup() {
  return (
    <div
      className="judul min-h-screen bg-cover bg-center px-4 py-10 flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('wayang.jpg')" }}
    >
      {/* Pesan Penutup */}
      <div className="bg-amber-700 w-full max-w-md p-6 rounded-xl mb-6 text-center shadow-md">
        <h1 className="font-bold text-2xl text-white">
          Sekian dan Terimakasih
        </h1>
        <h1 className="font-bold text-xl text-white mt-2">
          By: Zidan Maulana Rizqi
        </h1>
      </div>

      {/* Tombol Home */}
      <div className="bg-amber-700 w-full max-w-md p-6 rounded-xl text-center shadow-md">
        <Link
          to="/"
          className="text-lg sm:text-2xl font-bold bg-amber-700 px-6 py-3 rounded-lg text-white hover:scale-105 transition-transform"
        >
          Home
        </Link>
      </div>
    </div>
  );
}

export default Penutup;
