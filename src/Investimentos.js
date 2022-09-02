import "./Investimentos.css"
import {useState} from "react"
import Cards from "./Cards"

const investimentos = () => {
    
    
    
    const dados = [
        {nome: "Tesouro Direto",
         qtd: 2
        },
        {nome: "Vale s.a",
         qtd: 5
        }
    ]
  return <div>
      <div className="card">
          <div className="card-titulo">
              <h1>Carteira</h1>
              <button>Ativo</button>
          </div>
          <div className="card-body">
              <div className="card-conteudo">
                  {dados.map((dado)=>(
                      <div className="card-linha">
                          <h4>{dado.nome}</h4>
                          <div className="card-linha-ga">
                              <h5>Qtd: {dado.qtd} </h5>
                              <button onClick="()=>{}">+</button>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>
      <Cards></Cards>
  </div>;
};

export default investimentos;
