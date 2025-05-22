// import { Link } from "react-router-dom";
// function Definition() {
//   return (
//     <>
//       <div
//         className="judul h-screen bg-cover bg-center p-10"
//         style={{ backgroundImage: "url('wayang.jpg')" }}
//       >
//         <div className="heading bg-amber-700 w-80 p-6 rounded-xl mb-3">
//             <h1 className="font-bold text-2xl text-white">Apa Itu Bahasa Jawa ?</h1>
//         </div>
//         <div className="heading bg-amber-700 w-1/2 p-6 my-6  rounded-xl">
//             <h1 className="font-bold text-2xl text-white">Bahasa jawa adalah salah satu bahasa daerah yang berasal dari pulau jawa yang mayoritas tinggal di provinsi Jawa Tengah, Daerah Istimewa Yogyakarta dan Jawa Timur. Bahasa ini juga digunakan di beberapa daerah diluar Jawa seperti di sebagian Sumatra, Kalimantan hingga Suriname karena persebaran masyarakat Jawa</h1>
//         </div>
//         <div className="flex gap-2">
//         <Link to ="/" className="text-2xl font-bold bg-amber-700 px-5 py-2 rounded-lg text-white">Kembali</Link>
//         <Link to ="/list" className="text-2xl font-bold bg-amber-700 px-5 py-2 rounded-lg text-white">Lanjut</Link>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Definition;
import { Link } from "react-router-dom";

function Definition() {
  return (
    <div
      className="judul min-h-screen bg-cover bg-center px-4 py-10 flex flex-col items-center"
      style={{ backgroundImage: "url('wayang.jpg')" }}
    >
      {/* Judul */}
      <div className="bg-amber-700 w-full max-w-md p-6 rounded-xl mb-4 shadow-md">
        <h1 className="font-bold text-2xl text-white text-center">
          Apa Itu Bahasa Jawa?
        </h1>
      </div>

      {/* Penjelasan */}
      <div className="bg-amber-700 w-full max-w-3xl p-6 rounded-xl mb-6 shadow-md">
        <p className="font-medium text-white text-justify text-base sm:text-lg leading-relaxed">
          Bahasa Jawa adalah salah satu bahasa daerah yang berasal dari Pulau
          Jawa, yang mayoritas digunakan di provinsi Jawa Tengah, Daerah
          Istimewa Yogyakarta, dan Jawa Timur. Bahasa ini juga digunakan di
          beberapa daerah di luar Jawa seperti Sumatra, Kalimantan, hingga
          Suriname karena persebaran masyarakat Jawa.
        </p>
      </div>

      {/* Navigasi */}
      <div className="flex flex-row sm:flex-row gap-4">
        <Link
          to="/"
          className="text-lg sm:text-2xl font-bold bg-amber-700 px-6 py-3 rounded-lg text-white text-center shadow-md hover:scale-105 transition-transform"
        >
          Kembali
        </Link>
        <Link
          to="/list"
          className="text-lg sm:text-2xl font-bold bg-amber-700 px-6 py-3 rounded-lg text-white text-center shadow-md hover:scale-105 transition-transform"
        >
          Lanjut
        </Link>
      </div>
    </div>
  );
}

export default Definition;
