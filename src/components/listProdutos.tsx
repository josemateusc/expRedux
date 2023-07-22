import "bootstrap/dist/css/bootstrap.min.css"
import "react-bootstrap"
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector"
import { RootState } from "../redux/store"

export default function ListagemProdutos(){
    const produto = useSelector((state: RootState) => state.produto)
    return(
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Estoque</th>
                    </tr>
                </thead>
                <tbody>
                    {
                     produto.produtos.map((produto: any) => {
                        return(
                            <tr>
                                <td>{produto.nome}</td>
                                <td>{produto.preco}</td>
                                <td>{produto.estoque}</td>
                            </tr>
                        )
                     })
                    }
                </tbody>
            </table>
        </div>
    )
} 