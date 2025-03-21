import { useState } from 'react';
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
  const [isPosting, setIsPosting] = useState(false);

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
            setIsPosting(true);
            postAnswers(surveyId, answers)
              .then(() => {
                navigate(`/done/${surveyId}`);
              })
              .catch(() => {
                alert('에러가 발생하였습니다. 다시 시도해주세요.');
                setIsPosting(false);
              });
          }}
          disabled={isPosting}
        >
          {isPosting ? '제출 중입니다...' : '제출'}
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
