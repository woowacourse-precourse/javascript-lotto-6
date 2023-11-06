class Lotto {
  #numbers;

  // 이 constructor에 더 무언가 추가x(필드 추가 금지)
  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }
// 로또의 이 validate에 숫자를 입력하여 에러 확인
//  - validate의 파라미터인 numbers는 당첨번호를 받아서 넣음. 이후 확인을 validate로 하기
// checkNumberError가 지금 validate역할. 옮기기
  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    };
    if (!Number.isInteger(numbers)) {
      throw new Error(ERROR.INTEGER)
    };
    if (numbers < 1) {
      throw new Error(ERROR.ONE)
    };
    if (numbers > 45) {
      throw new Error(ERROR.FORTY_FIVE)
    };
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
