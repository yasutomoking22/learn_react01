// エクスポートの方法は2種類
// default export <- 1ファイルで1つ、変数名はimport先で自由
// export const 変数名 <- 変数名はimport先で同じでないといけない

const ColorfulMessage = (props) => {
  console.log(props);
  const { color, message } = props; //分割代入
  const contentStyle = {
    // color: color,
    color, //上の省略記法
    fontsize: "18px"
  };

  return <p style={contentStyle}>{message}</p>;
};

export default ColorfulMessage;
