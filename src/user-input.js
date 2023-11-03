import { MissionUtils } from "@woowacourse/mission-utils";

const Console = MissionUtils.Console;

async function userMoney() {
    const userMoney = await Console.readLineAsync("구입 금액을 입력해주세요.");
    return userMoney;
}


async function lottoWinnerNumbers() {
    const inputNumber = await Console.readLineAsync("당첨 번호를 입력해 주세요.");
    const lottoWinnerNumber = inputNumber.split(",");
    return lottoWinnerNumber;
}

async function lottoBonusNumber() {
    const lottoBonusNumber = await Console.readLineAsync("보너스 번호를 입력해 주세요.");
    return lottoBonusNumber;
}

export { userMoney, lottoWinnerNumbers, lottoBonusNumber };