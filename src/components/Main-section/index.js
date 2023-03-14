import './index.css'
import imageIlustrativa from "./img-ilustrativa.png"
function Main() {

    return(
        <main className="conteiner">
        <section className="conteiner-principal">
            <div className="conteiner-principal-txt">
                <h1 className="conteiner-principal-txt-titulo">Bem vindo a nossa pagina!</h1>
                <h1 className="conteiner-principal-txt-titulo">Que tal adotar um companheiro peludo</h1>
                <h1 className="conteiner-principal-txt-titulo">para fazer parte da sua vida?</h1>
                <p className="conteiner-principal-txt-subtitulo">Sua adoção pode salvar a vida de um animal sem lar</p>
            </div>
                <img className="conteiner-principal-img" src={imageIlustrativa} alt="Não compre, adote!"/>
        </section>
    </main>
    )
}

export default Main;