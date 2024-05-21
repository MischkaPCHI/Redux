import styled from "@emotion/styled";

export const SpinnerComponent = styled.div`
  border: 6px solid transparent;
  border-radius: 50px;
  background: linear-gradient(currentColor 0 0) 0 100%/0% 5px no-repeat;
  width: 200px;
  animation: l2 2s linear infinite;
  color: rgba(39,0,255,1);

  @keyframes l2 {
    to {
      background-size: 100% 5px;
    }
  }
`;
