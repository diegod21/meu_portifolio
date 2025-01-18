import {
    faJs,
    faReact,
  } from "@fortawesome/free-brands-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MainInfoIcons() {
  return (
    <div>
      <FontAwesomeIcon
        icon={faJs}
        style={{ fontSize: "32px", margin: "0 10px" }}
      />
      <FontAwesomeIcon
        icon={faReact}
        style={{ fontSize: "32px", margin: "0 10px" }}
      />
      <img
        src="https://cdn.worldvectorlogo.com/logos/typescript.svg"
        alt="TypeScript"
        style={{ width: "32px", height: "32px", margin: "0 10px" }}
      />
      <img
        src="https://cdn.worldvectorlogo.com/logos/redux.svg"
        alt="Redux"
        style={{ width: "32px", height: "32px", margin: "0 10px" }}
      />
      <img
        src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
        alt="Node.js"
        style={{ width: "32px", height: "32px", margin: "0 10px" }}
      />
      <img
        src="https://cdn.worldvectorlogo.com/logos/tailwind-css-1.svg"
        alt="Tailwind CSS"
        style={{
          width: "32px",
          height: "32px",
          margin: "0 10px",
          marginBottom: "5px",
        }}
      />
      <img
        src="https://cdn.worldvectorlogo.com/logos/next-js.svg"
        alt="Next.js"
        style={{
          width: "32px",
          height: "32px",
          margin: "0 10px",
          marginBottom: "5px",
        }}
      />
    </div>
  );
}

export default MainInfoIcons;
