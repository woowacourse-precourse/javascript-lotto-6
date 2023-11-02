import { MissionUtils } from "@woowacourse/mission-utils";

const results = (result) => {
  const a = Object.entries(result);
  for (let i = 0; i < a.length; i++) {
    console.log(a[i][0]);
    console.log(a[i][1]);
  }
};
export default results;
