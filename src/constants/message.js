export const MESSAGE = Object.freeze({
  INPUT_MONEY: '구입금액을 입력해 주세요.',
  INPUT_WINNING_NUMBERS:
    '당첨 번호를 입력해 주세요. 번호는 쉼표(,)를 기준으로 구분해주세요',
  FINISH_DRAW_LOTTOS: '개를 구매했습니다.',
});

const PREFIX = '[ERROR]';

export const ERROR_MESSAGE = Object.freeze({
  PURCHASE_AMOUNT: `${PREFIX} 금액을 1000원 단위로 입력해주세요.`,
  INPUT_NON_NUMB: `${PREFIX} 숫자를 입력해 주세요.`,
  INPUT_SAME_NUMB: `${PREFIX} 중복된 숫자를 입력하지 마세요`,
  NOT_INPUT_6: `${PREFIX} 숫자 6개를 입력해주세요`,
  OUT_OF_BOUNDS: `${PREFIX} 1부터 45 사이의 수를 입력해 주세요`,
});
