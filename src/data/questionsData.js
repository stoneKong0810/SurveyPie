const questionsData = [
  {
    title: '1번 질문 입니다.',
    description: '1번 설명입니다.',
    type: 'text',
    required: false,
    options: {
      placeholder: '10자 이내 단답',
    },
  },
  {
    title: '2번 질문 입니다.',
    description: '2번 설명입니다.',
    type: 'textarea',
    required: true,
    options: {
      placeholder: '400자 이내 답',
    },
  },
  {
    title: '3번 질문 입니다.',
    description: '3번 설명입니다.',
    type: 'select',
    required: true,
    options: {
      items: ['답변1', '답변2', '답변3', '답변4', '답변5'],
    },
  },
];

export default questionsData;
