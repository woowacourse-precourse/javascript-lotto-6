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
    const LottoSet = new Set(numbers);
    if (LottoSet.size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복이 없어야 합니다.");
    }

    numbers.forEach(lottoNum => {
      if(lottoNum < 1){
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
      if(lottoNum > 45){
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
      if(isNaN(lottoNum)){
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
    });

  }

  // TODO: 추가 기능 구현
}

export default Lotto;
