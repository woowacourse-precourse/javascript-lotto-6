class Customer {
  #payment;

  constructor(payment) {
    this.#validate(payment);
    this.#payment = payment;
  }

  #validate(payment) {
    if (payment % 1000 !== 0){
      throw new Error("[ERROR] 1,000원 단위로 입력해주세요.");
    }

    if (!/^[1-9]+$/.test(payment) || /^0/.test(payment)) {
      throw new Error("[ERROR] 유효한 입력 형식이 아닙니다.");
    }
  }

  /*
  async calculateTotalLottoTickets(payment) {
    const cntLotto
  }
  */



}

export default Customer;
