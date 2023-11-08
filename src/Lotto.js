class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const uniqueNumbers = new Set(numbers);
    const checked = numbers.every(num => num >= 1 && num <= 45);

    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (numbers.map((num) => Number(num)).some(Number.isNaN)) throw new Error("[ERROR] 숫자를 인력해주세요.");

    if(uniqueNumbers.size !== numbers.length) throw Error("[ERROR] 중복된 숫자가 있습니다.")
    
    if(!checked) throw Error("[ERROR] 1에서 45사이의 숫자를 입력해주세요.")
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
