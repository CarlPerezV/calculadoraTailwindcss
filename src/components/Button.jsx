import { ButtonStyles } from "./ButtonStyles";

const Button = ({ symbol, children }) => {
  // const addDigit = () => {
  //   la cantidad maxima de la calculadora son 12 digitos
  //   if (calc.length === 12) return;

  //   Evita que se agrege un . si el digito ya lo contiene
  //   if (calc.toString().includes(".") && nums.toString().includes(".")) return;

  //   si la pantalla esta en 0 al momento de agregar un digito quita el 0 del comienzo
  //   calc === "00" || calc === "0" ? setCalc(nums) : setCalc(input + nums);
  //   if (calc.charAt(0) === ".") {
  //     setCalc("0." + nums);
  //   }
  //   console.log(nums);
  // };

  // const addNumbers = () => {
  //   console.log(symbol);
  //   // const numberString = symbol.toString();

  //   // let numberValue;
  //   // if (numberString === "0" && calc.num === 0) {
  //   //   numberValue = "0";
  //   // } else {
  //   //   numberValue = Number(calc.num + numberString);
  //   // }
  //   // // console.log(numberValue);

  //   // setCalc({
  //   //   ...calc,
  //   //   num: numberValue,
  //   // });
  // };

  const commaClick = () => {
    console.log(symbol);
    // setCalc({
    //   calc,
    //   num: !calc.num.toString().includes(".") ? calc.num + symbol : calc.num,
    // });
    // console.log(calc.num);
  };

  const clear = () => {
    setCalc({ sign: "", num: 0, res: 0 });
  };

  const signClick = () => {
    console.log(symbol);
    // setCalc({
    //   sign: symbol,
    //   res: !calc.res && calc.num ? calc.num : calc.res,
    //   num: 0,
    // });
  };

  const resultClick = () => {
    // setCalc({
    //   res: eval(calc.num, calc.sign, calc.res),
    //   sign: "",
    //   num: 0,
    // });
  };

  const deleteClick = () => {
    // calc.num.length === 1 ? setCalc("0") : setCalc(input.slice(0, -1));
  };

  // const handleClick = () => {
  //   const results = {
  //     ".": commaClick,
  //     C: clear,
  //     DEL: deleteClick,
  //     "/": signClick,
  //     "*": signClick,
  //     "+": signClick,
  //     "-": signClick,
  //     "=": resultClick,
  //   };
  //   // console.log(results);

  //   if (results[symbol]) {
  //     return results[symbol]();
  //   } else {
  //     return addNumbers();
  //   }
  // };

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
