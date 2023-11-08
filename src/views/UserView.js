import { Console } from '@woowacourse/mission-utils';

export default class UserView {

    async inputPurchaseAmount() {
        return await Console.readLineAsync('구입 금액을 입력해 주세요.\n');
    }

    async inputWinningNumbers() {
        return await Console.readLineAsync('\n당첨 번호를 입력해주세요.\n');
    }
}