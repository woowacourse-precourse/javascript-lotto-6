import { MissionUtils } from "@woowacourse/mission-utils";

function mappingCount(len, bonus) {
  switch (len) {
    case 3:
      return 0;
    case 4:
      return 1;
    case 5:
      if (bonus) return 3;
      else return 2;
    case 6:
      return 4;
  }
}

export function checkWinning(userNumber, winNumber, bonusNumber) {
  const matching = userNumber.filter((e) => {
    winNumber.includes(e);
  });
  bonus = winNumber.includes(bonusNumber);
  return this.mappingCount(matching.length, bonus);
}

