import { comma } from "../utils/comma.js";

export const PURCHASE_SIZE = (size) => {
  return `${size}개를 구매했습니다.`;
};

export const LOTTO_STAT = (prize, matchingCount) => {
  return `당첨 통계
---
3개 일치 (${comma(prize[0])}원) - ${matchingCount[0]}개
4개 일치 (${comma(prize[1])}원) - ${matchingCount[1]}개
5개 일치 (${comma(prize[2])}원) - ${matchingCount[2]}개
5개 일치, 보너스 볼 일치 (${comma(prize[4])}원) - ${matchingCount[4]}개
6개 일치 (${comma(prize[3])}원) - ${matchingCount[3]}개
`;
};

export const EARNING_RATE = (rate) => {
  return `총 수익률은 ${rate}%입니다.`;
};
