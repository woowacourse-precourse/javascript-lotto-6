const RANK = [
  {
    result: 'five',
    match: 3,
    printMoney: '5,000',
    money: 5000,
  },
  {
    result: 'four',
    match: 4,
    printMoney: '50,000',
    money: 50000,
  },
  {
    result: 'three',
    match: 5,
    printMoney: '1,500,000',
    money: 1500000,
  },
  {
    result: 'two',
    match: 5,
    printMoney: '30,000,000',
    money: 30000000,
  },
  {
    result: 'one',
    match: 6,
    printMoney: '2,000,000,000',
    money: 2000000000,
  },
];

const MESSAGE = {
  INPUT_MONEY: '구입금액을 입력해 주세요.\n',
  INPUT_WIN: '\n당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS: '\n보너스 번호를 입력해 주세요.\n',
  MATCH_RESULT: '\n당첨 통계\n---',
};

const ERROR_MESSAGE = {
  CHECK_MONEY:
    '[ERROR] 입력하신 값을 다시 확인 해주세요. 1000원 단위의 숫자로 입력해 주세요.',
  CHECK_WIN_NUMBER:
    '[ERROR] 입력하신 값을 다시 확인 해주세요. 당첨 번호는 1에서 45 사이의 서로 다른 숫자만 입력 가능합니다.',
  CHECK_BONUS_NUMBER:
    '[ERROR] 입력하신 값을 다시 확인 해주세요. 보너스 번호는 1에서 45 사이의 당첨 번호가 아닌 숫자만 입력 가능합니다.',
  CHECK_LOTTO_NUMBER_DUPLICATE: '[ERROR] 로또 숫자는 중복될 수 없습니다.',
  CHECK_LOTTO_NUMBER: '[ERROR] 로또 숫자는 숫자이어야 합니다.',
};

const TICKET_UNIT = 1000;

export { RANK, MESSAGE, TICKET_UNIT, ERROR_MESSAGE };
