// 기능3 보너스 번호 중복
export function checkduplication(lottonum, bonus) {
  if (lottonum['numbers'].indexOf(+bonus) !== -1) {
    throw new Error('[ERROR] 당첨 번호와 보너스 번호가 일치하면 안됩니다.');
  }
}
