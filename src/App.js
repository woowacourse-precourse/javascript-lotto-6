class App {
  async play() {
    const lottoCount = await this.getLottoPrice();
    const lotto = await this.createLotto(lottoCount);
  }

  async getLottoPrice() {
    //구입금액 입력받기
    const lottoPrice = MissionUtils.Console.readLineAsync(
      "구입금액을 입력해 주세요."
    );
    if (lottoPrice < 1000) {
      throw new Error("[ERROR]구입금액은 1000원 이상이어야 합니다.");
    }
    if (lottoPrice % 1000 !== 0) {
      throw new Error("[ERROR]구입금액은 1000단위여야 합니다.");
    } else return lottoPrice % 1000;
  }

  //로또 생성
  async createLotto(lottoCount) {
    lottoNumber = Math.floor();
    lotto = [];
  }
}

export default App;
