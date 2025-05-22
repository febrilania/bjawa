import { Link } from "react-router-dom";
function Penutup() {
  return (
    <>
      <div
        className="judul h-screen content-center bg-cover bg-center"
        style={{ backgroundImage: "url('wayang.jpg')" }}
      >
        <div className="mx-auto heading bg-amber-700 w-96 p-6 rounded-xl mb-3 text-center">
          <h1 className="font-bold text-2xl text-white">
            Sekian dan Terimakasih
          </h1>
          <h1 className="font-bold text-xl text-white">
            By : Zidan Maulana Rizqi
          </h1>
        </div>
        <div className="mx-auto heading bg-amber-700 w-96 p-6 rounded-xl mb-3 text-center">
          <Link
            to="/"
            className="text-2xl font-bold bg-amber-700 px-5 py-2 rounded-lg text-white"
          >
            Home
          </Link>
        </div>
      </div>
    </>
  );
}

export default Penutup;
