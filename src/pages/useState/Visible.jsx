import { useState } from "react";

const Visible = () => {
  const [visible, setVisible] = useState(false);

  const onChangeVisible = () => {
    setVisible(!visible);
  };
  return (
    <>
      <main>
        <button onClick={onChangeVisible}>
          {visible ? <p>숨기기</p> : <p>보이기</p>}
        </button>
        <b>{visible && <p>보인다!</p>}</b>
      </main>
    </>
  );
};
export default Visible;
