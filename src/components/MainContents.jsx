import "../styles/components/MainContents.sass";
import Avatar from "../img/Alecson.jpeg";
const MainContents = () => {
  return (
    <div id="div-main">
      <img src={Avatar} id="alecson"></img>
      <div id="div-textos">
        <h3 id="h3-main">Sobre Mim</h3>
        <p id="p-main">
          "Olá, meu nome é Alecson. Depois que conheci a área de programação em
          um curso técnico em informática no Senac em 2018, decidi que seria a
          área em que eu iria me especializar. No entanto, com a pandemia, a
          parte mais importante do curso, que era programação, acabou sendo um
          desafio para os reitores da instituição. Então, essa parte do curso
          não foi muito objetiva, e acabamos passando rapidamente por ela. Desde
          então, venho estudando por conta própria a área e me aperfeiçoando.
          Acredito que o próximo passo seja entrar em uma empresa profissional e
          assim me especializar ao mesmo tempo em que ajudo a empresa. Acredito
          que aprendo rápido e adoraria receber uma oportunidade."
        </p>
        <a href="https://github.com/Allecson">Meu GitHub ➞</a>
      </div>
    </div>
  );
};
export default MainContents;
