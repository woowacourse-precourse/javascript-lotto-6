import { Console } from "@woowacourse/mission-utils";
const SPLIT=","  
const AMOUNT_MESSAGE = "구입금액을 입력해 주세요: ";
const WINNING_NUMBERS_MESSAGE = "당첨 번호를 입력해 주세요.";
const ERROR_MESSAGE_BOUNS = "[ERROR] 올바른 당첨 번호를 입력하세여";
const ERROR_MESSAGE ="[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다."
const BOUNS_NUMBER = "보너스 번호를 입력해 주세요.";
class Inoutput {
  static async buyLotto() {
    const LottoCount = await Console.readLineAsync(AMOUNT_MESSAGE);
    const amount = parseInt(LottoCount, 10);
    Console.print(amount+"\n");
    return amount;
  }

  static async getWinningNumber() {
    let winningNumbers;

    while (true) {
      try {
        const winningNumberInput = await Console.readLineAsync(WINNING_NUMBERS_MESSAGE + "\n");
        winningNumbers = winningNumberInput.split(SPLIT).map((number) => parseInt(number, 10));
        if (winningNumbers.length !== 6 ||winningNumbers.some(isInvalidWinningNumber) ||duplicateNumbers(winningNumbers)
        ) {
          throw new Error(ERROR_MESSAGE);
        }
        Console.print("");
        break; 
      } catch (error) {
        Console.print(error.message); 
      }
    }
    return winningNumbers;
  }

  static async getBounsNumber(winningNumbers) {
    let bounsNumber;
    while (true) {
      try {
        const bounsNumberInput = await Console.readLineAsync(BOUNS_NUMBER + "\n" );
        Console.print("");
        bounsNumber = parseInt(bounsNumberInput, 10);
        if (isInvalidWinningNumber(bounsNumber) ||winningNumbers.includes(bounsNumber)) 
        {
          throw new Error(ERROR_MESSAGE_BOUNS);
        }
        Console.print("");
        break; 
      } catch (error) {
        Console.print(error.message); 
      }
    }
    return bounsNumber;
  }
  
}
function isInvalidWinningNumber(number) {
  return !Number.isInteger(number) || number < 1 || number > 45;
}
function duplicateNumbers(numbers) {
  const uniqueNumbers = new Set(numbers);
  return uniqueNumbers.size !== numbers.length;
}


export default Inoutput;
