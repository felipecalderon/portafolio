import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore'
import {db} from '../../firebase.config'

export default async function handler(req, res) {
    const coleccionProyectos = collection(db, "proyectos")
    switch (req.method) {

        case 'GET': {
            try {
                const proyectos = await getDocs(coleccionProyectos)
                const dataProyectos = proyectos.docs.map(proyecto => proyecto.data())
                return res.status(200).json(dataProyectos)
            } catch (error) {
                return res.status(400).json('No pudimos traer los proyectos', error.message)
            }
        }

        case 'POST': {
            try {
                const {nombre, link, empresa, creacion, imagen} = req.body
                if(!nombre || !link || !empresa || !creacion || !imagen) throw new Error("Faltan datos en body")
                const proyectoRef = await addDoc(coleccionProyectos, {nombre, link, empresa, creacion, imagen})
                return res.status(201).json(proyectoRef)
            } catch (error) {
                return res.status(400).json({error})
            }
        }

        case 'PUT': {
            try {
              const { id } = req.query
              if(!id) throw new Error("Debes ingresar un id")
              const proyectoRef = doc(db, "proyectos", id)
              const { nombre, link, empresa, creacion, imagen } = req.body
      
              if (!nombre || !link || !empresa || !creacion || !imagen) {
                throw new Error("Faltan datos en body")
              }
      
              await updateDoc(proyectoRef, {
                nombre,
                link,
                empresa,
                creacion,
                imagen
              })
      
              return res.status(200).json({
                message: `El proyecto con id ${id} se ha actualizado correctamente.`
              })
            } catch (error) {
              return res.status(400).json({
                message: `Error al actualizar el proyecto: ${error.message}`
              })
            }
          }

        case 'DELETE': {
            try {
              const { id } = req.query
              if(!id) throw new Error("Debes ingresar un id")

              const proyectoRef = doc(db, "proyectos", id)
      
              await deleteDoc(proyectoRef)
      
              return res.status(200).json({
                message: `El proyecto con id ${id} se ha eliminado correctamente.`
              })
            } catch (error) {
              console.error(error)
              return res.status(400).json({
                message: `Error al eliminar el proyecto: ${error.message}`
              })
            }
          }
        default: {
           return res.status(200).json({ message: `Metodo ${req.method} no aceptado. ¿Que intentabas?` })
        }
    }
  }
