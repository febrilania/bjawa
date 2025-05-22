// import { Link } from "react-router-dom";
// function List() {
//   return (
//     <>
//       <div
//         className="judul bg-red-500 h-screen bg-cover bg-center p-10"
//         style={{ backgroundImage: "url('wayang.jpg')" }}
//       >
//         <div className="heading bg-amber-700 w-96 p-6 rounded-xl mb-10">
//           <h1 className="font-bold text-2xl text-white">
//             Jenis - Jenis Bahasa Jawa
//           </h1>
//         </div>
//         <div className="heading bg-amber-600 w-96 p-6 rounded-xl mb-3">
//           <Link to='/kromo' className="font-bold text-2xl text-white">
//             Bahasa Jawa Krama Inggil
//           </Link>
//         </div>
//         <div className="heading bg-amber-600 w-96 p-6 rounded-xl mb-3">
//           <Link to='/ngoko' className="font-bold text-2xl text-white">
//             Bahasa Jawa Ngoko
//           </Link>
//         </div>
//         <div className="heading bg-amber-600 w-96 p-6 rounded-xl mb-3">
//           <Link to='/madya' className="font-bold text-2xl text-white">
//             Bahasa Jawa Kromo Madya
//           </Link>
//         </div>

//         <div className="flex gap-2 mt-10">
//           <Link
//             to="/definisi"
//             className="text-2xl font-bold bg-amber-700 px-5 py-2 rounded-lg text-white"
//           >
//             Kembali
//           </Link>
//           <Link
//             to="/penutup"
//             className="text-2xl font-bold bg-amber-700 px-5 py-2 rounded-lg text-white"
//           >
//             Lanjut
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }
// export default List;
import { Link } from "react-router-dom";

function List() {
  return (
    <div
      className="judul min-h-screen bg-cover bg-center px-4 py-10 flex flex-col items-center"
      style={{ backgroundImage: "url('wayang.jpg')" }}
    >
      {/* Judul */}
      <div className="bg-amber-700 w-full max-w-md p-6 rounded-xl mb-6 shadow-md text-center">
        <h1 className="font-bold text-2xl text-white">
          Jenis - Jenis Bahasa Jawa
        </h1>
      </div>

      {/* List jenis bahasa */}
      <div className="flex flex-col gap-4 w-full max-w-md">
        <Link
          to="/kromo"
          className="bg-amber-600 p-5 rounded-xl text-white text-2xl font-bold text-center shadow-md hover:scale-105 transition-transform"
        >
          Bahasa Jawa Kromo Inggil
        </Link>
        <Link
          to="/ngoko"
          className="bg-amber-600 p-5 rounded-xl text-white text-2xl font-bold text-center shadow-md hover:scale-105 transition-transform"
        >
          Bahasa Jawa Ngoko
        </Link>
        <Link
          to="/madya"
          className="bg-amber-600 p-5 rounded-xl text-white text-2xl font-bold text-center shadow-md hover:scale-105 transition-transform"
        >
          Bahasa Jawa Kromo Madya
        </Link>
      </div>

      {/* Tombol navigasi */}
      <div className="flex flex-row sm:flex-row gap-4 mt-10">
        <Link
          to="/definisi"
          className="text-lg sm:text-2xl font-bold bg-amber-700 px-6 py-3 rounded-lg text-white text-center shadow-md hover:scale-105 transition-transform"
        >
          Kembali
        </Link>
        <Link
          to="/penutup"
          className="text-lg sm:text-2xl font-bold bg-amber-700 px-6 py-3 rounded-lg text-white text-center shadow-md hover:scale-105 transition-transform"
        >
          Lanjut
        </Link>
      </div>
    </div>
  );
}

export default List;
