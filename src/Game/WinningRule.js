//기능4. 당첨 순위 구분
export function winningrule(arrary, bonusnum, i, result) {
  if (arrary[i].filter((x) => bonusnum['numbers'].includes(x)).length === 6) {
    result['1'] += 1;
  } else if (
    arrary[i].filter((x) => bonusnum['numbers'].includes(x)).length === 5 &&
    arrary[i].filter((x) => bonusnum['bonus'] === x).length > 0
  ) {
    result['2'] += 1;
  } else if (
    arrary[i].filter((x) => bonusnum['numbers'].includes(x)).length === 5
  ) {
    result['3'] += 1;
  } else if (
    arrary[i].filter((x) => bonusnum['numbers'].includes(x)).length === 4
  ) {
    result['4'] += 1;
  } else if (
    arrary[i].filter((x) => bonusnum['numbers'].includes(x)).length === 3
  ) {
    result['5'] += 1;
  }
  return result;
}
