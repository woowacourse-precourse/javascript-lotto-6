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
        const results = this.calculateResults(lottos, winningNumbers, bonusNumber);
        this.printResults(results);

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
        const winningNumbers = userInput.split(',').map(Number);
        return winningNumbers;
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

    printResults(countResults) {
        //TODO : 당첨 내역을 출력한다.
        MissionUtils.Console.print("\n당첨 통계\n---");
        MissionUtils.Console.print("3개 일치 (5,000원) - " + countResults[3] + "개");
        MissionUtils.Console.print("4개 일치 (50,000원) - " + countResults[4] + "개");
        MissionUtils.Console.print("5개 일치 (1,500,000원) - " + countResults[5] + "개");
        MissionUtils.Console.print("5개 일치, 보너스 볼 일치 (30,000,000원) - " + countResults[5.1] + "개");
        MissionUtils.Console.print("6개 일치 (2,000,000,000원) - " + countResults[6] + "개");
    }
    calculateResults(lottos, winningNumbers, bonusNumber) {
        const results = lottos.map(lotto => this.calculateSingleLottoResult(lotto, winningNumbers, bonusNumber));

        return this.countResults(results);
    }

    calculateSingleLottoResult(lotto, winningNumbers, bonusNumber) {
        const matchCount = lotto.winningNumbersCount(winningNumbers);
        const hasBonusMatch = lotto.bonusMatch(bonusNumber);

        if (matchCount === 5 && hasBonusMatch) {
            return 5.1;
        } else if (matchCount >= 3) {
            return matchCount;
        } else {
            return 0;
        }
    }

    countResults(results) {
        const countResults = { 3: 0, 4: 0, 5: 0, 5.1: 0, 6: 0 };

        for (const result of results) {
            countResults[result] += 1;
        }

        return countResults;
    }

    printTotalEarningsRate() {
        //TODO : 총 수익률을 출력한다.
    }

}

export default App;
