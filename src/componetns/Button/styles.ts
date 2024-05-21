import styled from "@emotion/styled";

interface ButtonComponentProps {
  disabled: boolean;
}

export const ButtonComponent = styled.button<ButtonComponentProps>`
  width: 100%;
  height: 70px;
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 20px;
  /* background-color: #1f27f5; */
  background: ${({ disabled }) => (disabled ? "grey" : "rgba(175,2,192,0.7)")};
  color: white;
  font-size: 16px;
  cursor: pointer;
`;
