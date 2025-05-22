// import { Link } from "react-router-dom";
// function Ngoko() {
//   return (
//     <>
//       <div
//         className="judul h-screen bg-cover bg-center p-10"
//         style={{ backgroundImage: "url('wayang.jpg')" }}
//       >
//         <div className="heading bg-amber-700 w-96 p-6 rounded-xl mb-3">
//             <h1 className="font-bold text-2xl text-white">Bahasa Jawa Ngoko</h1>
//         </div>
//         <div className="heading bg-amber-700 w-1/2 p-6 my-6  rounded-xl">
//             <h1 className="font-bold text-2xl text-white">Bahasa santai yang digunakan untuk berbicara dengan teman sebaya, adik atau orang yang sudah akrab</h1>
//             <h1 className="font-bold text-2xl text-white my-2">Contoh :</h1>
//             <h1 className="font-bold text-2xl text-white">"Kowe arep menyang ngendi"</h1>
//             <h1 className="font-bold text-2xl text-white mb-3">( kamu mau kemana )</h1>
//             <h1 className="font-bold text-2xl text-white">"Aku wis mangan"</h1>
//             <h1 className="font-bold text-2xl text-white">( Aku sudah makan )</h1>
//         </div>
//         <div className="flex gap-2">
//         <Link to ="/list" className="text-2xl font-bold bg-amber-700 px-5 py-2 rounded-lg text-white">Kembali</Link>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Ngoko;
import { Link } from "react-router-dom";

function Ngoko() {
  return (
    <div
      className="judul min-h-screen bg-cover bg-center px-4 py-10 flex flex-col items-center"
      style={{ backgroundImage: "url('wayang.jpg')" }}
    >
      {/* Judul */}
      <div className="bg-amber-700 w-full max-w-md p-6 rounded-xl mb-6 text-center shadow-md">
        <h1 className="font-bold text-2xl text-white">Bahasa Jawa Ngoko</h1>
      </div>

      {/* Penjelasan */}
      <div className="bg-amber-700 w-full max-w-md p-6 rounded-xl mb-6 text-white text-center shadow-md">
        <h1 className="font-bold text-2xl">
          Bahasa santai yang digunakan untuk berbicara dengan teman sebaya,
          adik, atau orang yang sudah akrab.
        </h1>
        <h1 className="font-bold text-2xl mt-6">Contoh:</h1>
        <h1 className="font-bold text-2xl">"Kowe arep menyang ngendi"</h1>
        <h1 className="font-bold text-2xl mb-3">(Kamu mau kemana)</h1>
        <h1 className="font-bold text-2xl">"Aku wis mangan"</h1>
        <h1 className="font-bold text-2xl">(Aku sudah makan)</h1>
      </div>

      {/* Tombol kembali */}
      <Link
        to="/list"
        className="text-lg sm:text-2xl font-bold bg-amber-700 px-6 py-3 rounded-lg text-white shadow-md hover:scale-105 transition-transform"
      >
        Kembali
      </Link>
    </div>
  );
}

export default Ngoko;
