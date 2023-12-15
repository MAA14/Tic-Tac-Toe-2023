import { forwardRef } from 'react';
import './css/BubbleText.css';

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
// Status = "bubbleShow" | "bubbleHide"
// eslint-disable-next-line react/display-name
const BubbleText = forwardRef((props, ref) => {
  const { name, status, color, voice } = props;
  const blurColor = color.blur ?? 'white';
  const solidColor = color.solid ?? 'white';

  //Tangkep Refnya
  const audioRef = ref;

  const voiceController = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.currentTime = 0; // Balikin ke awal lagi voicenya
      audioRef.current.pause();
    }
  };

  return (
    <div
      className={`bubbleTextContainer ${status}`}
      style={{ '--blur-color': blurColor, '--solid-color': solidColor }}
    >
      <div className="bubbleText">
        <span className="titleName bubbleAcs">
          <h2>{name}</h2>
        </span>
        <span className="titleVoice bubbleAcs">
          <div className="voiceIcon" onClick={voiceController}>
            <img src="./Cit-Cat-Eot/VoiceIcon.png" alt="" />
          </div>
          <p className="voiceActor">{voice.actor}</p>
        </span>
        <div className="textContainer bubbleContent">
          <p>
            {voice.text} <br />
            {voice.textAlt ?? ''}
          </p>
        </div>
      </div>
      <p className="closeBubble">Press Empty Space to Close</p>
      <audio src={voice.src} ref={audioRef}></audio>
    </div>
  );
});

export default BubbleText;
