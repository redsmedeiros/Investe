import "./Grafico.css"

const grafico = ()=>{
    
    const investimentos = [
        {id:1, nome: "Tesouro Direto", qtd:2},
        {id:2, nome: "Vale", qtd: 2},
        {id:3, nome: "Petrobrás", qtd: 1}
        
    ]
    
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
           {investimentos.map(i => (
               <div style={{width: height(i.qtd), height: "40px", backgroundColor: "#1c1c1c", }}>
                   {height(i.qtd)}
               </div>
           ))}
        </div>
    )
}

export default grafico