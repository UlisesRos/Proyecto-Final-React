import facebook from "../../img/RedesSociales/facebook.jpeg"
import instagram from "../../img/RedesSociales/instagram.jpeg"
import twitter from "../../img/RedesSociales/twitter.jpeg"
import youtube from "../../img/RedesSociales/youtube.jpeg"
import "../../css/footer.css";

const Footer = () => {

    return(
        <footer>
            <div className="generalDiv">
            <div className="divProdSer">
                <h4>Productos y servicios</h4>
                    <ul className="ulProdSer">
                        <li><a href="#Smartphones">Smartphones</a></li>
                        <li><a href="#Tablets">Tablets</a></li>
                        <li><a href="#Notebooks">Notebooks</a></li>
                        <li><a href="#Audio">Audio</a></li>
                        <li><a href="#TVs">TVs</a></li>
                        <li><a href="#Accesorios">Accesorios</a></li>
                    </ul>
            </div>
            <div className="divSoporte">
                <h4>Soporte</h4>
                    <ul className="ulSoporte">
                        <li><a href="#Chat Online">Chat Online</a></li>
                        <li><a href="#E-Mail de Soporte">E-Mail de Soporte</a></li>
                        <li><a href="#Telefono de Soporte">Telefono de Soporte</a></li>
                        <li><a href="#Comunidad">Comunidad</a></li>
                        <li><a href="#Sugerencias">Sugerencias</a></li>
                    </ul>
            </div>

            <div className="divAcercaDeNos">
                <h4>Acerca de nosotros</h4>
                    <ul className="ulAcercaDeNos">
                        <li><a href="#Información de la Empresa">Información de la Empresa</a></li>
                        <li><a href="#identidad de la Marca">Identidad de la Marca</a></li>
                        <li><a href="#Noticias">Noticias</a></li>
                        <li><a href="#Ética">Ética</a></li>
                        <li><a href="#Relaciones con los Inversores">Relaciones con los Inversores</a></li>
                    </ul>
            </div>
            </div>

            
            <div className="lastDiv" >
                
                <p>Mantenete informado!</p>
                
                <div className="divSocialMedia">    
                    <a href="http://www.twitter.com"><img className="twitterImg" src={twitter}></img></a>
                    <a href="https://www.instagram.com"><img className="instagramImg" src={instagram}></img></a>
                    <a href="https://www.facebook.com"><img className="facebookImg" src={facebook}></img></a>
                    <a href="https://www.youtube.com"><img className="youtubeImg" src={youtube}></img></a>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer