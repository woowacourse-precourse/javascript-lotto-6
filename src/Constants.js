const IN_GAME_MESSAGE = Object.freeze({
  getMoney: "구입금액을 입력해 주세요.\n",
  amount: "개를 구매했습니다.\n",
  getNumbers: "\n당첨 번호를 입력해 주세요.\n",
  getBonusNumber: "\n보너스 번호를 입력해 주세요.\n",
  lottoResults: "당첨 통계\n---\n",
});

const UNIT = Object.freeze(1000);

const NUMBER_CRITERIA = Object.freeze(6);

const PERCENT = Object.freeze(100);

const PREFIX = Object.freeze("[ERROR]");

const INPUT_ERROR = Object.freeze({
  null: `${PREFIX} 아무것도 입력하지 않았습니다.\n`,
  blank: `${PREFIX} 공백없이 입력해야 합니다.\n`,
  char: `${PREFIX} 문자를 입력하였습니다.\n`,
  indivisible: `${PREFIX} ${UNIT}원 단위로 입력해야 합니다.\n`,
  empty: `${PREFIX} 숫자 길이가 0 입니다.\n`,
  outOfRange: `${PREFIX} 1 ~ 45 숫자를 입력해야 합니다.\n`,
  duplicate: `${PREFIX} 서로 다른 ${NUMBER_CRITERIA}개의 숫자를 입력해야 합니다.\n`,
});

export { IN_GAME_MESSAGE, UNIT, NUMBER_CRITERIA, PERCENT, INPUT_ERROR };
