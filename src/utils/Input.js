import { Console } from '@woowacourse/mission-utils';

const Input = {
  async getPurchaseAmount() {    
    return await Console.readLineAsync('구입금액을 입력해 주세요.\n');
  }
}
  
export default Input;