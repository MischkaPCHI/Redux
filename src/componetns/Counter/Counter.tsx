import { ButtonControl, CounterResult, CounterWrapper } from "./styles";
import Button from "../Button/Button";
import { useState } from "react";

const Counter = () => {

  const [value, setValue] = useState<number>(0);

  const onPlus = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const onMinus = () => {
    setValue((prevValue) => prevValue - 1);
  };

  const onMultiply = () => {
    setValue((prevValue) => prevValue * 2);
  };

  const onDivid = () => {
    setValue((prevValue) => prevValue / 2);
  };

  return (
    <CounterWrapper>
      <ButtonControl>
        <Button onButtonClick={onMinus} name="-" />
        <Button onButtonClick={onDivid} name="/" />
      </ButtonControl>
      <CounterResult>{value}</CounterResult>
      <ButtonControl>
        <Button onButtonClick={onPlus} name="+" />
        <Button onButtonClick={onMultiply} name="*" />
      </ButtonControl>
    </CounterWrapper>
  );
}

export default Counter;