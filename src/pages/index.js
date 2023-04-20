import Banner from "./componentes/Banner";
import BannerRotativo from "./componentes/BannerRotativo";
import Layout from "./layout";
import '../firebase.config'
import Proyectos from "./componentes/proyectos/Proyectos";

export default function Home() {
  return (
  <Layout>
    <Banner 
      titulo='Felipe Calderón Espinoza'
      descripcion='Colocar imagen destacada de fondo, podría ser un video ¿?.. escribir habilidades'
      />
    <BannerRotativo />
    <Proyectos />
  </Layout>
  )
}
