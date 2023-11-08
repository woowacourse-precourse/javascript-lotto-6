import { RANK, OUTPUT_MESSAGE } from './constant';

export const Convert = {
  Convert_Winninglotto: (winninglotto) => {
    return [...winninglotto.split(',')].map(Number);
  },

  Convert_Profit: (prize, amount) => {
    return (prize / amount) * 100;
  },

  Convert_ResultMessage: (result) => {
    let FinalMessage = '';
    const Values = Object.values(RANK);
    for (let i = Values.length - 2; i >= 0; i--) {
      let commaNumber = Add_commaTonumber(Values[i].PRIZE);
      if (result.has(Values[i])) {
        FinalMessage += ''.concat(
          Combine_ResultMessage(
            Values[i].COUNT,
            commaNumber,
            result.get(Values[i]),
          ),
          '\n',
        );
        continue;
      }
      FinalMessage += ''.concat(
        Combine_ResultMessage(Values[i].COUNT, commaNumber, 0),
        '\n',
      );
    }
    return FinalMessage;
  },
};

export const getRankingBymatch = (matchcount, matchbonus) => {
  const Entries = Object.entries(RANK);

  for (let entry of Entries) {
    if (entry[1].COUNT == matchcount && entry[1].BONUS == matchbonus) {
      return entry[1];
    }
    if (entry[1].COUNT == 0) {
      return RANK.MISS;
    }
  }
};

const Add_commaTonumber = (number) => {
  return number.toLocaleString('ko-KR');
};

const Combine_ResultMessage = (count, prize, match) => {
  if (prize == Add_commaTonumber(RANK.SECOND.PRIZE)) {
    return `${count}${OUTPUT_MESSAGE.RESULT_HEAD}, ${OUTPUT_MESSAGE.RESULT_BONUS} (${prize}원) - ${match}개`;
  }
  return `${count}${OUTPUT_MESSAGE.RESULT_HEAD} (${prize}원) - ${match}개`;
};
