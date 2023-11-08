export const NUMBER_OPTIONS = {
  winningName: '당첨',
  bonusName: '보너스',
  beginRange: 1,
  endRange: 45,
  winningLength: 6,
  bonusLength: 1,
};

export const PURCHASE_OPTIONS = {
  unitPrice: 1000,
};

export const STATISTICS_STANDARD = {
  bonuesMatchCount: 5,

  matchCountRank: new Map([
    [0, '순위 외'],
    [1, '순위 외'],
    [2, '순위 외'],
    [3, '5등'],
    [4, '4등'],
    [5, '3등'],
    [NUMBER_OPTIONS.bonusName, '2등'],
    [6, '1등'],
  ]),

  prizeAmount: new Map([
    ['순위 외', 0],
    ['5등', 5000],
    ['4등', 50000],
    ['3등', 1500000],
    ['2등', 30000000],
    ['1등', 2000000000],
  ]),

  rankStandard: new Map([
    ['5등', `3개 일치`],
    ['4등', `4개 일치`],
    ['3등', `5개 일치`],
    ['2등', `5개 일치, 보너스 볼 일치`],
    ['1등', `6개 일치`],
  ]),
};

export const QUESTIONS = {
  winningNumbers: '당첨 번호를 입력해 주세요.',
  bonusNumber: '보너스 번호를 입력해 주세요.',
  purchaseLottoPrice: '구입금액을 입력해 주세요.',
};

export const MESSAGE = {
  prefix: '[ERROR]',
  invalidType: '숫자만 입력할 수 있습니다.',
  duplicatedNumber: '중복된 숫자는 입력할 수 없습니다.',
  duplicatedWinning: '당첨 번호와 중복되는 숫자는 입력할 수 없습니다.',
  invalidRange: (begin, end) =>
    `${begin}이상 ${end}이하의 숫자만 입력할 수 있습니다.`,
  invalidLength: (length) => `로또 번호는 ${length}개여야 합니다.`,
  invalidBonusLength: (length) => `보너스 번호는 ${length}개여야 합니다.`,
  invalidPurchaseUnit: (unit) =>
    `로또 구입 금액은 ${unit}원 단위로 입력해야 합니다.`,
};

export const INFORM_TEMPLATE = {
  purchase: '개를 구매했습니다.',
  numberSeperator: ', ',
  lottoSeperator: '\n',
  statisticHeader: '당첨 통계\n---',
  statistic: (rankStandard, prize, count) =>
    `${rankStandard} (${prize}원) - ${count}개`,
  profit: (profit) => `총 수익률은 ${profit}%입니다.`,
};
