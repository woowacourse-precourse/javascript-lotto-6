import inputView from "../views/InputView";
import BudgetValidation from "../validation/BudgetValidation";

class LottoController {    
    budget = 0;
    lottoCount = 0;

    async getBudget() {
        //입력받은 값을 유효성 검사를 위해 넘겨줌
        const inputBudget = await this.getInputBudget();
        this.validateAndSetBudget(inputBudget);
    }

    async getInputBudget() {
        //사용자에게 로또 구매 금액을 입력받음
        const inputViewInstance = new inputView();
        return await inputViewInstance.inputBudget();
    }
    
    validateAndSetBudget(inputBudget) {
        //사용자에게 입력받은 로또 구매 양에 대한 유효성 검사를 진행
        const validBudget = new BudgetValidation();
        this.budget = validBudget.budgetValid(inputBudget);
        console.log(this.budget);
    }

    async start() {
        await this.getBudget();
    }
}

export default LottoController;