import inputView from "../views/InputView";
import BudgetValidation from "../validation/BudgetValidation";
import GetLotto from "../models/GetLotto";
import OutputView from "../views/OutputView";
import Lotto from "../Lotto";

class LottoController {    
    budget = 0;
    lottoCount = 0;
    lottos = [];

    async getBudget() {
        //입력받은 값을 유효성 검사를 위해 넘겨줌
        const inputBudget = await this.getInputBudget();
        this.checkValidateBudget(inputBudget);
    }

    async getInputBudget() {
        //사용자에게 로또 구매 금액을 입력받음
        const inputViewInstance = new inputView();
        return await inputViewInstance.inputBudget();
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

    async start() {
        await this.getBudget();
        this.purchaseLottoTickets();
        this.makeRandomLotto();
    }
}

export default LottoController;