import Icons from "../Icons/Icons";

const WebRideParagraph = ` O WebRide é uma plataforma de rastreamento GPS
          que oferece recursos avançados para a prática de atividades ao ar
          livre. Com ele, você pode registrar e analisar detalhadamente seus
          trajetos ou treinos, obtendo dados precisos sobre velocidade,
          distância e outros parâmetros relevantes. A plataforma permite
          salvar seus dados.`;

function WebRideItem({ handleOpenModal }) {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        textAlign: "center",
        margin: "auto",
        border: "0.5px solid #000",
        borderRadius: "5px",
        width: "60%",
        marginBottom: "8%",
        height: "200px",
      }}
    >
      <p>{WebRideParagraph}</p>
      <Icons useHtml useCss useJs size={"32px"} />
    </div>
  );
}
export default WebRideItem;
