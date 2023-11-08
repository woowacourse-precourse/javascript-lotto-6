import ExceptionList from './ExceptionList';

class BonusInput {
  bonus;
  
  constructor(bonus) {
    this.validateBonusInput(bonus);
    this.bonus = bonus;
  }
  validateBonusInput = (bonus) => {
    let exception = new ExceptionList();
    exception.noInputError(bonus);
    exception.isNaNError(bonus);
    exception.numberRangeError(bonus);
  };
}

export default BonusInput;
