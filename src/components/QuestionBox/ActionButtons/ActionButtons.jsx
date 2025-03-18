import { useNavigate, useParams } from 'react-router';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import questionsAtom from '../../../stores/questions/questionsAtom';
import Button from './Button/Button';

function ActionButtons() {
  const questions = useRecoilValue(questionsAtom);

  const params = useParams();
  const steps = parseInt(params.step);
  const questionsLength = questions.length;

  const isLast = questionsLength - 1 === steps;

  const navigate = useNavigate();

  return (
    <ActionButtonsWrapper>
      {steps === 0 || (
        <Button
          type={'TERTIARY'}
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
            navigate('/done');
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
