import { useReducer } from "react";
import Button from "./Button";
import Screen from "./Screen";
import Header from "./Header";

const ACTIONS = {
  ADD_NUMBER: "add-number",
  OPERATION: "operation",
  CLEAR: "clear",
  DELETE: "delete",
  EVALUATE: "evaluate",
};

const initialState = {
  input: "",
  operation1: "",
  operation2: "",
  operator: "",
  screen: "000000000000",
};

function reducer(state, { type, payload }) {
  const calculate = () => {
    // aca la lógica es que si tiene valor 1 se calcula al agregar otro operador
    try {
      if (state.operation1) {
        console.log(state);
        return {
          ...state,
          operation1: eval(state.operation1 + state.operator + state.input),
          screen: eval(state.operation1 + state.operator + state.input),
          operator: payload,
          input: "",
        };
      }

      console.log(state);
      return {
        ...state,
        operation1: state.input,
        operator: payload,
        input: "",
        screen: state.input,
      };
    } catch (error) {
      return {
        ...state,
        operator: payload,
      };
    }
  };

  switch (type) {
    case ACTIONS.ADD_NUMBER: {
      if (
        (payload === "00" && state.input === "") ||
        (payload === 0 && state.input === "")
      ) {
        return state;
      }

      // En caso que el primer digito sea un punto marca con el 0 antes
      if (payload === "." && state.input === "") {
        return {
          ...state,
          input: "0.",
        };
      }

      // se evita que si tiene otro punto se pueda agregar mas
      if (payload === "." && state.input.toString().includes(".")) {
        return state;
      }

      return {
        ...state,
        input: `${state.input || ""}${payload}`,
      };
    }
    case ACTIONS.OPERATION: {
      // aca la lógica es que si tiene valor 1 se calcula al agregar otro operador
      try {
        if (state.operation1) {
          console.log(state);
          return {
            ...state,
            operation1: eval(state.operation1 + state.operator + state.input),
            screen: eval(state.operation1 + state.operator + state.input),
            operator: payload,
            input: "",
          };
        }

        console.log(state);
        return {
          ...state,
          operation1: state.input,
          operator: payload,
          input: "",
          screen: state.input,
        };
      } catch (error) {
        return {
          ...state,
          operator: payload,
        };
      }
    }
    case ACTIONS.EVALUATE:
      try {
        if (!state.operation1) {
          return { ...state };
        }
        return {
          ...state,
          operation1: eval(state.operation1 + state.operator + state.input),
          screen: eval(state.operation1 + state.operator + state.input),
          operator: state.operator,
          input: "",
        };
      } catch (error) {
        return {
          ...state,
        };
      }
    case ACTIONS.DELETE:
      return {
        ...state,
        input: state.input.slice(0, -1),
      };

    case ACTIONS.CLEAR:
      return initialState;

    default:
      return state;
  }
}

// function evaluate({ operation1, operation2, operator }) {
//   const prev = parseFloat(operation1);
//   const current = parseFloat(operation2);
//   if (isNaN(prev) || isNaN(current)) return "";
//   let computation = "";
//   switch (operator) {
//     case "+":
//       computation = prev + current;
//       break;
//     case "/":
//       computation = prev / current;
//       break;
//     case "-":
//       computation = prev - current;
//       break;
//     case "*":
//       computation = prev * current;
//       break;
//   }

//   return computation.toString();
// }

const Calculadora = () => {
  const [{ operation1, operation2, operator, screen, input }, dispatch] =
    useReducer(reducer, initialState);

  return (
    <>
      {/* container bg-zinc-800 mx-auto rounded-3xl mt-10 px-8 p-4 shadow-xl w-6/12 */}
      <main className=' mx-auto mt-24 block h-[40rem] w-[32rem] rounded-3xl border-x-4 border-b-2 border-s-4 border-t-8 border-gray-600 bg-gradient-to-r from-stone-800 via-stone-950 to-black p-2 text-white shadow-lg shadow-purple-800'>
        <header className='p-3'>
          <Header />
          <Screen value={input} placeholder={screen} />
        </header>
        <section className='m-0 border-t-4 border-zinc-900 p-0'>
          <div className='flex justify-end px-2 pt-6'>
            <Button symbol={"%"} dispatch={dispatch}>
              %
            </Button>
            <Button symbol={"MU"}>MU</Button>
          </div>
          <div className='grid grid-cols-5 gap-1 p-3'>
            <Button symbol={"MR"} dispatch={dispatch}>
              MR
            </Button>
            <Button symbol={"MC"}>MC</Button>
            <Button symbol={"M-"}>M-</Button>
            <Button symbol={"M+"}>M+</Button>
            <Button
              symbol={"/"}
              dispatch={() =>
                dispatch({ type: ACTIONS.OPERATION, payload: "/" })
              }
            >
              ÷
            </Button>
            <Button symbol={"minus"} dispatch={dispatch}>
              +/-
            </Button>
            <Button
              symbol={"7"}
              dispatch={() =>
                dispatch({ type: ACTIONS.ADD_NUMBER, payload: 7 })
              }
            >
              7
            </Button>
            <Button
              symbol={"8"}
              dispatch={() =>
                dispatch({ type: ACTIONS.ADD_NUMBER, payload: 8 })
              }
            >
              8
            </Button>
            <Button
              symbol={"9"}
              dispatch={() =>
                dispatch({ type: ACTIONS.ADD_NUMBER, payload: 9 })
              }
            >
              9
            </Button>
            <Button
              symbol={"*"}
              dispatch={() =>
                dispatch({ type: ACTIONS.OPERATION, payload: "*" })
              }
            >
              X
            </Button>
            <Button
              symbol={"DEL"}
              dispatch={() => dispatch({ type: ACTIONS.DELETE })}
            >
              ►
            </Button>
            <Button
              symbol={"4"}
              dispatch={() =>
                dispatch({ type: ACTIONS.ADD_NUMBER, payload: 4 })
              }
            >
              4
            </Button>
            <Button
              symbol={"5"}
              dispatch={() =>
                dispatch({ type: ACTIONS.ADD_NUMBER, payload: 5 })
              }
            >
              5
            </Button>
            <Button
              symbol={"6"}
              dispatch={() =>
                dispatch({ type: ACTIONS.ADD_NUMBER, payload: 6 })
              }
            >
              6
            </Button>
            <Button
              symbol={"-"}
              dispatch={() =>
                dispatch({ type: ACTIONS.OPERATION, payload: "-" })
              }
            >
              -
            </Button>
            <Button
              symbol={"C"}
              dispatch={() => dispatch({ type: ACTIONS.CLEAR })}
            >
              C/AC ON
            </Button>
            <Button
              symbol={"1"}
              dispatch={() =>
                dispatch({ type: ACTIONS.ADD_NUMBER, payload: 1 })
              }
            >
              1
            </Button>
            <Button
              symbol={"2"}
              dispatch={() =>
                dispatch({ type: ACTIONS.ADD_NUMBER, payload: 2 })
              }
            >
              2
            </Button>
            <Button
              symbol={"3"}
              dispatch={() =>
                dispatch({ type: ACTIONS.ADD_NUMBER, payload: 3 })
              }
            >
              3
            </Button>
            <Button
              symbol={"+"}
              dispatch={() =>
                dispatch({ type: ACTIONS.OPERATION, payload: "+" })
              }
            >
              +
            </Button>
            <Button
              symbol={"0"}
              dispatch={() =>
                dispatch({ type: ACTIONS.ADD_NUMBER, payload: 0 })
              }
            >
              0
            </Button>
            <Button
              symbol={"00"}
              dispatch={() =>
                dispatch({ type: ACTIONS.ADD_NUMBER, payload: "00" })
              }
            >
              00
            </Button>
            <Button
              symbol={"."}
              dispatch={() =>
                dispatch({ type: ACTIONS.ADD_NUMBER, payload: "." })
              }
            >
              .
            </Button>
            <Button
              symbol={"="}
              dispatch={() => dispatch({ type: ACTIONS.EVALUATE })}
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
