export const Convert = {
  Convert_Winninglotto: (winninglotto) => {
    return [...winninglotto.split(',')].map(Number);
  },
};
