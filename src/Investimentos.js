import "./Investimentos.css"
import {useState} from "react"
import Cards from "./Cards"

const investimentos = () => {
    
   const [classe, setClasse] = useState("card-linha-button")
   
   const changeStyle = ()=>{
       setClasse("card-linha-troca")
       console.log(classe)
   }
    
    const dados = [
        {nome: "Tesouro Direto",
         qtd: 2,
         vender:true
        },
        {nome: "Vale s.a",
         qtd: 5,
         vender:false
        }
    ]
    
    const vender= (vender)=>{
        if(vender == true){
            return true
        }
        return false
    }
    
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
                              <button style={ vender(dado.vender) ? {backgroundColor: "#3cb371", border: "none", width: "60px", height:"30px", marginTop: "15px", color:"white"} : {backgroundColor: "#dc143c", width:"60px", height:"30px", marginTop: "15px", color:"white", border:"none"}}>Vender</button>
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
