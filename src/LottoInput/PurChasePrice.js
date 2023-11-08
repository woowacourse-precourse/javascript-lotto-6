import { MissionUtils } from "@woowacourse/mission-utils";

export class PurChasePrice {
    async inputPrice() {
        const userPrice = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
        if (userPrice % 1000 !== 0) {
            throw new Error("[ERROR] 입력 값이 1,000으로 나누어 떨어지지 않습니다.");
        }
        return userPrice / 1000;
    }
}
