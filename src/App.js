import Lotto from "./Lotto.js";

class App {
    async play() {
        const purchaseAmount = await this.buyLottoTickets();
        const lottoTicketsQuantity = await this.getMaxPurchasedTickets(purchaseAmount);
    }

    async buyLottoTickets() {
        //TODO : 로또 구입 금액을 입력 받는다.
        let userInput = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");

        return parseInt(userInput);
    }

    async getMaxPurchasedTickets(purchaseAmount) {
        //TODO : 로또 티켓의 최대 구매 가능 개수를 계산하고 반환한다.
        return purchaseAmount/1000;
    }

    async randomizeLottoNumbers() {
        //TODO : 랜덤한 로또 번호를 생성하고 반환한다.
    }

    async getLottoNumbersArray() {
        //TODO : 로또 티켓의 최대 구매 가능 개수만큼 랜덤한 로또 번호 배열을 만들고 반환한다.
    }

    async inputWinningNumbers() {
        //TODO : 당첨 번호를 입력 받는다.
    }

    async inputBonusNumber() {
        //TODO : 보너스 번호를 입력 받는다.
    }

    async displayLottoNumbers() {
        //TODO : 발행한 로또 수량 및 번호를 출력한다.
    }

    async printResults() {
        //TODO : 당첨 내역을 출력한다.
    }

    async printTotalEarningsRate() {
        //TODO : 총 수익률을 출력한다.
    }

}

export default App;
