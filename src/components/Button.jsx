import { ButtonStyles } from "./ButtonStyles";

const Button = ({ symbol, children, dispatch }) => {
  return (
    <button className={`${ButtonStyles(symbol)}`} onClick={dispatch}>
      {children}
    </button>
  );
};

export default Button;
