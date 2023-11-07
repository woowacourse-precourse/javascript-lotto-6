import { MissionUtils } from "@woowacourse/mission-utils";

export const getUserInput = async (command) => {
  try {
    return await MissionUtils.Console.readLineAsync(command);
  } catch (error) {
    throw new Error(["ERROR"]);
  }
};
