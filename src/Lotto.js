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
  }

  // TODO: 추가 기능 구현
  #validate(numbers){
    const set = new Set();
    for(let i = 0; i < numbers.length; i++){
      if(set.has(numbers[i])){
        throw new Error("[ERROR] 중복된 값이 있습니다.");
        return;
      }
      set.add(numbers[i]);
    }
  }
}

export default Lotto;
