import Button from "../Button/Button";
import Spinner from "../Spinner/Spinner";
import { ButtonContainer, ActivityCard, ActivityText, RandomActivityWrapper, ActivityDeleteButton, ActivityContainer } from "./styles";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { randomActivitySliceSelectors, randomActivitySliceActions } from "store/redux/activityRandomizer/activityRandomizerSlice";

const ActivityRandomizer = () => {
  const dispatch = useAppDispatch();
  const { data, status, error } = useAppSelector(randomActivitySliceSelectors.activity);

  const getActivity = () => {
    dispatch(randomActivitySliceActions.getActivity());
  };

  const deleteThisActivity = (activityId: string) => {
    dispatch(randomActivitySliceActions.deleteThisActivity({ id: activityId }));
  };

  const activities = data.map((activity) => {
    return (
      <ActivityText key={activity.id}>
        {activity.question}
        <ActivityDeleteButton name="Delete" onClick={() => deleteThisActivity(activity.id)}>
          🗑️
        </ActivityDeleteButton>
      </ActivityText>
    );
  });

  return (
    <RandomActivityWrapper>
      <ActivityCard>
        <ButtonContainer>
          <Button name="Get Activity" onButtonClick={getActivity} disabled={status === "loading"} />
        </ButtonContainer>
        {status === "loading" && <Spinner />}

        <ActivityContainer>{activities}</ActivityContainer>

        {data.length > 0 && (
          <ButtonContainer>
            <Button name="Delete all" onButtonClick={() => dispatch(randomActivitySliceActions.deleteAll())} />
          </ButtonContainer>
        )}
      </ActivityCard>
    </RandomActivityWrapper>
  );
};
export default ActivityRandomizer;
