import { Console } from "@woowacourse/mission-utils";

class InputVeiw{
    async readPurchaseAmount(){
        const inputMoney = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
        return inputMoney/1000;
    }

    async readWinningNumber(){
        return null;
    }
}

export default InputVeiw;