import Icons from "../Icons/Icons";

const Hello = "Olá Eu Sou Diego Carvalho";

function PersonalInfo() {
  return (
    <div className="personalInfo">
      <div>
        <div className="">
          <h1>{Hello}</h1>
        </div>
        <div className="">
          Eu Sou Diego. Eu Crio Sistemas Web
          <br />
          Usando Modernas Tecnologias.
          <br />
          <div>
            <Icons
              useJs
              useNext
              useReact
              useTypescript
              useNode
              useTailwind
              useRedux
              size={"52px"}
            ></Icons>
          </div>
        </div>
      </div>
      <div
        className="button"
        onClick={() => {
          window.location.href =
            "mailto:diegousouib@gmail.com?subject=Vamos Trabalhar Juntos!&body=Olá Diego, gostaria de discutir oportunidades de colaboração.";
        }}
      >
        Vamos Trabalhar Juntos!
      </div>
      <div className="footer">
        <p>
          Me Encontre No <a href="https://github.com/diegod21/">GitHub</a> and{" "}
          <a href="https://www.linkedin.com/in/diego-carvalho-d3003/">
            Linkedin
          </a>
          <br />
          Baixe Meu Currículo
        </p>
      </div>
    </div>
  );
}
export default PersonalInfo;
