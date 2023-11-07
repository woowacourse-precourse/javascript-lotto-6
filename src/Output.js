import { Console } from "@woowacourse/mission-utils";
export const Output = {
  showEnter() {
    Console.print(GAME_INFO.ENTER);
  },

  showError(error) {
    Console.print(error.message);
  },
};
