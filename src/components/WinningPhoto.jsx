import './css/WinningPhoto.css';

// eslint-disable-next-line react/prop-types
function WinningPhoto({ src, alt, status, onClick, children }) {
  return (
    <div className={`bodyWinning ${status}`} onClick={onClick}>
      <div className="winningPhotoCointainer">
        <div className="photoContainer">
          <img src={src} alt={alt} />
        </div>
      </div>
      {children}
    </div>
  );
}

export { WinningPhoto };
