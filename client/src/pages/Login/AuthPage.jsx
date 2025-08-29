import computerimg from "../../assets/images/gaming-computer.webp";
import Login from "../../components/Auth/Login";
export default function AuthPage() {
  return (
    <div className="bg-blue-50 h-screen w-screen flex">
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="font-roboto font-normal text-2xl text-center">
            Rejoignez ReGear
          </h1>
          <h2 className="font-inter font-[300] text-sm text-center text-gray-500">
            La communauté des passionnés de hardware
          </h2>
        </div>
        <img
          className="rounded-lg shadow-xl max-h-[600px]"
          src={computerimg}
          alt="Gaming computer"
        />
        <ul className="flex gap-2">
          <li className="text-center h-[7rem] w-[8rem] bg-white rounded-lg flex flex-col gap-2 border shadow-sm">
            <span className="text-xl pt-3">🛡️</span>
            <p>Transactions sécurisées</p>
          </li>
          <li className="text-center h-[7rem] w-[8rem] bg-white rounded-lg flex flex-col gap-2 border shadow-sm">
            <span className="text-xl pt-3">⚡</span>
            <p>Livraison rapide</p>
          </li>
          <li className="text-center h-[7rem] w-[8rem] bg-white rounded-lg flex flex-col gap-2 border shadow-sm">
            <span className="text-xl pt-3">💬</span>
            <p>Support 24/7</p>
          </li>
        </ul>
      </div>
      <Login />
    </div>
  );
}
