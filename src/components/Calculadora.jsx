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
  MINPLUS: "minus-plus",
  MEM_ADD: "memory-add",
  MEM_SUB: "memory-subtract",
  MEM_CLR: "memory-clear",
  MEM_MR: "memory-mirror",
};

const initialState = {
  currentValue: "",
  prevValue: "",
  operator: "",
  screen: "000000000000",
  memory: "",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_NUMBER: {
      // evita agregar 0 como primer dígito si no hay un punto
      if (
        (payload === "00" && state.currentValue === "") ||
        (payload === 0 && state.currentValue === "")
      ) {
        return state;
      }

      // En caso que el primer dígito sea un punto marca con el 0 antes
      if (payload === "." && state.currentValue === "") {
        return {
          ...state,
          currentValue: "0.",
        };
      }

      // se evita que si tiene otro punto se pueda agregar mas
      if (payload === "." && state.currentValue.toString().includes(".")) {
        return state;
      }

      if (state.currentValue.length >= 12) {
        return state;
      }

      return {
        ...state,
        currentValue: `${state.currentValue || ""}${payload}`,
      };
    }
    case ACTIONS.OPERATION: {
      if (state.currentValue == "" && state.prevValue == "") {
        return state;
      }

      if (state.currentValue == "") {
        return {
          ...state,
          operator: payload,
        };
      }

      // Aca la lógica es después del signo igual (=), si no agregamos un operador, genere una operación nueva
      if (state.prevValue !== "" && state.operator == "") {
        return {
          ...state,
          prevValue: state.currentValue,
          operator: payload,
          screen: state.currentValue,
          currentValue: "",
        };
      }

      if (state.prevValue == "") {
        return {
          ...state,
          operator: payload,
          prevValue: state.currentValue,
          screen: state.currentValue,
          currentValue: "",
        };
      }

      return {
        ...state,
        prevValue: evaluate(state),
        screen: evaluate(state),
        operator: payload,
        currentValue: "",
      };
    }
    case ACTIONS.EVALUATE:
      if (!state.operator || !state.prevValue || !state.currentValue) {
        return { ...state };
      }

      return {
        ...state,
        prevValue: evaluate(state),
        screen: evaluate(state),
        currentValue: "",
        operator: "",
      };

    case ACTIONS.MINPLUS:
      if (isNaN(eval(state.currentValue) * -1)) {
        return state;
      }
      return {
        ...state,
        currentValue: eval(state.currentValue) * -1,
      };

    case ACTIONS.DELETE:
      return {
        ...state,
        currentValue: state.currentValue.slice(0, -1),
      };

    case ACTIONS.CLEAR:
      return initialState;

    case ACTIONS.MEM_ADD:
      const numberAdd = parseFloat(payload);
      if (payload == "0") {
        return state;
      }

      if (state.memory == "") {
        return {
          ...state,
          memory: evaluate(state) || numberAdd,
          screen: evaluate(state) || numberAdd,
          currentValue: "",
          prevValue: "",
          operator: "",
        };
      }
      // Condición si tiene datos en memoria, al hacer otra operación se suma a lo que contiene
      if (state.operator) {
        return {
          ...state,
          memory: eval(state.memory) + eval(evaluate(state)),
          screen: eval(state.memory) + eval(evaluate(state)),
          currentValue: "",
          prevValue: "",
          operator: "",
        };
      }
      return {
        ...state,
        memory: eval(state.memory) + numberAdd,
        screen: eval(state.memory) + numberAdd,
        currentValue: "",
        prevValue: "",
        operator: "",
      };

    case ACTIONS.MEM_SUB:
      const numberSub = parseFloat(payload);
      if (payload == "0") {
        return state;
      }

      if (state.memory == "") {
        return {
          ...state,
          memory: evaluate(state) || numberSub,
          screen: evaluate(state) || numberSub,
          currentValue: "",
          prevValue: "",
          operator: "",
        };
      }
      // Condición si tiene datos en memoria, al hacer otra operación se suma a lo que contiene
      if (state.operator) {
        return {
          ...state,
          memory: eval(state.memory) - eval(evaluate(state)),
          screen: eval(state.memory) - eval(evaluate(state)),
          currentValue: "",
          prevValue: "",
          operator: "",
        };
      }

      return {
        ...state,
        memory: eval(state.memory) - numberSub,
        screen: eval(state.memory) - numberSub,
        currentValue: "",
        prevValue: "",
        operator: "",
      };
    case ACTIONS.MEM_CLR:
      return {
        ...state,
        memory: "",
        screen: "0",
        currentValue: "",
      };
    case ACTIONS.MEM_MR:
      return {
        ...state,
        currentValue: "",
        screen: state.memory,
      };
    default:
      return state;
  }
}

function evaluate({ currentValue, prevValue, operator }) {
  const prev = parseFloat(prevValue);
  const current = parseFloat(currentValue);
  if (isNaN(prev) || isNaN(current)) return "";
  let result = "";
  switch (operator) {
    case "+":
      result = prev + current;
      break;
    case "/":
      result = prev / current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
  }

  return result.toString().slice(0, 12);
}

const Calculadora = () => {
  const [{ currentValue, screen }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  return (
    <>
      {/* container bg-zinc-800 mx-auto rounded-3xl mt-10 px-8 p-4 shadow-xl w-6/12 */}
      <main className=' mx-auto mt-24 block h-[40rem] w-[32rem] rounded-3xl border-x-4 border-b-2 border-s-4 border-t-8 border-gray-600 bg-gradient-to-r from-stone-800 via-stone-950 to-black p-2 text-white shadow-lg shadow-purple-800'>
        <header className='p-3'>
          <Header />
          <Screen value={currentValue} placeholder={screen} />
        </header>
        <section className='m-0 border-t-4 border-zinc-900 p-0'>
          <div className='flex justify-end px-2 pt-6'>
            <Button symbol={"%"} dispatch={dispatch}>
              %
            </Button>
            <Button symbol={"MU"}>MU</Button>
          </div>
          <div className='grid grid-cols-5 gap-1 p-3'>
            <Button
              symbol={"MR"}
              dispatch={() =>
                dispatch({
                  type: ACTIONS.MEM_MR,
                })
              }
            >
              MR
            </Button>
            <Button
              symbol={"MC"}
              dispatch={() =>
                dispatch({
                  type: ACTIONS.MEM_CLR,
                })
              }
            >
              MC
            </Button>
            <Button
              symbol={"M-"}
              dispatch={() =>
                dispatch({
                  type: ACTIONS.MEM_SUB,
                  payload: currentValue || screen,
                })
              }
            >
              M-
            </Button>
            <Button
              symbol={"M+"}
              dispatch={() =>
                dispatch({
                  type: ACTIONS.MEM_ADD,
                  payload: currentValue || screen,
                })
              }
            >
              M+
            </Button>
            <Button
              symbol={"/"}
              dispatch={() =>
                dispatch({ type: ACTIONS.OPERATION, payload: "/" })
              }
            >
              ÷
            </Button>
            <Button
              symbol={"minus"}
              dispatch={() =>
                dispatch({
                  type: ACTIONS.MINPLUS,
                })
              }
            >
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
