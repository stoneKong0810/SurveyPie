function ActionButtons({ steps, questionsLength }) {
  const isLast = questionsLength - 1 === steps;

  return (
    <div>
      {steps === 0 || <button>이전</button>}
      {isLast ? <button>제출</button> : <button>다음</button>}
    </div>
  );
}

export default ActionButtons;
