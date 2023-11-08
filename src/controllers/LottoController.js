import inputView from "../views/InputView";
import BudgetValidation from "../validation/BudgetValidation";
import GetLotto from "../models/GetLotto";
import OutputView from "../views/OutputView";
import Lotto from "../Lotto";
import Score from "../models/Score";
import Margin from "../models/Margin";
import BonusValidation from "../validation/bonusValidation";

class LottoController {    
    budget = 0;
    lottoCount = 0;
    lottos = [];
    winningNum = [];
    bonusNum;
    result;

    async getInputBudget() {
        //사용자에게 로또 구매 금액을 입력받음
        const input = new inputView();
        const valid = new BudgetValidation();
        const print = new OutputView();
        while (this.budget === 0) {
            let inputBudget = await input.inputLottoBudget();
            try {
                this.budget = valid.budgetValid(inputBudget);
                if (this.budget > 0) break;
            } catch (error) {
                print.printError(error.message);
            }
        }
    }


    purchaseLottoTickets() {
        //로또 개수 계산
        const tickets = new GetLotto();
        this.lottoCount = tickets.calculateLottoCount(this.budget);
        this.printLottoTickets();
    }

    printLottoTickets() {
        //로또 개수 출력
        const print = new OutputView();
        print.printLottoTikets(this.lottoCount);
    }

    makeRandomLotto() {
        //로또 생성
        const lotto = new GetLotto();
        this.lottos = lotto.generateLottoNumbers(this.lottoCount);
        this.printRandomLotto();
    }

    printRandomLotto() {
        //로또 출력
        const print = new OutputView();
        this.lottos.forEach(numbers => print.printLottoNum(numbers));
    }

    async getWinningNumber() {
        let lotto;
        const print = new OutputView();
        const input = new inputView();
        while (!lotto) {
            const numbers = await input.inputLottoWinningNumber();
            try {
                lotto = new Lotto(numbers);
            } catch (error) {
                print.printError(error.message);
            }
        }
        this.winningNum = lotto.getNumbers();
    }

    async getBonusNumber() {
        //보너스 번호 입력받음
        const bonus = new inputView();
        const check = new BonusValidation();
        const print = new OutputView();

        while (!this.bonusNum) {
            const bonusNumber = await bonus.inputLottoBonusNumber();
            try {
                this.bonusNum = check.checkBonusValidation(bonusNumber);
            } catch (error) {
                print.printError(error.message);
            }
        }
    }

    calculateScore() {
        //로또 당첨 계산
        const score = new Score();
        this.lottos.forEach(lotto => {
            score.checkLotto(lotto, this.winningNum, this.bonusNum);
        });
        this.result = score.getScore();
    }

    printScore() {
        const margin = new Margin();
        const printMargin = margin.calculateLottoMargin(this.result);

        const print = new OutputView();
        print.printMargin(printMargin);
    }

    async start() {
        await this.getInputBudget();
        this.purchaseLottoTickets();
        this.makeRandomLotto();
        await this.getWinningNumber();
        await this.getBonusNumber();
        this.calculateScore();
        this.printScore();
    }
}

export default LottoController;