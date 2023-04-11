const Banner = ({titulo, descripcion}) => {
    return (
    <div className="bg-gray-100 dark:bg-gray-800 py-20 sm:py-0 text-white">
      <div className="max-w-7xl h-36 sm:h-48 md:h-64 lg:h-96 mx-auto py-4 px-4 sm:py-8 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
        <h2 className="text-gray-800 dark:text-white text-2xl font-extrabold tracking-tight text-center sm:text-4xl">
          {titulo}
        </h2>
        <p className="text-gray-800 dark:text-white mt-3 text-lg text-center sm:mt-5 sm:text-xl sm:max-w-xl">
          {descripcion}
        </p>
      </div>
    </div>
    )
}

export default Banner