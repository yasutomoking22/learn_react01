import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

// reactは関数で画面遷移を記述(JSX記法)
// 複数要素をreturn する場合は () が必要
// returnする部分は必ず,タグで全体を囲う必要がある
// コンポーネント名は必ずパスカルケース(先頭大文字、単語の区切りも大文字)
// htmlのタグの名称やスタイルの名称をキャメルケースにする
// イベントやスタイルにJSが使える　 {}を使うこと
const App = () => {
  console.log("***** rendering start *****");
  const contentStyle = { color: "red", fontsize: "18px" };
  const [num, setNum] = useState(22);
  const [likeShowFlag, setLikeShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  // const onClickSwitchLikeShowFlag = () => {
  //   setLikeShowFlag(!likeShowFlag);
  // };

  // カウントが3の倍数の時のみ👍を押すと更新
  const onClickSwitchLikeShowFlag = () => {
    console.log("👍が押されました");
    // if (num % 3 === 0) {
    //   likeShowFlag || setLikeShowFlag(true);
    // } else {
    //   likeShowFlag && setLikeShowFlag(false);
    // }
  };

  useEffect(() => {
    console.log("カウントが押されました");
    if (num % 3 === 0) {
      likeShowFlag || setLikeShowFlag(true);
    } else {
      likeShowFlag && setLikeShowFlag(false);
    }
  }, [num]);

  return (
    <>
      {/* スタイルの引数にJSのオブジェクトを渡せる */}
      <h1 style={contentStyle}>こんにちは</h1>
      {/* コンポーネントを設定し、Propsを渡す */}
      <ColorfulMessage color="blue" message="the world !!" />
      {/* イベントの引数にJSの関数が使える */}
      <button onClick={onClickCountUp}>カウント</button>
      <button onClick={onClickSwitchLikeShowFlag}>いいねon／off</button>
      <br />
      <p>{num}</p>
      {likeShowFlag && <p>いいね👍</p>}
    </>
  );
};

// 他のJSファイルから使用できるようにする
export default App;
