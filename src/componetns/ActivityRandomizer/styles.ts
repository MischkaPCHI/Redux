import styled from "@emotion/styled";

export const RandomActivityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(2, 167, 173, 0.49);
  flex: 1;
`;
export const ActivityCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  min-width: 700px;
  height: 800px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  justify-content: space-between;
`;

export const ButtonContainer = styled.div`
  width: 300px;
`;
export const ActivityContainer = styled.div`
  height: 500px;
  min-width: 800px;
  overflow-y: auto;
`;

export const ActivityText = styled.p`
  font-size: 24px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const ActivityDeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 0;
  background-color: transparent;
  width: 30px;
  height: 30px;
  font-size: 24px;
  cursor: pointer;
`;
