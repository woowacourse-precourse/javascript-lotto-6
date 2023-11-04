const ERROR_MESSAGE = {
  BUY_MONEY_1000:
    '[ERROR] 구입 금액으로 1000원으로 나누어 떨어지는 수를 입력해주세요',
  BUY_MONEY_NOT_NUM: '[ERROR] 구입 금액으로 숫자를 입력해주세요',
  RANDOM_NUM_6: '[ERROR] 당첨 번호를 6개 입력해 주세요',
  RANDOM_NUM_DUPLICATE: '[ERROR] 서로 다른 당첨 번호를 입력해 주세요.',
  BONUMUS_NUM_RANGE: '[ERROR] 1 ~ 45 사이의 숫자를 입력해 주세요.',
};

const INPUT_MESSAGE = {
  INPUT_BUY_MONEY: '구입금액을 입력해 주세요.\n',
  INPUT_WINNINGNUM: '\n당첨 번호를 입력해 주세요.',
  INPUT_BONUSNUM: '\n보너스 번호를 입력해 주세요.',
};

const OUTPUT_MESSAGE = {
  OUTPUT_NUM_OF_LOTTOS: '개를 구매했습니다.',
  RESULT: '\n당첨 통계\n---',

  FIFTH_PLACE: '3개 일치 (5,000원)',
  FOURTH_PLACE: '4개 일치 (50,000원)',
  THIRD_PLACE: '5개 일치 (1,500,000원)',
  SECOND_PLACE: '5개 일치, 보너스 볼 일치 (30,000,000원)',
  FIRST_PLACE: '6개 일치 (2,000,000,000원)',

  REVENUE: '총 수익률은',
};

export { ERROR_MESSAGE, INPUT_MESSAGE, OUTPUT_MESSAGE };
