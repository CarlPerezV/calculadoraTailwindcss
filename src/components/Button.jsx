import { ButtonStyles } from "./ButtonStyles";

const Button = ({ symbol, children, handleClick }) => {
  return (
    <button
      className={`${ButtonStyles(symbol)}`}
      onClick={() => handleClick(symbol)}
    >
      {children}
    </button>
  );
};

export default Button;
