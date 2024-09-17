import { useState } from "react";

// useState의 이해
const UseStateCount = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <div>
          <p>현재 {count}입니다.</p>
          <div>
            <button onClick={() => setCount(count + 1)}>+ 1</button>
            <button onClick={() => setCount(count - 1)}>- 1</button>
          </div>
        </div>
      </main>
    </>
  );
};
export default UseStateCount;
