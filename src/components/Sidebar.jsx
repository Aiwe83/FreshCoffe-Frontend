import useQuiosco from "../hooks/useQuiosco";
import Categoria from "./Categoria";
import { useAuth } from "../hooks/useAuth";

export default function Sidebar() {

  const { categorias } = useQuiosco();
  const { logout, user } = useAuth({ middleware: "auth" });

  return (
    <aside className="w-72">

      <div className="p-4">
        <img className="w-40" src="../img/logo.svg" alt="Imagen Logo" />
      </div>

      <p className="my-10 text-xl text-center font-bold">Hola! {user?.name}</p>
      <div className="mt-10 ">
        {categorias.map((categoria) => (
          <Categoria

            key={categoria.id}//Es importantisimos pasar o crear un id unico sino la consola mostrara un error

            categoria={categoria} //Props
          />
        ))}
      </div>
      <div className="my-5 px-5">
        <button
          type="button"
          className="text-center bg-red-500 hover:bg-red-600 w-full p-3 font-bold text-white truncate rounded"
          onClick={logout}
        >
          Cancelar Orden
        </button>
      </div>
    </aside>
  );
}