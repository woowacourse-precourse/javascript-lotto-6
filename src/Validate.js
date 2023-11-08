class Validate {

  DivisibleBy1000(number) {
    if(number%1000 !== 0) throw new Error('[ERROR] 1000 단위로 입력해주세요')
  }

  checkNumbersType(numbers) {
    if (numbers.some(Number.isNaN)) throw new Error("[ERROR] 숫자를 인력해주세요.");
  }
  
  checkNumberRange(numbers) {
    const checked = numbers.every(number => number >= 1 && number <= 45);
    if(!checked) throw new Error("[ERROR] 1에서 45사이의 숫자를 입력해주세요.")
  }


  checkedBonusLength(number) {
    if(number.length !== 1) throw new Error("[ERROR] 숫자 1개만 입력해 주세요.")
  }

  checkDuplicateBonus(number,numbers) {
    const bonusNum = +number.join("")
    const checked = numbers.filter((num) => num === bonusNum);
    if(checked.length === 1) throw new Error("[ERROR] 당첨 번호와 중복되지 않게 입력해 주세요/")
  }
}

export default Validate