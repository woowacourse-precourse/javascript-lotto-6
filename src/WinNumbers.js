import Validate from "./Validate.js";
import { Console } from '@woowacourse/mission-utils';
 
class WinNumbers {
  getNumbers = async() => {
    const input = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
    const inputNumbers = input.split(',').map(Number);
    return inputNumbers;
  }
    
  getBonus = async(numbers) => {
    const bonus = Number(await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n'));
    const validate = new Validate();
    try {
      validate.bonusInput(bonus, numbers)
    } catch {
      Console.print(validate.WARNING.BONUS);
      await this.getBonus(numbers);
    }
    return bonus;
  }
}
  
export default WinNumbers;
