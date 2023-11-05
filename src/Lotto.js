class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않은 숫자로 이루어져야 합니다.");
    }
  }

  result(winningNum, bonusNum){
    const res = {cnt: 0, hasBonus:false}
    //TODO: 매직넘버로 바꾸기
    for (let i = 0; i<6; i++){
      if(this.#numbers.includes(winningNum[i])){
        res.cnt++;
      }
    }
    if(this.#numbers.includes(bonusNum)) res.hasBonus = true;
    return res;
  }
}

export default Lotto;
