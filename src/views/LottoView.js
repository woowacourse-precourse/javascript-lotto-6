import { Console } from '@woowacourse/mission-utils';
import LottoController from '../controllers/LottoController.js';

export default class UserView {

    #lottoController

    constructor() {
        this.#lottoController = new LottoController();
    }

    async startLottoGame() {
        const money = await Console.readLineAsync('구입 금액을 입력해 주세요.\n');
        this.#initLottoUser(money);
    }

    #initLottoUser(money) {
        this.#lottoController.createUser(money);
        this.#lottoController.createUserLottoNumbers();
    }

    async inputWinningNumbers() {
        const winningNumbers = await Console.readLineAsync('\n당첨 번호를 입력해주세요.\n');
        this.#initLottoGame(winningNumbers);
    }

    #initLottoGame(winningNumbers) {
        this.#lottoController.createLotto(winningNumbers.split(','));
    }

    printUserLottoNumbers() {
        const numberOfPurchases = this.#lottoController.getUserNumberOfPurchases();
        const lottoNumbers = this.#lottoController.getUserLottoNumbers();

        Console.print(`\n${numberOfPurchases}개를 구매했습니다.`);
        lottoNumbers.forEach(number => {
            Console.print(JSON.stringify(number).replace(/,/g, ', '));
        });
    }

    async inputBonusNumber() {
        const bonusNumber = await Console.readLineAsync('\n보너스 번호를 입력해주세요.\n');
        this.#lottoController.validateBonusNumber(bonusNumber);
        return bonusNumber;
    }

    printLottoResult(bonusNumber) {
        const results = this.#lottoController.getLottoWinningResult(bonusNumber);

        Console.print('\n당첨 통계\n---');
        Console.print(`3개 일치 (5,000원) - ${results[0]}개`);
        Console.print(`4개 일치 (50,000원) - ${results[1]}개`);
        Console.print(`5개 일치 (1,500,000원) - ${results[2]}개`);
        Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${results[3]}개`);
        Console.print(`6개 일치 (2,000,000,000원) - ${results[4]}개`);
    }

    printEarningsRate(bonusNumber) {
        const earnings = this.#lottoController.getEarningsRate(bonusNumber);
        const purchaseAmount = this.#lottoController.getUserPerchaseAmount();
        Console.print(`총 수익률은 ${(earnings / purchaseAmount * 100).toFixed(1)}%입니다.`);
    }
}