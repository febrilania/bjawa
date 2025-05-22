import { Link } from "react-router-dom";
function Kromo() {
  return (
    <>
      <div
        className="judul h-screen bg-cover bg-center p-10"
        style={{ backgroundImage: "url('wayang.jpg')" }}
      >
        <div className="heading bg-amber-700 w-96 p-6 rounded-xl mb-3">
            <h1 className="font-bold text-2xl text-white">Bahasa Jawa Kromo Inggil</h1>
        </div>
        <div className="heading bg-amber-700 w-1/2 p-6 my-6  rounded-xl">
            <h1 className="font-bold text-2xl text-white">Bahasa paling sopan dan halus, digunakan untuk berbicara dengan orang tua, tokoh masyarakat atau dalam situasi resmi</h1>
            <h1 className="font-bold text-2xl text-white my-2">Contoh :</h1>
            <h1 className="font-bold text-2xl text-white">"Kulo Sampun Nedha"</h1>
            <h1 className="font-bold text-2xl text-white">( Saya sudah Makan )</h1>
        </div>
        <div className="flex gap-2">
        <Link to ="/list" className="text-2xl font-bold bg-amber-700 px-5 py-2 rounded-lg text-white">Kembali</Link>
        </div>
      </div>
    </>
  );
}
export default Kromo;
