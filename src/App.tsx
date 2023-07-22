import './App.css';
import { increment, decrement, toSquare } from './redux/features/count.slices';
import ListagemProdutos from './components/listProdutos';
import FormularioProduto from './components/formProduto';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProdutos } from './redux/features/produto.slice';
import { AppDispatch } from './redux/store';

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(()=> {
    dispatch(fetchProdutos());
  })
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      justifyItems: "center"
    }}>
    <div style={{width: "50%"}}>
      <FormularioProduto/>
      <ListagemProdutos />
    </div>
    
    </div>
  )
}

export default App;
