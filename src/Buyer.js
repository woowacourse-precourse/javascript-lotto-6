import error from './constants/error.js';

class Buyer {
  expense;

  buyLottoCount(expense) {
    this.expense = Number(expense);

    Buyer.validationExpense(this.expense);

    const count = this.expense / 1000;

    return count;
  }

  static validationExpense(expense) {
    if (/[^0-9]/.test(expense)) {
      throw new Error(error.EXPENSE_INTEGER);
    }

    if (expense < 1000) {
      throw new Error(error.EXPENSE_MORE_THEN_ONE_THOUSAND_WON);
    }

    if (expense % 1000 !== 0) {
      throw new Error(error.EXPENSE_UNIT_ONE_THOUSAND_WON);
    }
  }
}
export default Buyer;
