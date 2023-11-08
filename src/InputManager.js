import { Console } from "@woowacourse/mission-utils";

class InputManager {
    async enterAmount() {
        const inputAmount = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
        return inputAmount;    
    }
}
  
export default InputManager;