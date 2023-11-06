import { Random, Console } from '@woowacourse/mission-utils';

class Input {
  constructor() {
    this.lottoNumbers = [];
  }


  async userPurchase() {
    try {
      Console.print('구입금액을 입력해 주세요');
      const input = await Console.readLineAsync('');
      const purchaseAmount = parseInt(input);
      if (isNaN(purchaseAmount) || purchaseAmount <= 0 || purchaseAmount % 1000 !== 0) {
        throw new Error('올바른 구입금액을 입력해 주세요 (1,000원 단위, 양수).');
      }
      return input;
    } catch (error) {
      throw error;
    }
  }

  async userNumber() {
    try {
      Console.print('당첨 번호를 입력해 주세요.');
      const lottoNumbers = await Console.readLineAsync('');
      this.lottoNumbers = lottoNumbers.split(',').map(num => parseInt(num.trim()));
      if (this.lottoNumbers.length !== 6 || this.lottoNumbers.some(isNaN) || this.lottoNumbers.some(num => num < 1 || num > 45)) {
        throw new Error('올바른 로또 번호를 입력해 주세요 (1부터 45까지의 숫자, 쉼표로 구분된 6개 숫자).');
      }
      this.checkForDuplicates(this.lottoNumbers);

      return this.lottoNumbers;
    } catch (error) {
      throw error;
    }
  }

  async userBonusNumber() {
    try {
      Console.print('보너스 번호를 입력해 주세요.')
      const input = await Console.readLineAsync('');
      const bonusNumber = parseInt(input);
      if (isNaN(bonusNumber) || bonusNumber < 1 || bonusNumber > 45) {
        throw new Error('올바른 보너스 번호를 입력해 주세요 (1부터 45까지의 숫자).');
      }
      const allNumbers = [...this.lottoNumbers, bonusNumber];
      this.checkForDuplicates(allNumbers);

      return bonusNumber;
    } catch (error) {
      throw error;
    }
  }

  checkForDuplicates(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error('로또 번호에 중복된 숫자가 있습니다.');
    }
  }

}

export default Input;