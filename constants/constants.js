export const INPUT_MESSAGE = Object.freeze({
  money: '구입금액을 입력해 주세요.\n',
  jackpot: '\n당첨 번호를 입력해 주세요.\n',
  bonus: '\n보너스 번호를 입력해 주세요.\n',
});

export const PRINT_MESSAGE = Object.freeze({
  lottoCount: '개를 구매했습니다.',
  jackpot: '\n당첨 통계\n---',
  prize: [
    '3개 일치 (5,000원) - ',
    '4개 일치 (50,000원) - ',
    '5개 일치 (1,500,000원) - ',
    '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
    '6개 일치 (2,000,000,000원) - ',
  ],
});

export const ERROR_MESSAGE = Object.freeze({
  money: {
    notNumber: '[ERROR] 구입 금액은 숫자로 입력해주세요.',
    notUnit: '[ERROR] 구입 금액은 1000원 단위로 입력해주세요.',
  },
  lotto: {
    length: '[ERROR] 로또 번호는 6개로 입력해주세요.',
    notNumber: '[ERROR] 로또 번호는 숫자로 입력해주세요.',
    notInt: '[ERROR] 로또 번호는 정수로 입력해주세요.',
    notRange: '[ERROR] 로또 번호는 1부터 45 사이의 숫자로 입력해주세요.',
    notDifferent: '[ERROR] 로또 번호는 중복된 숫자 없이 입력해주세요.',
  },
  bonus: {
    notNumber: '[ERROR] 보너스 번호는 숫자로 입력해주세요.',
    notInt: '[ERROR] 보너스 번호는 정수로 입력해주세요.',
    notRange: '[ERROR] 보너스 번호는 1부터 45 사이의 숫자로 입력해주세요.',
    notDifferent:
      '[ERROR] 보너스 번호와 당첨 번호 간 중복된 숫자 없이 입력해주세요.',
  },
});

export const CONFIG = Object.freeze({
  lottoLength: 6,
  price: 1_000,
  range: {
    minNumber: 1,
    maxNumber: 45,
  },
  prize: [5_000, 50_000, 1_500_000, 30_000_000, 2_000_000_000],
  rank: {
    '1등, 2등': 6,
    '3등': 5,
    '4등': 4,
    '5등': 3,
  },
  jackpotLength: 5,
});
