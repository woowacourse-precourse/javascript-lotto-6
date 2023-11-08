const OUTPUT_MESSAGE = Object.freeze({
  PRINT_PURCHASED_NUMBER: (number) => `${number}개를 구매했습니다.`,

  PRINT_WINNING_LOG: '당첨 통계',

  PRINT_HORIZONTAL_LINE: '---',
  PRINT_ENTER: '',

  PRINT_FIFTH_PLACE: (number) => `3개 일치 (5,000원) - ${number}개`,
  PRINT_FORTH_PLACE: (number) => `4개 일치 (50,000원) - ${number}개`,
  PRINT_THIRD_PLACE: (number) => `5개 일치 (1,500,000원) - ${number}개`,
  PRINT_SECOND_PLACE: (number) =>
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${number}개`,
  PRINT_FIRST_PLACE: (number) => `6개 일치 (2,000,000,000원) - ${number}개`,

  PRINT_TOTAL_RETURN_RATE: (number) => `총 수익률은 ${number}%입니다.`,
});

export default OUTPUT_MESSAGE;
