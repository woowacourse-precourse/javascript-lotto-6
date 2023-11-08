import { INPUT_BUDGET_ERROR } from "../constants/ErrorMsg";

class BudgetValidation {
    //입력받은 로또 구매 금액에 대한 유효성 검사
    budgetValid(budget) {
        // 1. 숫자가 아닐 경우
        if (isNaN(Number(budget))) {
            throw new Error(INPUT_BUDGET_ERROR.ONLY_NUMBER_ERROR);
        }

        // 2. 1000원 단위가 아닐 경우
        if (budget % 1000 !== 0) {
            throw new Error(INPUT_BUDGET_ERROR.INVALID_AMOUNT_ERROR);
        }

        // 3. 0원 이하일 경우
        if (budget <= 0) {
            throw new Error(INPUT_BUDGET_ERROR.NO_MONEY_ERROR);
        }

        return budget;
    }
}

export default BudgetValidation;