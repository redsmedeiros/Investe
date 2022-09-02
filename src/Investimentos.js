import "./Investimentos.css"
const investimentos = () => {
    
    const teste = "teste"
    
    const dados = [
        {nome: "Tesouro Direto"},
        {nome: "Vale s.a"}
    ]
  return <div>
      <div className="card">
          <div className="card-titulo">
              <h1>Carteira</h1>
              <button>+ Add</button>
          </div>
          <div className="card-body">
              <div className="card-conteudo">
                  {dados.map((dado)=>(
                      <div className="card-linha">
                          <h4>{dado.nome}</h4>
                          <button>+</button>
                      </div>
                  ))}
              </div>
          </div>
      </div>
  </div>;
};

export default investimentos;
