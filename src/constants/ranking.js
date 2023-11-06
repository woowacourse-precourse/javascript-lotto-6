const NOT_RANKED = 0;

export const LOTTO_RANK = {
  1: { prize: 2000000000, numbers: [6, 0] },
  2: { prize: 30000000, numbers: [5, 1] },
  3: { prize: 1500000, numbers: [5, 0] },
  4: { prize: 50000, numbers: [4, 0] },
  5: { prize: 5000, numbers: [3, 0] },
  NOT_RANKED: { prize: 5000, numbers: [0, 0] },
};

export const CHECK_RANK = {
  "6,0": 1,
  "5,1": 2,
  "5,0": 3,
  "4,0": 4,
  "3,0": 5,
  "0,0": NOT_RANKED,
};
