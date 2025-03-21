import { useNavigate } from 'react-router';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import useAnswers from '../../../hooks/useAnswers';
import useStep from '../../../hooks/useStep';
import useSurveyId from '../../../hooks/useSurveyId';
import postAnswers from '../../../services/postAnswers';
import questionsLengthSelector from '../../../stores/survey/qustionsLengthSelector';
import Button from './Button/Button';

function ActionButtons() {
  const steps = useStep();
  const questionsLength = useRecoilValue(questionsLengthSelector);
  const navigate = useNavigate();
  const surveyId = useSurveyId();
  const answers = useAnswers();

  const isLast = questionsLength - 1 === steps;

  return (
    <ActionButtonsWrapper>
      {steps === 0 || (
        <Button
          type={'SECONDARY'}
          onClick={() => {
            navigate(`${steps - 1}`);
          }}
        >
          이전
        </Button>
      )}
      {isLast ? (
        <Button
          type={'PRIMARY'}
          onClick={() => {
            postAnswers(surveyId, answers);
            navigate(`/done/${surveyId}`);
          }}
        >
          제출
        </Button>
      ) : (
        <Button
          type={'PRIMARY'}
          onClick={() => {
            navigate(`${steps + 1}`);
          }}
        >
          다음
        </Button>
      )}
    </ActionButtonsWrapper>
  );
}

const ActionButtonsWrapper = styled.div`
  margin-top: 72px;
  align-self: center;
  display: flex;
  gap: 16px;
`;

export default ActionButtons;
