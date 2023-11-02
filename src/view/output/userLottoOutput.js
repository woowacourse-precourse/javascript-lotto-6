import { Console } from "@woowacourse/mission-utils"

const userLottoOutput = (numbers) => {
    numbers.forEach(value => {
        Console.print(value);
    });
}

export default userLottoOutput;