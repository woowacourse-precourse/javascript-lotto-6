export const RULES = Object.freeze({
  lottoPrice: 1000,
  range: Object.freeze({
    start: 1,
    end: 45,
  }),
  lottoLength: 6,
})

export const GAME_MESSAGE = Object.freeze({
  purchaseAmount: `구입금액을 입력해 주세요.\n`,
  correctNumbers: `당첨 번호를 입력해 주세요.\n`,
  bounusNumber: `\n보너스 번호를 입력해 주세요.\n`,
  evalResult: Object.freeze({
    start: `당첨 통계\n---`,
    correctNum: Object.freeze({
      three: `3개 일치 (5,000원)`,
      four: `4개 일치 (50,000원)`,
      five: `5개 일치 (1,500,000원)`,
      fiveWithBonus: `5개 일치, 보너스 볼 일치 (30,000,000원)`,
      six: `6개 일치 (2,000,000,000원)`,
    }),
    result: `총 수익률은 `,
  })
})

export const evalRateTable = Object.freeze([5000, 50000, 1500000, 30000000, 2000000000]);
