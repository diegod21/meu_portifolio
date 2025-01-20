import MainInfoIcons from "./MainInfoIcons";

function MainContent() {
  return (
    <div>
      <div className="title">Olá Eu Sou Diego Carvalho</div>
      <div className="paragrafo" style={{paddingBottom:"20px"}}>
        Eu Sou Diego. Eu Crio Sistemas Web<br></br>Usando Modernas Tecnologias.{" "}
        <br></br>
        <MainInfoIcons />
      </div>
      <div className="button" style={{margin:"auto"}}>Vamos Trabalhar Juntos!</div>
      <div className="footer"> 
        <p>
          Me Encontre No <a href="https://github.com/diegod21/">GitHub</a> and{" "}
          <a href="https://www.linkedin.com/in/diego-carvalho-d3003/">Linkedin</a>
          <br></br>Baixe Meu Currículo
        </p>
      </div>
    </div>
  );
}

export default MainContent;
