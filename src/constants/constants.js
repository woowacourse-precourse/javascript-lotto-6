const LOTTO = Object.freeze({
  min: 1,
  max: 45,
  count: 6,
  price: 1000,
});

const PRIZE = Object.freeze({
  first: {
    name: 'first',
    matchCount: 6,
    extraWord: '',
    money: 2000000000,
  },
  second: {
    name: 'second',
    matchCount: 5,
    extraWord: ', 보너스 볼 일치',
    money: 30000000,
  },
  third: {
    name: 'third',
    matchCount: 5,
    extraWord: '',
    money: 1500000,
  },
  fourth: {
    name: 'fourth',
    matchCount: 4,
    extraWord: '',
    money: 50000,
  },
  fifth: {
    name: 'fifth',
    matchCount: 3,
    extraWord: '',
    money: 5000,
  },
});

const ERROR_MESSAGE = Object.freeze({
  number: '[ERROR] 숫자를 입력해주세요.',
  unit: `[ERROR] ${LOTTO.price.toLocaleString()}원 단위로 입력해주세요.`,
  form: '[ERROR] 숫자를 쉼표로 구분하여 입력해주세요.',
  duplicates: '[ERROR] 로또 번호에 중복되는 숫자를 입력할 수 없습니다.',
  range: `[ERROR] 로또 번호는 ${LOTTO.min}부터 ${LOTTO.max} 사이의 숫자여야 합니다.`,
  bonus: '[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.',
});

const INPUT_MESSAGE = Object.freeze({
  purchaseMoney: '구입금액을 입력해 주세요.\n',
  winningNumber: '\n당첨 번호를 입력해 주세요.\n',
  bonusNumber: '\n보너스 번호를 입력해 주세요.\n',
});

const OUTPUT_MESSAGE = Object.freeze({
  purchaseCount: tickets => `\n${tickets.length}개를 구매했습니다.`,
  tickets: ticket => `[${ticket.join(', ')}]`,
  resultTitle: `\n당첨통계\n---`,
  prizeResult: (prize, matchCount) =>
    `${PRIZE[prize].matchCount}개 일치${PRIZE[prize].extraWord} (${PRIZE[
      prize
    ].money.toLocaleString()}원) - ${matchCount}개`,
  profitRate: profitRate =>
    `총 수익률은 ${profitRate.toLocaleString(undefined, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    })}%입니다.`,
});

export { LOTTO, INPUT_MESSAGE, ERROR_MESSAGE, OUTPUT_MESSAGE, PRIZE };
