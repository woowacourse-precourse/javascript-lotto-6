export const INPUT_QUERY = Object.freeze({
  lottoCount: '구입금액을 입력해 주세요.\n',
  winningNumbers: '당첨 번호를 입력해 주세요.\n',
  bounsNumber: '\n보너스 번호를 입력해 주세요.\n',
});

export const MATCHED_COUNT = Object.freeze({
  six: 6,
  five: 5,
  four: 4,
  three: 3,
});

export const LOTTO_RANKS = Object.freeze({
  first: 'first',
  second: 'second',
  third: 'third',
  fourth: 'fourth',
  fifth: 'fifth',
  nothing: 'nothing',
});

export const RANK_MESSAGES = Object.freeze({
  first: '6개 일치',
  second: '5개 일치, 보너스 볼 일치',
  third: '5개 일치',
  fourth: '4개 일치',
  fifth: '3개 일치',
});

export const LOTTO_REWARDS_BY_RANK = Object.freeze({
  first: 2_000_000_000,
  second: 30_000_000,
  third: 1_500_000,
  fourth: 50_000,
  fifth: 5_000,
});

export const MESSAGES = Object.freeze({
  lottoCount: (count) => `${count}개를 구매했습니다.`,
  lottoReturnRate: (rate) => `총 수익률은 ${rate}%입니다.`,
  winningStatistics: '당첨 통계',
  horizonSeperator: '---',
});

export const LOTTO_RULES = Object.freeze({
  lottoPrice: 1000,
  lottoNumberCount: 6,
  minLottoNumber: 1,
  maxLottoNumber: 45,
});

export const ERROR_MESSAGE_PREFIX = '[ERROR]';

export const ERROR_MESSAGES = Object.freeze({
  invalidLottoType: '로또는 모두 숫자로만 구성되어야 해요!',
  invalidLottoCount: '로또는 6개의 숫자로 구성되어야 해요!',
  invalidLottoRange: '로또 번호는 모두 1 ~ 45 사이의 숫자여야 해요!',
  duplicatedLottoNumber: '로또의 숫자들은 중복되지 않아야 해요',

  invalidWinningType: '당첨 번호는 모두 숫자로만 구성되어야 해요!',
  invalidWinningCount: '당첨 번호는 6개의 숫자로 구성되어야 해요!',
  invalidWinningRange: '당첨 번호는 모두 1 ~ 45 사이의 숫자여야 해요!',
  duplicatedWinningNumber: '당첨 번호들은 중복되지 않아야 해요',

  invalidBounsType: '보너스 번호는 숫자여야 해요!',
  invalidBonusRange: '보너스 번호는 1 ~ 45 사이의 숫자여야 해요!',
  duplicatedBonusNumber: '로또 당첨 번호와 보너스 번호는 중복될 수 없어요!',

  invalidBuyCountType: '구입금액은 숫자여야 해요!',
  invalidBuyCountDivision: (price) => `${price}단위의 숫자를 입력해주세요!`,
});
