import {
  faCss3Alt,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Icons({
  useReact,
  useJs,
  useTypescript,
  useRedux,
  useNode,
  useNext,
  useTailwind,
  useHtml,
  useCss,
  size,
}) {
  return (
    <div>
      {useJs && (
        <FontAwesomeIcon
          icon={faJs}
          style={{ fontSize: size, margin: "0 10px" }}
        />
      )}

      {useReact && (
        <FontAwesomeIcon
          icon={faReact}
          style={{ fontSize: size, margin: "0 10px" }}
        />
      )}

      {useTypescript && (
        <img
          src="https://cdn.worldvectorlogo.com/logos/typescript.svg"
          alt="TypeScript"
          style={{ width: size, height: size, margin: "0 10px" }}
        />
      )}
      {useTailwind && (
        <img
          src="https://cdn.worldvectorlogo.com/logos/tailwind-css-1.svg"
          alt="Tailwind CSS"
          style={{
            width: size,
            height: size,
            margin: "0 10px",
            marginBottom: "5px",
          }}
        />
      )}

      {useRedux && (
        <img
          src="https://cdn.worldvectorlogo.com/logos/redux.svg"
          alt="Redux"
          style={{ width: size, height: size, margin: "0 10px" }}
        />
      )}

      {useNode && (
        <img
          src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
          alt="Node.js"
          style={{ width: size, height: size, margin: "0 10px" }}
        />
      )}

      {useNext && (
        <img
          src="https://cdn.worldvectorlogo.com/logos/next-js.svg"
          alt="Next.js"
          style={{
            width: size,
            height: size,
            margin: "0 10px",
            marginBottom: "5px",
          }}
        />
      )}
      {useHtml && (
        <FontAwesomeIcon
          icon={faHtml5}
          style={{ fontSize: size, margin: "0 10px" }}
        />
      )}
      {useCss && (
        <FontAwesomeIcon
          icon={faCss3Alt}
          style={{ fontSize: size, margin: "0 10px" }}
        />
      )}
    </div>
  );
}
export default Icons;
