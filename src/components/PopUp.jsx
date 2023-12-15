/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
export default function PopUp({ error, status, onClick }) {
  return (
    <div
      className={`popUpContainer ${status}`}
      onClick={onClick}
      id="popUpBody"
    >
      <div className="popUp">
        <span className="popUpAcs bottom"></span>
        <span className="popUpAcs top"></span>
        <div className="textContainer">
          <h1>ERROR : {error.name}</h1>
          <p> "{error.message}"</p>
          <p className="quoteser">---- {error.quoteser} ----</p>
        </div>
      </div>
      <div className="closePopUp">
        <p>Press Empty Space to Close</p>
      </div>
    </div>
  );
}
