import Nav from './componentes/Nav'

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>{children}</main>
    </>
  )
}

export default Layout