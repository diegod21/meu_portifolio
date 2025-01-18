import MainInfoIcons from "./MainInfoIcons";

function MainContent() {
  return (
    <div>
      <div className="title">Olá Eu Sou Diego Carvalho</div>
      <div className="paragrafo">
        Eu Sou Diego. Eu Crio Sistemas Web<br></br>Usando Modernas Tecnologias.{" "}
        <br></br>
        <MainInfoIcons />
      </div>
      <div className="button">Vamos Trabalhar Juntos!</div>
      <div className="footer">
        Me Encontre No <a href="https://github.com/diegod21/">GitHub</a> and{" "}
        <a href="https://www.linkedin.com/in/diego-carvalho-d3003/">Linkedin</a>
        <br></br>Baixe Meu Currículo
      </div>
    </div>
  );
}

export default MainContent;
