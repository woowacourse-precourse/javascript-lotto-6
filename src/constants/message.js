export const INPUT_MESSAGE = Object.freeze({
  totalMoney: '구입금액을 입력해 주세요.\n',
  userLotto: '당첨 번호를 입력해 주세요.\n',
  userBonus: '보너스 번호를 입력해 주세요.\n'
})

export const OUTPUT_MESSAGE = Object.freeze({
  lottoCount: '개를 구매했습니다.',
  winStatistics: '당첨 통계',
  line: '---',
  fifth: '3개 일치 (5,000원) - ',
  fourth: '4개 일치 (50,000원) - ',
  third: '5개 일치 (1,500,000원) - ',
  second: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  first: '6개 일치 (2,000,000,000원) - ',
  unit: '개',
  total: '총 수익률은 ',
  isEnd: '%입니다.',
})

export const ERR_MESSAGE = Object.freeze({
  notNum: '[ERROR] 숫자만 입력할 수 있습니다.',
  notDividedThousand: '[ERROR] 1,000원의 배수로만 입력해야합니다.',
  notLenSix: '[ERROR] 로또 번호는 6개여야 합니다.',
  notDuplicated: '[ERROR] 중복된 숫자는 입력할 수 없습니다.',
  notUnderFourtyFive: '[ERROR] 1과 45사이의 숫자만 입력해야합니다.',
})