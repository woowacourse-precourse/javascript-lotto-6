const common = Object.freeze({
  empty: '값이 입력되지 않았습니다.',
  notANumber: '입력한 값이 숫자가 아닙니다.',
  notNatural: '입력 값이 자연수가 아닙니다.',
})

const amounts = Object.freeze({
  rest: '잔돈이 생기지 않도록 금액을 입력해주세요.',
})

const lotto = Object.freeze({
  unsplit: '쉼표(,)로 숫자를 구분해주세요.',
  invalidRange: '1에서 45 사이의 숫자를 입력해주세요.',
  invalidCount: '6개의 숫자를 입력해주세요.',
  invalidBounsCount: '1개의 숫자를 입력해주세요.',
  duplicate: '숫자가 중복되지 않게 입력해주세요.',
})

const ERROR = Object.freeze({
  common,
  amounts,
  lotto,
})

export default ERROR