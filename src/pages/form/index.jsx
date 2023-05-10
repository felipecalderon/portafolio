import { useState } from 'react'
// import axios from 'axios'

export default function Form(){
  const [nombre, setNombre] = useState('')
  const [link, setLink] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [creacion, setCreacion] = useState('')
  const [imagen, setImagen] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/proyectos', { nombre, link, empresa, creacion, imagen })
      if (res.status === 201) {
        setSuccess(true)
        setNombre('')
        setLink('')
        setEmpresa('')
        setCreacion('')
        setImagen('')
        setError('')
      }
    } catch (error) {
      setError(error.response.data.error)
    }
  }
  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 dark:text-gray-800">
        <div className="flex flex-col">
            <label htmlFor="nombre" className="font-medium text-gray-200">Nombre del proyecto</label>
            <input
            type="text"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            />
        </div>
        <div className="flex flex-col">
            <label htmlFor="link" className="font-medium text-gray-200">Link del proyecto</label>
            <input
            type="text"
            name="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            />
        </div>
        <div className="flex flex-col">
            <label htmlFor="empresa" className="font-medium text-gray-200">Nombre de la empresa</label>
            <input
            type="text"
            name="empresa"
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
            className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            />
        </div>
        <div className="flex flex-col">
            <label htmlFor="creacion" className="font-medium text-gray-200">Fecha de creación</label>
            <input
            type="date"
            name="creacion"
            value={creacion}
            onChange={(e) => setCreacion(e.target.value)}
            className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            />
        </div>
        <div className="flex flex-col">
            <label htmlFor="imagen" className="font-medium text-gray-200">URL de la imagen</label>
            <input
            type="text"
            name="imagen"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
            className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            />
        </div>
        <div className="flex items-center justify-end">
            <button type="submit" className="px-4 py-2 bg-gray-800 border border-transparent rounded-md font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Agregar proyecto</button>
        </div>
    </form>
  )
}