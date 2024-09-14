import { useState } from "react";

// useState의 이해
const Count = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <p>현재 {count}입니다.</p>
        <button onClick={() => setCount(count + 1)}>+ 1</button>
        <button onClick={() => setCount(count - 1)}>- 1</button>
      </main>
    </>
  );
};
export default Count;
