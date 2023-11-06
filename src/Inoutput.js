import { Console } from "@woowacourse/mission-utils";
const SPLIT=","  
const AMOUNT_MESSAGE = "구입금액을 입력해 주세요: ";
const WINNING_NUMBERS_MESSAGE = "당첨 번호를 입력해 주세요.";
const ERROR_MESSAGE = "[ERROR] 올바른 당첨 번호를 입력하세여";
class Inoutput {
  static async buyLotto() {
    const LottoCount = await Console.readLineAsync(AMOUNT_MESSAGE);
    const amount = parseInt(LottoCount, 10);
    console.log(amount);
    return amount;
  }


  static async getWinningNumber(){
    const winningNumberInput= await Console.readLineAsync(WINNING_NUMBERS_MESSAGE+"\n");
    const winningNumbers = winningNumberInput.split(SPLIT).map(number=>parseInt(number,10));

    if(winningNumbers.length !== 6 || winningNumbers.some(isInvalidWinningNumber)||duplicateNumbers(winningNumbers)){
      throw new Error(ERROR_MESSAGE);
    }
    console.log(`당첨번호 ${winningNumbers.join(', ')}`);
    return winningNumbers;
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
