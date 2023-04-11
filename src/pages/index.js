import Banner from "./componentes/Banner";
import BannerRotativo from "./componentes/BannerRotativo";
import Layout from "./layout";
export default function Home() {
  return (
  <Layout>
    <Banner 
      titulo='Felipe Calderón Espinoza'
      descripcion='Desarrollador Web: React, Redux, NextJS, API, Javascript, Wordpress'
      />
    <BannerRotativo />
    <Banner 
      titulo='Aquí pondré más info'
      descripcion='Ya veré que coloco...'
      />
  </Layout>
  )
}
