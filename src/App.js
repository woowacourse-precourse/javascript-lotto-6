import {MissionUtils} from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
    async play() {
        const purchaseAmount = await this.buyLottoTickets();
        const maxTickets = this.getMaxPurchasedTickets(purchaseAmount);

        const lottoNumbersArray = this.getLottoNumbersArray(maxTickets);
        const lottos = lottoNumbersArray.map(numbers => new Lotto(numbers));
        this.displayLottoNumbers(maxTickets, lottos);

        const winningNumbers = await this.inputWinningNumbers();
        const bonusNumber = await this.inputBonusNumber();
        MissionUtils.Console.print(winningNumbers);
        MissionUtils.Console.print(bonusNumber);

    }

    async buyLottoTickets() {
        //TODO : 로또 구입 금액을 입력 받는다.
        let userInput = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");

        return parseInt(userInput);
    }

    getMaxPurchasedTickets(purchaseAmount) {
        //TODO : 로또 티켓의 최대 구매 가능 개수를 계산하고 반환한다.
        return Math.floor(purchaseAmount / 1000);
    }

    randomNumber() {
        //TODO : 랜덤한 값을 반환
        return MissionUtils.Random.pickNumberInRange(1, 45);
    }

    generateRandomNumbers() {
        //TODO : 랜덤한 로또 번호를 생성하고 반환한다.
        const lottoNumbers = new Set();

        while (lottoNumbers.size < 6) {
            const number = this.randomNumber(); // 랜덤한 숫자 생성
            lottoNumbers.add(number);
        }

        return Array.from(lottoNumbers);
    }

    getLottoNumbersArray(maxTickets) {
        //TODO : 로또 티켓의 최대 구매 가능 개수만큼 랜덤한 로또 번호 배열을 만들고 반환한다.
        const lottoNumbersArray = [];

        for (let i = 0; i < maxTickets; i++) {
            const lottoNumbers = this.generateRandomNumbers();
            lottoNumbersArray.push(lottoNumbers);
        }
        return lottoNumbersArray;
    }

    async inputWinningNumbers() {
        //TODO : 당첨 번호를 입력 받는다.
        let userInput = await MissionUtils.Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
        return userInput.split(',');
    }

    async inputBonusNumber() {
        //TODO : 보너스 번호를 입력 받는다.
        let userInput = await MissionUtils.Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
        return userInput;
    }

    displayLottoNumbers(maxTickets, lottos) {
        //TODO : 발행한 로또 수량 및 번호를 출력한다.
        MissionUtils.Console.print("\n" + maxTickets + "개를 구매했습니다.");
        lottos.map(lotto => lotto.displayNumbers());
    }

    async printResults() {
        //TODO : 당첨 내역을 출력한다.
    }

    async printTotalEarningsRate() {
        //TODO : 총 수익률을 출력한다.
    }

}

export default App;
