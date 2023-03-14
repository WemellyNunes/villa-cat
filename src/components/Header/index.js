import './index.css'

function Header() {

    return (
        <div className="cabecalho">
            <nav className="cabecalho-menu">
                <a className="menu-itens" src="#">Sobre</a>
                <a className="menu-itens" src="#">Adotar</a>
                <a className="menu-itens" src="#">Doar</a>
                <a className="menu-itens" src="#">Parceria</a>
            </nav>
        </div>
    )
}

export default Header;