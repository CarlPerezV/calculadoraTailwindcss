import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const Calculadora = () => {
  const numberButton =
    "m-2 h-11 w-20 rounded-md border border-r-2 border-t-2 border-zinc-600 bg-gradient-to-r from-neutral-400 to-neutral-500 text-4xl font-medium text-gray-200 ring-zinc-700 hover:bg-gradient-to-r hover:from-neutral-500 hover:to-neutral-600 focus:ring-4";
  const operatorButton =
    "m-2 h-11 w-20 rounded-md border border-r-2 border-t-2 border-zinc-500 bg-gradient-to-r from-neutral-600 to-gray-800  text-3xl font-medium text-gray-200 ring-zinc-700 hover:bg-gradient-to-r hover:from-neutral-700 hover:to-gray-900 focus:ring-4";
  const acButton =
    "m-2 h-11 w-20 rounded-md border border-r-2 border-t-2 border-zinc-500 bg-gradient-to-r from-orange-400 to-amber-600 px-4 text-sm font-medium text-gray-200 ring-zinc-700 hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-700 focus:ring-4";
  const sumButton =
    "row-span-3  m-2 rounded-md border border-r-2 border-t-2 border-zinc-500 bg-gradient-to-r from-neutral-600 to-gray-800 text-3xl font-medium text-gray-200 ring-zinc-700 hover:bg-gradient-to-r hover:from-neutral-700 hover:to-gray-900 focus:ring-4";

  const [input, setInput] = useState("0");

  const addInput = (val) => {
    input === "0" || input === "00" ? setInput(val) : setInput(input + val);
    if (input.toString().includes(".") && val.toString().includes(".")) {
      setInput(input);
    }
  };

  const minusPlus = () => {
    input.charAt(0) === "-"
      ? setInput(input.substring(1))
      : setInput("-" + input);
  };

  const deleteNumber = () => {
    input.length === 1 ? setInput("0") : setInput(input.slice(0, -1));
  };

  const sumInput = () => {
    setInput(eval(setInput + val));
  };

  const calcResult = () => {
    setInput(eval(input));
  };

  const clear = () => {
    setInput("0");
  };

  return (
    <>
      {/* container bg-zinc-800 mx-auto rounded-3xl mt-10 px-8 p-4 shadow-xl w-6/12 */}
      <main className=" container mx-auto mt-24 block h-[610px] w-[520px] rounded-3xl border-x-4 border-b-2 border-s-4 border-t-8 border-gray-600 bg-gradient-to-r from-stone-800 via-stone-950 to-black p-2 text-white shadow-lg shadow-purple-800">
        <header className="p-3 ">
          <div className="flex justify-between px-2">
            <h1 className=" text-3xl font-black tracking-tighter">CASIO</h1>
            <div className="mb-3 grid w-48 grid-cols-4 rounded-md border-x-2 border-t-4 border-stone-700 bg-gradient-to-t from-yellow-600 to-yellow-800">
              <div className="col-start-2 border-x-2 border-r-0 border-yellow-300"></div>
              <div className="border-x-2 border-yellow-300"></div>
            </div>
            <div className="flex-cols-2 mb-2 flex items-center">
              <h3 className="mx-1 pr-2 text-center">MX-12B</h3>
              <div className="mb-2">
                <h2 className="text-3xl font-black tracking-tighter">12</h2>
                <h3 className="-mt-2 text-xs font-light tracking-wider">
                  Digits
                </h3>
              </div>
            </div>
          </div>
          <Input value={input} />
          {/* <input
            className="w-full border-8 border-b-black border-y-8 border-gray-500 mt-2 text-right text-gray-700 text-7xl block  rounded-xl bg-emerald-200"
            type="text"
            maxLength={12}
          /> */}
        </header>
        <section className="">
          <div className="flex justify-end px-2 pt-5">
            <Button className={operatorButton} symbol={"%"}>
              %
            </Button>
            <Button className={operatorButton} symbol={"MU"}>
              MU
            </Button>
          </div>
          <div className="grid grid-cols-5 gap-1 p-2">
            <Button className={operatorButton} symbol={"MR"}>
              MR
            </Button>
            <Button className={operatorButton} symbol={"MC"}>
              MC
            </Button>
            <Button className={operatorButton} symbol={"M-"}>
              M-
            </Button>
            <Button className={operatorButton} symbol={"M+"}>
              M+
            </Button>
            <Button
              className={operatorButton}
              handleClick={addInput}
              symbol={"/"}
            >
              ÷
            </Button>
            <Button
              className={operatorButton}
              handleClick={minusPlus}
              symbol={"+/-"}
            >
              +/-
            </Button>
            <Button
              className={numberButton}
              handleClick={addInput}
              symbol={"7"}
            >
              7
            </Button>
            <Button
              className={numberButton}
              handleClick={addInput}
              symbol={"8"}
            >
              8
            </Button>
            <Button
              className={numberButton}
              handleClick={addInput}
              symbol={"9"}
            >
              9
            </Button>
            <Button
              className={operatorButton}
              handleClick={addInput}
              symbol={"*"}
            >
              X
            </Button>
            <Button
              className={operatorButton}
              handleClick={deleteNumber}
              symbol={"►"}
            >
              ►
            </Button>
            <Button
              className={numberButton}
              handleClick={addInput}
              symbol={"4"}
            >
              4
            </Button>
            <Button
              className={numberButton}
              handleClick={addInput}
              symbol={"5"}
            >
              5
            </Button>
            <Button
              className={numberButton}
              handleClick={addInput}
              symbol={"6"}
            >
              6
            </Button>
            <Button
              className={operatorButton}
              handleClick={addInput}
              symbol={"-"}
            >
              -
            </Button>
            <Button className={acButton} handleClick={clear} symbol={"C/AC ON"}>
              C/AC ON
            </Button>
            <Button
              className={numberButton}
              handleClick={addInput}
              symbol={"1"}
            >
              1
            </Button>
            <Button
              className={numberButton}
              handleClick={addInput}
              symbol={"2"}
            >
              2
            </Button>
            <Button
              className={numberButton}
              handleClick={addInput}
              symbol={"3"}
            >
              3
            </Button>
            <Button className={sumButton} handleClick={addInput} symbol={"+"}>
              +
            </Button>
            <Button
              className={numberButton}
              handleClick={addInput}
              symbol={"0"}
            >
              0
            </Button>
            <Button
              className={numberButton}
              handleClick={addInput}
              symbol={"00"}
            >
              00
            </Button>
            <Button
              className={numberButton}
              handleClick={addInput}
              symbol={"."}
            >
              .
            </Button>
            <Button
              className={operatorButton}
              handleClick={calcResult}
              symbol={"="}
            >
              =
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Calculadora;
