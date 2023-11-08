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

const TICKET_UNIT = 1000;

export { RANK, MESSAGE, TICKET_UNIT };
