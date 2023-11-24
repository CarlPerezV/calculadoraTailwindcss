import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const Calculadora = () => {
  const numberButton = "m-2 rounded-xl p-2 text-2xl text-white bg-zinc-400";
  const operatorButton = "m-2 rounded-xl p-2 text-2xl text-white bg-gray-950";
  const acButton = "m-2 rounded-xl p-2  text-white bg-orange-500";
  const sumButton =
    "m-2 rounded-xl p-2 text-2xl text-white bg-gray-950 row-span-2";

  const [input, setInput] = useState("0");

  const addInput = (val) => {
    input === "0" ? setInput(val) : setInput(input + val);
  };

  const deleteNumber = () => {
    input.length === 1 ? setInput("0") : setInput(input.slice(0, -1));
  };

  const clear = () => {
    setInput("0");
  };

  return (
    <>
      {/* container bg-zinc-800 mx-auto rounded-3xl mt-10 px-8 p-4 shadow-xl w-6/12 */}
      <main className="container m-4 mx-auto h-[600px] w-[550px] rounded-3xl bg-zinc-800">
        <div className="m-4 p-6">
          <div className="flex justify-between font-bold text-white">
            <h1 className="text-4xl font-extrabold tracking-wider">CASIO</h1>
            <div className="flex">
              <h1 className="p-4">MX-12B</h1>
              <div>
                <h1 className="text-3xl font-extrabold">12</h1>
                <h1 className="-mt-2 text-xs">Digits</h1>
              </div>
            </div>
          </div>
          <Input input={input} />
          {/* <input
            className="w-full border-8 border-b-black border-y-8 border-gray-500 mt-2 text-right text-gray-700 text-7xl block  rounded-xl bg-emerald-200"
            type="text"
            maxLength={12}
          /> */}
        </div>
        <div className="mt-2 p-10">
          <div className="">
            <Button className={operatorButton}>%</Button>
            <Button className={operatorButton}>MU</Button>
          </div>
          <div className="grid grid-cols-5">
            <Button className={operatorButton}>MR</Button>
            <Button className={operatorButton}>MC</Button>
            <Button className={operatorButton}>M-</Button>
            <Button className={operatorButton}>M+</Button>
            <Button className={operatorButton}>÷</Button>
            <Button className={operatorButton}>+/-</Button>
            <Button className={numberButton} handleClick={addInput}>
              7
            </Button>
            <Button className={numberButton} handleClick={addInput}>
              8
            </Button>
            <Button className={numberButton} handleClick={addInput}>
              9
            </Button>
            <Button className={operatorButton}>X</Button>
            <Button className={operatorButton} handleClick={deleteNumber}>
              ▷
            </Button>
            <Button className={numberButton} handleClick={addInput}>
              4
            </Button>
            <Button className={numberButton} handleClick={addInput}>
              5
            </Button>
            <Button className={numberButton} handleClick={addInput}>
              6
            </Button>
            <Button className={operatorButton}>-</Button>
            <Button className={acButton} handleClick={clear}>
              C/AC ON
            </Button>
            <Button className={numberButton} handleClick={addInput}>
              1
            </Button>
            <Button className={numberButton} handleClick={addInput}>
              2
            </Button>
            <Button className={numberButton} handleClick={addInput}>
              3
            </Button>
            <Button className={sumButton}>+</Button>
            <Button className={numberButton} handleClick={addInput}>
              0
            </Button>
            <Button className={numberButton} handleClick={addInput}>
              00
            </Button>
            <Button className={numberButton} handleClick={addInput}>
              .
            </Button>
            <Button className={operatorButton}>=</Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Calculadora;
