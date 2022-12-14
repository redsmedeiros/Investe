import "./Cards.css"

const cards = ()=>{
    
    const cards = [
        {
            nome:"Título público",
            preco: 35.70,
            valorCompra: 27.89,
            tipo: "Pré-fixado"
        },
        {
            nome:"Vale s.a",
            preco: 37.65,
            valorCompra: 33.37,
            tipo: "Ações"
        },
        {
            nome:"Petrobrás",
            preco: 27.80,
            valorCompra: 31,
            tipo: "Ações",
        },
        {
            nome: "Título público",
            preco: 47.50,
            valorCompra: 47.80,
            tipo: "IPCA"
        }
    ]
    
    const calculo = (atual, compra)=>{
        let valor = (atual - compra) / atual
        let percent = valor * 100
        let resultado = percent.toFixed(2) + "%"
        
        return resultado}
        
    const negativo = (atual, compra)=>{
        let valor = (atual - compra) / atual
        if(valor < 0){
            return true
        }
        return false
    }
    
    return(
        <div>
            <div className="cards">
                {cards.map( card => (
                    <div className="cards-card">
                        <h1>{card.nome}</h1>
                        <hr></hr>
                        <div>
                           <p><span> Preço atual: </span>  R$ {card.preco}</p>
                           <p><span> Valor de compra: </span> R$ {card.valorCompra} </p>
                           <p><span> Tipo: </span>{card.tipo}</p>
                           <hr></hr>
                           <h1 style={negativo(card.preco, card.valorCompra ) ? {color:"#dc143c"} : {color: "#3cb371"}}>{calculo(card.preco,card.valorCompra)}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default cards