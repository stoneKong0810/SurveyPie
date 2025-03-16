import { useNavigate } from 'react-router';

function ActionButtons({ steps, questionsLength }) {
  const isLast = questionsLength - 1 === steps;

  const navigate = useNavigate();

  return (
    <div>
      {steps === 0 || (
        <button
          onClick={() => {
            navigate(`${steps - 1}`);
          }}
        >
          이전
        </button>
      )}
      {isLast ? (
        <button
          onClick={() => {
            navigate('/done');
          }}
        >
          제출
        </button>
      ) : (
        <button
          onClick={() => {
            navigate(`${steps + 1}`);
          }}
        >
          다음
        </button>
      )}
    </div>
  );
}

export default ActionButtons;
