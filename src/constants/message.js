const input = Object.freeze({
  amounts: '구입금액을 입력해 주세요. (로또는 1개에 1,000원입니다.)\n',
  winNumber: '당첨 번호를 입력해 주세요. (1에서 45 사이의 숫자 6개, 쉼표(,)로 구분)\n',
  bonusNumber: '보너스 번호를 입력해 주세요. (1에서 45 사이의 숫자 1개)\n'
})

const result = Object.freeze({
  numberOfPurchase: '개를 구매했습니다.',
  stats: '당첨 통계\n---'
})

const win = Object.freeze({
  first: '6개 일치 (2,000,000,000원)',
  second: '5개 일치, 보너스 볼 일치 (30,000,000원)',
  third: '5개 일치 (1,500,000원)',
  fourth: '4개 일치 (50,000원)',
  fifth: '3개 일치 (5,000원)'
})

const MESSAGE = Object.freeze({ 
  win, 
  result, 
  input 
})

export default MESSAGE