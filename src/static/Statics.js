const Statics = {
  lotto: {
    condition: {
      digit: 6,
      low: 1,
      high: 45,
    },
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
      isUnNatural: '[ERROR] 로또 숫자가 잘못된 형식입니다.'
    },
    output: {
      printMAXpurchasableAmount: MAXpurchasableAmount => `
      ${MAXpurchasableAmount}개를 구입했습니다.
      `,
      printArrayAsString: array => `[${array.join(', ')}]`,

    },

  }
}

export default Statics;