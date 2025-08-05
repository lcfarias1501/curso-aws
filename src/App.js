import ProductsRegister from "./components/ProductsRegister";
import ProductList from './components/ProductList'
import CategoryRegister from './components/CategoryRegister'
import CategoryList from './components/CategoryList'
import { useState } from "react";
import { Container } from "@mui/material";
import Menu from "./components/Menu";
import './style.css'


export default function App() {

  const [pageSelected, setPageSelected] = useState('ProductList')

  const renderPage = () => {
    switch (pageSelected) {
      case 'ProductRegister':
        return <ProductsRegister texto={'Cadastro de Produtos'} />
      case 'CategoryList':
        return <CategoryList texto={'Listagem de Categorias'} />
      case 'CategoryRegister':
        return <CategoryRegister texto={'Cadastro de Categoria'} />
      default:
        return <ProductList texto={'Listagem de Produtos'} />
    }
  }

  const onNavigate = (page) => setPageSelected(page)

  return (
    <div className="App">

      <Menu 
        onChangePage={page => onNavigate(page)}
      />

      <Container>

        {renderPage()}

      </Container>

    </div>
  );
}
