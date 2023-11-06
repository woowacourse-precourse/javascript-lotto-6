class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.result = "";
  }

  /* eslint-disable class-methods-use-this */
  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  checkResult({ win, bonus }) {
    let cntCorrect = 0;
    let checkBonus = false;
    this.#numbers.forEach((number) => {
      if (win.includes(number)) {
        cntCorrect += 1;
      }
      if (number === bonus) checkBonus = true;
    });

    if (cntCorrect === 6) {
      this.result = "6개 일치 (2,000,000,000원)";
    }

    if (cntCorrect === 5) {
      if (checkBonus) {
        this.result = "5개 일치, 보너스 볼 일치 (30,000,000원)";
      } else {
        this.result = "5개 일치 (1,500,000원)";
      }
    }
    if (cntCorrect === 4) {
      this.result = "4개 일치 (50,000원)";
    }
    if (cntCorrect === 3) {
      this.result = "3개 일치 (5,000원)";
    }
  }
  /* 
   TODO: Lotto에서 당첨결과 확인 로직 구현, 
   LottoGame에서는 Lotto객체들로 당첨결과 객체를 생성하고
   당첨결과 출력문자 가공, 수익률 계산 등을 처리
  */
}

export default Lotto;
