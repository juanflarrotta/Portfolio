import "../Btn/btn.scss";
export default function Btn(props) {
  const { onClick, icon, className } = props;

  return (
    <button onClick={onClick} className={`btn ${className}`}>
      <span className={icon}></span>
      <span className={icon}></span>
      <span className={icon}></span>
    </button>
  );
}
