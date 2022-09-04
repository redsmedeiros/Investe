import "./Menu.css"

const menu = ()=>{
    return(
        <div>
            <div className="navegacao">
                <ul>
                    <li className="lista-ativa">
                        <a>
                            <span className="title">Carteira</span>
                        </a>
                    </li>
                    <li className="lista">
                        <a>
                            <span className="title">Investimentos</span>
                        </a>
                    </li>
                    <li className="lista">
                        <a>
                            <span className="title">Estatística</span>
                        </a>
                    </li>
                    <li className="lista">
                        <a>
                            <span className="title">Anális3s</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default menu