import { useEffect, useState } from "react";

// useState, useEffect의 이해
const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    // 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정해준다.
    console.log("렌더링 되었습니다!");
  });

  useEffect(() => {
    //  처음 마운트 될 때만 렌더링되게 하고 싶다면 ?
    console.log("처음 한 번만 렌더링 됩니다!");
  }, []); // 뒤에 빈 배열을 넣어준다.

  useEffect(() => {
    // 만약 value 값이 바뀔때만 특정 작업을 할 수 있게 하고 싶다면 ?
    console.log(name);
  }, [name]); // 뒷 배열에 값을 넣어준다.

  // 잘 활용하진 않지만, 알면 좋은 tip
  useEffect(() => {
    // 만약 언마운트되기 전이나, 업데이트 되기 직전에 어떠한 특정 작업을 하고 싶다면?
    console.log("effect");
    return () => {
      // 뒷정리를 해주어야한다.
      console.log("cleanup");
    };
  });

  useEffect(() => {
    // 언마운트 될 때만 특정 작업을 하고 싶다면?
    console.log("effect");
    return () => {
      console.log("cleanup");
    };
  }, []); // 뒷 배열을 넣어주면 된다.

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <>
      <main>
        <input
          type="text"
          value={name}
          onChange={onChangeName}
          placeholder="name을 입력하세요."
        />
        <input
          type="text"
          value={nickname}
          onChange={onChangeNickname}
          placeholder="nickname을 입력하세요."
        />
        <p>
          현재{" "}
          {!name ? (
            <span>name이 비어있습니다.</span>
          ) : (
            <span>{name}입니다.</span>
          )}
        </p>
        <p>
          현재{" "}
          {!nickname ? (
            <span>nickname이 비어있습니다.</span>
          ) : (
            <span>{nickname}입니다.</span>
          )}
        </p>
      </main>
    </>
  );
};
export default Info;
