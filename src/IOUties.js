import { Console } from "@woowacourse/mission-utils";

class IOUtils {
    static async input(message) {
        return await Console.readLineAsync(message);
    }

    static output(message) {
        Console.print(message);
    }
}

export default IOUtils;