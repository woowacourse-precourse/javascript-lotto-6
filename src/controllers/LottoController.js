import inputView from "../views/InputView";
import BudgetValidation from "../validation/BudgetValidation";
import GetLotto from "../models/GetLotto";
import OutputView from "../views/OutputView";
import Lotto from "../Lotto";
import Score from "../models/Score";

class LottoController {    
    budget = 0;
    lottoCount = 0;
    lottos = [];
    winningNum = [];
    bonusNum = 0;
    result;

    async getBudget() {
        //입력받은 값을 유효성 검사를 위해 넘겨줌
        const inputBudget = await this.getInputBudget();
        this.checkValidateBudget(inputBudget);
    }

    async getInputBudget() {
        //사용자에게 로또 구매 금액을 입력받음
        const inputViewInstance = new inputView();
        return await inputViewInstance.inputLottoBudget();
    }
    
    checkValidateBudget(inputBudget) {
        //사용자에게 입력받은 로또 구매 양에 대한 유효성 검사를 진행
        const validBudget = new BudgetValidation();
        this.budget = validBudget.budgetValid(inputBudget);
        console.log(this.budget);
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
        //당첨 숫자 입력받음
        const winning = new inputView();
        const inputWinning = await winning.inputLottoWinningNumber();
        const inputBonusNumber = await this.getBonusNumber();
        const lotto = new Lotto(inputWinning, inputBonusNumber);

        //당첨 번호, 보너스 번호 돌려받음
        this.winningNum = lotto.getNumbers();
        this.bonusNum = lotto.getBonusNumber();
    }

    async getBonusNumber() {
        //보너스 번호 입력받음
        const bonus = new inputView();
        return await bonus.inputLottoBonusNumber();
    }

    calculateScore() {
        //로또 당첨 계산
        const score = new Score();
        this.result = score.checkLotto(this.lottos, this.winningNum, this.bonusNum);
    }

    async start() {
        await this.getBudget();
        this.purchaseLottoTickets();
        this.makeRandomLotto();
        this.calculateScore();
    }
}

export default LottoController;