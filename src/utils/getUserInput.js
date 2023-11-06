import { MissionUtils } from "@woowacourse/mission-utils";


export const getlottoCntFromInputMoney = async () => {
    const inputMoney = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
    const lottoCnt = Number(inputMoney) / 1000;

    return lottoCnt;
}