import { useState } from "react";
import Button from "./Button";
import Screen from "./Screen";

const Calculadora = () => {
  // const [input, setInput] = useState("0");
  const [calc, setCalc] = useState({
    input: "",
    value1: 0,
    minus: "-",
    mr: 0,
    mc: 0,
    operator1: "",
  });
  const [screen, setScreen] = useState("000000000000");

  const addNumbers = (nums) => {
    // la cantidad maxima de la calculadora son 12 digitos
    if (calc.input.length === 12) return;

    if (calc.input.toString().includes(".") && nums.toString().includes("."))
      return;

    if (calc.value1) {
      setCalc({ ...calc, input: nums + calc.input });
    }

    calc.input === 0 || calc.input === "0" || calc.input === "00"
      ? setCalc({ ...calc, input: nums })
      : setCalc({ ...calc, input: calc.input + nums });

    if (calc.input.toString().charAt(0) === ".") {
      setCalc({ ...calc, input: "0." + nums });
    }
    console.log(
      "value 1",
      calc.value1,
      "operador ",
      calc.operator1,
      "input ",
      calc.input,
    );
  };

  // cambia el valor a negativo
  const minusPlusButton = () => {
    // if (calc.minus) {
    //   console.log("Tiene minus", calc.input);
    // }

    console.log("Tiene minus", calc.minus);
    // calc.input.charAt(0) === "-"
    //   ? setCalc(calc.input.substring(1))
    //   : setCalc("-" + calc.input);
    // console.log("el minus " + calc.input);
    // console.log("el minus ", "-" + calc.input);
  };

  const deleteNumber = () => {
    calc.input.length === 1
      ? setCalc({ ...calc, input: "" })
      : setCalc({ ...calc, input: calc.input.slice(0, -1) });
  };

  const operatorButton = (value) => {
    // aca la logica es que si value1 ya tiene un dato se calcula
    if (calc.value1) {
      setScreen(calc.input);
      console.log("input del calc ", calc.input);

      try {
        const newCalc = {
          ...calc,
          value1: eval(calc.value1 + calc.operator1 + calc.input).toString(),
          operator1: value,
          input: "",
        };

        setCalc(newCalc);
        setScreen(newCalc.value1);
      } catch (e) {
        // console.log(e);
        setScreen(calc.value1);
        setCalc({
          ...calc,
          operator1: value,
        });
      }
    }
    // Si value1 no tiene datos
    if (calc.value1 === 0) {
      setScreen(calc.input);
      setCalc({
        ...calc,
        value1: calc.input,
        operator1: value,
        input: "",
      });
    }
    console.log("fuera ", calc.operator1);
  };

  const calcResult = () => {
    const newCalc = {
      ...calc,
      value1: eval(calc.value1 + calc.operator1 + calc.input).toString(),
      input: "",
    };

    setCalc(newCalc);
    setScreen(newCalc.value1);
  };

  const clearButton = () => {
    setScreen("000000000000");

    setCalc({
      input: "",
      value1: 0,
      minus: 0,
      operator: "",
    });
  };

  return (
    <>
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
          <Screen value={calc.input} placeholder={screen}></Screen>
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
            <Button symbol={"/"} handleClick={operatorButton}>
              ÷
            </Button>
            <Button symbol={"minus"} handleClick={minusPlusButton}>
              +/-
            </Button>
            <Button symbol={"7"} handleClick={addNumbers}>
              7
            </Button>
            <Button symbol={"8"} handleClick={addNumbers}>
              8
            </Button>
            <Button symbol={"9"} handleClick={addNumbers}>
              9
            </Button>
            <Button symbol={"*"} handleClick={operatorButton}>
              X
            </Button>
            <Button symbol={"DEL"} handleClick={deleteNumber}>
              ►
            </Button>
            <Button symbol={"4"} handleClick={addNumbers}>
              4
            </Button>
            <Button symbol={"5"} handleClick={addNumbers}>
              5
            </Button>
            <Button symbol={"6"} handleClick={addNumbers}>
              6
            </Button>
            <Button symbol={"-"} handleClick={operatorButton}>
              -
            </Button>
            <Button symbol={"C"} handleClick={clearButton}>
              C/AC ON
            </Button>
            <Button symbol={"1"} handleClick={addNumbers}>
              1
            </Button>
            <Button symbol={"2"} handleClick={addNumbers}>
              2
            </Button>
            <Button symbol={"3"} handleClick={addNumbers}>
              3
            </Button>
            <Button symbol={"+"} handleClick={operatorButton}>
              +
            </Button>
            <Button symbol={"0"} handleClick={addNumbers}>
              0
            </Button>
            <Button symbol={"00"} handleClick={addNumbers}>
              00
            </Button>
            <Button symbol={"."} handleClick={addNumbers}>
              .
            </Button>
            <Button symbol={"="} handleClick={calcResult}>
              =
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Calculadora;
