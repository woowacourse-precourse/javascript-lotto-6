class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    console.log(numbers)
  }

  #validate(numbers) {
    const numbersSet = [... new Set(numbers)];
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    numbers.forEach(number => {
      if (!/\d/.test(number)){
        throw new Error('[ERROR] 숫자를 입력해 주세요.')
      } else if (number <= 0  || number > 45 ) {
        throw new Error('[ERROR] 1 ~ 45 사이의 숫자여야 합니다.')
      } 
    });
    if (numbersSet.length !== numbers){
      throw new Error('[ERROR] 중복된 값이 있습니다.')
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
