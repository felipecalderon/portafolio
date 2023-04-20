import Image from "next/image";

export default function Proyecto(){
    return (
    <div className="w-full md:w-1/2 xl:w-1/4 px-3">
    <div className="bg-gray-400 dark:bg-blue-950 shadow-lg rounded-lg overflow-hidden">
      <Image className="w-full h-56 object-cover" src="/5311.jpg" width={200} height={200} alt="Article"/>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Nombre empresa</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">Tipo: <strong>Ecommerce</strong></p>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Descripción corta del proyecto.</p>
        <a href="#" className="block mt-2 text-blue-600 hover:underline">Ver proyecto</a>
      </div>
    </div>
  </div>
    )
}