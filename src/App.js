import InputService from './service/InputService.js';
class App {
  async play() {
    //Input : 구입 금액을 입력받기
    const purchaseMoney = await new InputService(
      'purchaseMoneyInput'
    ).setInputValue();
    console.log('purchaseMoney', purchaseMoney);

    //로또 발행 후 발행한 로또 수량 및 번호 출력하기
    //Input : 당첨 번호 입력받기
    //Input : 보너스 번호 입력받기
    //[당첨 내역, 수익률] 계산
    //[당첨 내역, 수익률] 출력하기
  }
}

export default App;
