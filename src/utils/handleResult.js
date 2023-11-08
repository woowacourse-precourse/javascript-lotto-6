export const handleResult = (result, count) => {
  switch (count) {
    case 3:
      result["3개 일치 (5,000원)"]++;
      break;
    case 4:
      result["4개 일치 (50,000원)"]++;
      break;
    case 5:
      result["5개 일치 (1,500,000원)"]++;
      break;
    case 5.5:
      result["5개 일치, 보너스 볼 일치 (30,000,000원)"]++;
      break;
    case 6:
      result["6개 일치 (2,000,000,000원)"]++;
      break;
  }
};
