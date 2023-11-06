import {MissionUtils} from "@woowacourse/mission-utils";

const utils = {
    async getInput(message) {
        return await MissionUtils.Console.readLineAsync(message)
    },
}