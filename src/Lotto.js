class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.#isNumber(numbers);
    this.#validate(numbers);
    this.#isSameNumber(numbers);
    this.#isNotOverNumber(numbers);

  }


  #validate(numbers) {
    if (numbers.length != 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }
  #isSameNumber(numbers) {
    let isSame = [...new Set(numbers)];
    if(isSame.length != numbers.length) throw Error("[ERROR] 서로 다른 숫자 6개를 입력하세요.")
  }
  #isNotOverNumber(numbers) {
    for(let i = 0; i < 6; i++){
      if(numbers[i] > 45 || numbers[i] < 1) throw Error("[ERROR] 숫자는 최소 1 최대 45 까지 입니다.")
    }
  }

  #isNumber(numbers) {
    numbers.map((word) => {if(isNaN(word) == true) throw Error("[ERROR] 숫자를 입력해주세요.")})
  }
  // TODO: 추가 기능 구현
}

export default Lotto;
