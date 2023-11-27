const Button = ({ className, handleClick, symbol, children }) => {
  return (
    <button className={className} onClick={() => handleClick(symbol)}>
      {children}
    </button>
  );
};

export default Button;
