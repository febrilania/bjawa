import { Link } from "react-router-dom";
function Definition() {
  return (
    <>
      <div
        className="judul h-screen bg-cover bg-center p-10"
        style={{ backgroundImage: "url('wayang.jpg')" }}
      >
        <div className="heading bg-amber-700 w-80 p-6 rounded-xl mb-3">
            <h1 className="font-bold text-2xl text-white">Apa Itu Bahasa Jawa ?</h1>
        </div>
        <div className="heading bg-amber-700 w-1/2 p-6 my-6  rounded-xl">
            <h1 className="font-bold text-2xl text-white">Bahasa jawa adalah salah satu bahasa daerah yang berasal dari pulau jawa yang mayoritas tinggal di provinsi Jawa Tengah, Daerah Istimewa Yogyakarta dan Jawa Timur. Bahasa ini juga digunakan di beberapa daerah diluar Jawa seperti di sebagian Sumatra, Kalimantan hingga Suriname karena persebaran masyarakat Jawa</h1>
        </div>
        <div className="flex gap-2">
        <Link to ="/" className="text-2xl font-bold bg-amber-700 px-5 py-2 rounded-lg text-white">Kembali</Link>
        <Link to ="/list" className="text-2xl font-bold bg-amber-700 px-5 py-2 rounded-lg text-white">Lanjut</Link>
        </div>
      </div>
    </>
  );
}
export default Definition;
