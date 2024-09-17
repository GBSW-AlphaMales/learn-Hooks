import { useReducer } from "react";

function reducer(state, action) {
  // action의 type에 따라 다른 작업을 수행한다.
  switch (action.type) {
    case "Increase":
      return { value: state.value + 1 };
    case "Decrease":
      return { value: state.value - 1 };
    default:
      // 아무것도 해당되지 않는다면 defalult로 기존 상태를 반환한다.
      return state;
  }
}

const UseReducerCount = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <>
      <main>
        <div>
          <p>현재 카운트는 {state.value}입니다.</p>
          <div>
            <button onClick={() => dispatch({ type: "Increase" })}>+1</button>
            <button onClick={() => dispatch({ type: "Decrease" })}>-1</button>
          </div>
        </div>
      </main>
    </>
  );
};
export default UseReducerCount;
