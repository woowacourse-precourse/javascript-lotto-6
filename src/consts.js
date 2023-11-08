export const message = Object.freeze({
  purchaseAmount: '구입금액을 입력해주세요.\n',
  winningNumbers: '당첨 번호를 입력해 주세요.\n',
  bonusNumber: '보너스 번호를 입력해 주세요.\n',
});

export const error = Object.freeze({
  purchaseAmountError: '[ERROR] 구입금액은 1,000원으로 나누어 떨어져야 합니다.',
  winningNumbersSeparatorError:
    '[ERROR] 당첨 번호는 "," 로 구분해서 입력해야 합니다.',
  LottoNumbersDuplicationError: '[ERROR] 로또 번호는 중복이 없어야 합니다.',
  LottoNumbersLengthError: '[ERROR] 로또 번호는 6개여야 합니다.',
  numberRangeError: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  numberTypeError: '[ERROR] 숫자는 정수형으로 입력해야 합니다.',
  inputEmptyError: '[ERROR] 값을 입력해주세요.',
});

export const outputString = Object.freeze({
  winningStatistics: '당첨 통계',
  devider: '---',
  purchaseCount: '개를 구매했습니다.',
  lottoRank5: '3개 일치 (5,000원) - ',
  lottoRank4: '4개 일치 (50,000원) - ',
  lottoRank3: '5개 일치 (1,500,000원) - ',
  lottoRank2: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  lottoRank1: '6개 일치 (2,000,000,000원) - ',
  countUnit: '개',
  rateOfReturn: '총 수익률은 ',
  rateOfReturnSuffix: '%입니다.',
});

export const condition = Object.freeze({
  lottoMinNumber: 1,
  lottoMaxNumber: 45,
  inputEmptyLength: 0,
  separator: ',',
  oneLottoPrice: 1000,
  correctRemain: 0,
  lottoNumbersLength: 6,
  bonusNumberLength: 1,
  bonusNumberChance: 5,
  maxRankNumber: 5,
});
