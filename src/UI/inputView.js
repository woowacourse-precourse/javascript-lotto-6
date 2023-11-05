import { Console } from "@woowacourse/mission-utils";

export async function readUserInput() {
  return await Console.readLineAsync();
}
