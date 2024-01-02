import { useState } from "react";
import Button from "./Button";
import Screen from "./Screen";

const Calculadora = () => {
  const [input, setInput] = useState("0");
  // Calc la ocupare para guardar el primer elemento

  // const ops = ["+", "-", "*", "/"];

  const addNumbers = (nums) => {
    let partialValue = "0";

    const ops = ["+", "-", "*", "/"];
    input === "00" || input === "0" ? setInput(nums) : setInput(input + nums);

    if (nums.toString().includes("-")) {
      // operator1 = partialValue;
      partialValue = input + nums;

      console.log("oli");
    }

    // opcion que omita el digito en la pantalla pero agregue en la equacion

    console.log("ASD");
  };

  const minusPlus = () => {
    (input === "0" || input === "00"
      ? setInput(input)
      : input.charAt(0) === "-"
        ? setInput(input.substring(1))
        : setInput("-" + input)) ||
      (setInput === "0" || setInput === "00"
        ? setInput(input)
        : input.charAt(0) === "-"
          ? setInput(input.substring(1))
          : setInput("-" + input));
  };

  const deleteNumber = () => {
    input.length === 1 ? setInput("0") : setInput(input.slice(0, -1));
  };

  const operators = (value) => {
    // let val1 = null;
    // const op = value;
    // console.log(value);
    // if (val1 === null) {
    //   val1 = input;

    //   console.log(val1);
    // }

    const operator1 = input + value;
    console.log("value " + value);
    console.log("input " + input);
    console.log("operator " + operator1 + value);

    setInput("0");
  };

  const calcResult = () => {
    setInput(eval(input));
  };

  return (
    <body>
      {/* container bg-zinc-800 mx-auto rounded-3xl mt-10 px-8 p-4 shadow-xl w-6/12 */}
      <main className='container mx-auto mt-24 block h-[610px] w-[520px] rounded-3xl border-x-4 border-b-2 border-s-4 border-t-8 border-gray-600 bg-gradient-to-r from-stone-800 via-stone-950 to-black p-2 text-white shadow-lg shadow-purple-800'>
        <header className='p-3'>
          <div className='flex justify-between px-2'>
            <h1 className=' text-3xl font-black tracking-tighter'>CASIO</h1>
            <div className='mb-3 grid w-48 grid-cols-4 rounded-md border-x-2 border-t-4 border-stone-700 bg-gradient-to-t from-yellow-600 to-yellow-800'>
              <div className='col-start-2 border-x-2 border-r-0 border-yellow-300'></div>
              <div className='border-x-2 border-yellow-300'></div>
            </div>
            <div className='flex-cols-2 mb-2 flex items-center'>
              <h3 className='mx-1 pr-2 text-center'>MX-12B</h3>
              <div className='mb-2'>
                <h2 className='text-3xl font-black tracking-tighter'>12</h2>
                <h3 className='-mt-2 text-xs font-light tracking-wider'>
                  Digits
                </h3>
              </div>
            </div>
          </div>
          <Screen input={input}></Screen>
          {/* <input
            className="w-full border-8 border-b-black border-y-8 border-gray-500 mt-2 text-right text-gray-700 text-7xl block  rounded-xl bg-emerald-200"
            type="text"
            maxLength={12}
          /> */}
        </header>
        <section className='m-0 border-t-4 border-zinc-900 p-0'>
          <div className='flex justify-end px-2 pt-3'>
            <Button symbol={"%"}>%</Button>
            <Button symbol={"MU"}>MU</Button>
          </div>
          <div className='grid grid-cols-5 gap-1 p-2'>
            <Button symbol={"MR"}>MR</Button>
            <Button symbol={"MC"}>MC</Button>
            <Button symbol={"M-"}>M-</Button>
            <Button symbol={"M+"}>M+</Button>
            <Button symbol={"/"}>÷</Button>
            <Button symbol={"minus"}>+/-</Button>
            <Button symbol={"7"} onClick={addNumbers}>
              7
            </Button>
            <Button symbol={"8"}>8</Button>
            <Button symbol={"9"}>9</Button>
            <Button symbol={"*"}>X</Button>
            <Button symbol={"DEL"}>►</Button>
            <Button symbol={"4"}>4</Button>
            <Button symbol={"5"}>5</Button>
            <Button symbol={"6"}>6</Button>
            <Button symbol={"-"}>-</Button>
            <Button symbol={"C"}>C/AC ON</Button>
            <Button symbol={"1"}>1</Button>
            <Button symbol={"2"}>2</Button>
            <Button symbol={"3"}>3</Button>
            <Button symbol={"+"}>+</Button>
            <Button symbol={"0"}>0</Button>
            <Button symbol={"00"}>00</Button>
            <Button symbol={"."}>.</Button>
            <Button symbol={"="}>=</Button>
          </div>
        </section>
      </main>
    </body>
  );
};

export default Calculadora;
