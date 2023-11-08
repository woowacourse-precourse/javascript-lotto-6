const Statics = {
  lotto: {
    digit: 6,
    low: 1,
    high: 45,
    price: 1000,
  },
  message: {
    input: {
      purchaseBudget: '구입금액을 입력해 주세요.',  
      winningNumber: '당첨 번호를 입력해 주세요.',
      bonusNumber: '보너스 번호를 입력해 주세요.',
    },
    error: {
      isNotNumber: '[ERROR] 숫자로 입력해주세요.',
      haveNotEnoughBudget: '[ERROR] 최소 구입 금액 미만입니다.',
      isNotMultipleOfLotteryPrice: '[ERROR] 구입 금액이 1,000으로 나누어 떨어지지 않습니다.',
      isOutOfRange: '[ERROR] 로또 숫자가 범위를 초과했습니다.',
      isUnNatural: '[ERROR] 로또 숫자가 잘못된 형식입니다.',
      isNotMatchWithDigit: '[ERROR] 당첨 번호는 6자리여야 합니다.', 
      areNotUnique: '[ERROR] 로또 숫자는 중복되지 않습니다.',
      isAlreadyPicked: '[ERROR] 보너스 숫자는 로또 숫자와 중복되지 않습니다.'
    },
    output: {
      printMAXpurchasableAmount: MAXpurchasableAmount => `
      ${MAXpurchasableAmount}개를 구입했습니다.
      `,
      printArrayAsString: array => `[${array.join(', ')}]`,
      lotteryResult: {
        header: `당첨 통계
        ---`,
        func5: (count) => `3개 일치 (5,000원) - ${count}개`,
        func4:(count) => `4개 일치 (50,000원) - ${count}개`,
        func3:(count) => `5개 일치 (1,500,000원) - ${count}개`,
        func2: (count) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
        func1: (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
        earningRatio:(ratio) => `총 수익률은 ${ratio}%입니다.`,
      }
    },

  }
}

export default Statics;