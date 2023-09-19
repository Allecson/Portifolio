import "../styles/components/projetos.sass";
import { BiLinkExternal } from "react-icons/bi";
import Dev1 from "../img/dev1.jpeg";
import Dev2 from "../img/dev2.jpeg";
import Dev3 from "../img/dev3.jpeg";
import Dev4 from "../img/dev4.jpeg";
import Dev5 from "../img/dev5.jpeg";
import Dev6 from "../img/dev6.jpeg";


const Projetos = () => {
  return (
    <section className="projects" id='projects'>
      <h1 className="h1-projects">Minha Caminhada</h1>
      <div className="div-projects">
        <div className="div-img-texts-projects">
          <img className="imgs" src={Dev1} />
          <div className="texts-project">
            <h2 className="h2-texts-project">Erro 404</h2>
            <p className="p-texts-project">
              Uma página que mostra um erro padrão de 404com uso de HTML,CSS<br></br><span>(Veja completo abaixo)</span>
            </p>
            <a href="https://allecson.github.io/404-not-found/" className="a-texts-project" target="_blank">
              <BiLinkExternal />
            </a>
          </div>
        </div>
        <div className="div-img-texts-projects">
          <img className="imgs" src={Dev2} />
          <div className="texts-project">
            <h2 className="h2-texts-project">Página Profissional</h2>
            <p className="p-texts-project">
              Uma página que mostra as habilidades pessoais de uma profissional com uso de HTML,CSS e JavaScript<br></br><span>(Veja completo abaixo)</span>
            </p>
            <a href="https://allecson.github.io/interior-consultant-master/" target="_blank" className="a-texts-project">
              <BiLinkExternal />
            </a>
          </div>
        </div>
        <div className="div-img-texts-projects">
          <img className="imgs" src={Dev3} />
          <div className="texts-project">
            <h2 className="h2-texts-project">Receita de Bolo</h2>
            <p className="p-texts-project">
              Uma página de uma receita de bolo com uso mais aprofundado de HTML, mas tambem utiliza CSS<br></br><span>(Veja completo abaixo)</span>
            </p>
            <a href="https://allecson.github.io/4-Recipe-page/" target="_blank" className="a-texts-project">
              <BiLinkExternal />
            </a>
          </div>
        </div>
        <div className="div-img-texts-projects">
          <img className="imgs" src={Dev4} />
          <div className="texts-project">
            <h2 className="h2-texts-project">Shopping</h2>
            <p className="p-texts-project">
            Uma Página de compras que utiliza HTML, CSS e JavaScript<br></br><span>(Veja completo abaixo)</span>
            </p>
            <a href="https://allecson.github.io/6-checkout-page-master/" className="a-texts-project" target="_blank">
              <BiLinkExternal />
            </a>
          </div>
        </div>
        <div className="div-img-texts-projects">
          <img className="imgs" src={Dev5} />
          <div className="texts-project">
            <h2 className="h2-texts-project">Portfólio</h2>
            <p className="p-texts-project">
              Um Portfólio de Edie, com uso melhorado de HTML,CSS e JavaScript<br></br><span>(Veja completo abaixo)</span>
            </p>
            <a href="https://allecson.github.io/7-edie-homepage-master/" className="a-texts-project" target="_blank">
              <BiLinkExternal />
            </a>
          </div>
        </div>
        <div className="div-img-texts-projects">
          <img className="imgs" src={Dev6} />
          <div className="texts-project">
            <h2 className="h2-texts-project">Galeria</h2>
            <p className="p-texts-project">
              Uma página de galeria com uso de HTML, SASS e JavaScript<br></br><span>(Veja completo abaixo)</span>
            </p>
            <a href='https://allecson.github.io/Projeto-SASS-galeria/' className="a-texts-project" target="_blank">
              <BiLinkExternal />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projetos;
