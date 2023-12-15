/* eslint-disable react/display-name */
import { nonePlayer } from '../Custom Data/Characters';

/* eslint-disable react/prop-types */
const Button = (props) => {
  const { onClick, character, className, backCardUrl } = props;

  return (
    <>
      <div className={className} onClick={onClick}>
        <div className="backSquare">
          <img src={backCardUrl ?? nonePlayer.url} alt={nonePlayer.alt} />
        </div>
        <div className="frontSquare">
          <img src={character.url} alt={character.alt} />
        </div>
      </div>
    </>
  );
};

export default Button;
