import "./index.scss";
function Light({ onClick }) {
  return <span onClick={onClick} id="light" className="loader"></span>;
}

export default Light;
