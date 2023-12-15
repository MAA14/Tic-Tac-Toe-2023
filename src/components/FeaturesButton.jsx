/* eslint-disable react/prop-types */
function FeaturesButton({ id, src, alt, onClick, className }) {
  return (
    <div
      className={`circle-icon features-on-top ${className}`}
      id={id}
      onClick={onClick}
    >
      <img src={src} alt={alt} />
    </div>
  );
}

export default FeaturesButton;
