import {MissionUtils} from "@woowacourse/mission-utils";

const inputHandler = {

    async getInput(message) {
        return await MissionUtils.Console.readLineAsync(message)
    },
}

export default inputHandler;