import { useNavigate } from 'react-router';

import Button from './Button/Button';

function ActionButtons({ steps, questionsLength }) {
  const isLast = questionsLength - 1 === steps;

  const navigate = useNavigate();

  return (
    <div>
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
    </div>
  );
}

export default ActionButtons;
