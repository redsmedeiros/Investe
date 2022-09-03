import "./Grafico.css"

const grafico = ()=>{
    
    const investimentos = [
        {id:1, nome: "Tesouro Direto", qtd:7, color:"#000080"},
        {id:2, nome: "Vale", qtd: 4, color:"#ffd700"},
        {id:3, nome: "Petrobrás", qtd: 1, color:"#00fa9a"}
        
    ]
    
    const cor = [
        "#1c1c1c",
        "#0000CD",
        "#FFD700"
        ]
    
    const geradorCor = ()=>{
        investimentos.forEach(x =>{
          let number = Math.random()
          return "teste"
        })
    }
    
    const calculoGrafico = ()=>{
        let total = 0
        investimentos.forEach( x => {
            total = total + x.qtd
        })
        
        return total
    }
    
    const percent = (qtd)=>{
      let per = (qtd / calculoGrafico()) * 100 
      return per.toFixed(1) + "%" 
    }
    
    const height = (qtd)=>{
        let valor = (qtd / calculoGrafico()) * 100
        
        return valor.toString() + "px"  
         }
    
    return (
        <div className="container-grafico">
            <h3>Dados da Carteira</h3>
           {investimentos.map(i => (
               <div>
                   <div>
                       <h5>{i.nome}</h5>
                       <div className="grafico-dados">
                          <div style={{backgroundColor: i.color, width: height(i.qtd), height: "40px", borderRadius:"10px", marginRight:"5px"}}></div>
                          <p>{percent(i.qtd)}</p>
                       </div>
                   </div>
               </div>
           ))}
        </div>
    )
}

export default grafico