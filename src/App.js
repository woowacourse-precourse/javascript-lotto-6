class App {
  async play() {
    const COUNT = await getPurchaseAmount();
  }

  // 사용자로부터 구입금액을 입력 받는 메서드
  async getPurchaseAmount(){
    const INPUTPRICE = parseInt(Console.readLineAsync("구입금액을 입력해 주세요."));
    if(INPUTPRICE % 1000 !== 0)
      throw new Error("[ERROR] 구입 금액은 1,000원 단위여야 합니다.")
    return INPUTPRICE / 1000;
  }

  // createUniqueRandomNums
  // 중복되지 않는 랜덤 숫자 6개를 생성해주는 메서드
  // printLottoNums
  // 생성된 로또의 번호를 출력하는 메서드
  // getWinningNum
  // 사용자로부터 당첨 번호를 입력받는 메서드
  // getBonusNum
  // 사용자로부터 보너스 번호를 입력받는 메서드
  // printWinningStatistics
  // 당첨 통계를 출력해주는 메서드
  // calculateProfit
  // 총 수익률을 계산해주는 메서드
}

export default App;
