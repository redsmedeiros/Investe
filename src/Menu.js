import "./Menu.css"

const menu = ()=>{
    return(
        <div>
            <div className="navegacao">
                <ul>
                    <li className="lista">
                        <a>
                            <span className="lista">Carteira</span>
                        </a>
                    </li>
                    <li className="lista">
                        <a>
                            <span className="lista">Investimentos</span>
                        </a>
                    </li>
                    <li className="lista">
                        <a>
                            <span className="lista">Estatística</span>
                        </a>
                    </li>
                    <li className="lista">
                        <a>
                            <span className="lista">Anális3s</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default menu