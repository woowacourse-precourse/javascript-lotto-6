import { ERROR_MESSAGES } from "../constant/message";
import OPTIONS from "../constant/option";

const buyLottoBuyValueCheck = (money) => {
    if ((Number(money) % OPTIONS.thousand)) {
        throw new Error(`${ERROR_MESSAGES.prefix} ${ERROR_MESSAGES.invalidThousandWonUnit}`);
    }
}

const isNotNumber = (number) => {
    if (isNaN(Number(number))) {
        throw new Error(`${ERROR_MESSAGES.prefix} ${ERROR_MESSAGES.invalidNumber}`);
    }
}

const underThousandValue = (money) => {
    if (Number(money) < OPTIONS.thousand) {
        throw new Error(`${ERROR_MESSAGES.prefix} ${ERROR_MESSAGES.invalidMoreThousand}`);
    }
}

const userInputAllCheck = (money) => {
    buyLottoBuyValueCheck(money);
    isNotNumber(money);
    underThousandValue(money);
}

export default userInputAllCheck;