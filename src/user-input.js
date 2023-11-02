import { MissionUtils } from "@woowacourse/mission-utils";

const Console = MissionUtils.Console;
const Random = MissionUtils.Random;
const LOTTOPRICE = 1000;

async function userMoney() {
    const userMoney = await Console.readLineAsync("구입 금액을 입력해주세요.");
    return userMoney;
}

function lottoPurchasesNumber(userMoney) {
    const lottoNumber = userMoney/LOTTOPRICE;
    return lottoNumber;
}

async function lottoWinnerNumbers() {
    const inputNumber = await Console.readLineAsync("당첨 번호를 입력해 주세요.");
    const lottoWinnerNumber = inputNumber.split(",");
    return lottoWinnerNumber;
}

