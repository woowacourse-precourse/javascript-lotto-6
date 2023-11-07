class App {
  async play() {
    
  }

  /** 입력 받기 */
  async inputLotto() {
    try {
      const purchase = await this.getPurchase();
      const lottoTicket = this.getLottoTicket(purchase);
      const lottoNumber = await this.getLottoNumber();
      const bonusNumber = await this.getBonusNumber();

      const result = this.getResult(lottoTicket, lottoNumber, bonusNumber);
    } catch(error) {

    }
  }

  /** 구입 금액 입력 */
  async getPurchase() {

  }

  /** 로또 생성 */
  getLottoTicket(purchase) {

  }

  /** 당첨 번호 받기 */
  async getLottoNumber() {

  }

  /** 보너스 번호 받기 */
  async getBonusNumber() {

  }

  /** 결과 출력 */
  getResult(lottoTicket, lottoNumber, bonusNumber) {

  }
}

export default App;
