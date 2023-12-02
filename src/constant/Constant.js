export const LOTTO_NUMBERS = Object.freeze({
  min: 1,
  max: 45,
  count: 6,
});

export const RANK = {
  first: {
    match: 6,
    bonus: false,
    prize: 2_000_000_000,
  },
  second: {
    match: 5,
    bonus: true,
    prize: 30_000_000,
  },
  third: {
    match: 5,
    bonus: false,
    prize: 1_5000_000,
  },
  fourth: {
    match: 4,
    bonus: false,
    prize: 50_000,
  },
  fifth: {
    match: 3,
    bonus: false,
    prize: 5_000,
  },
  noWin: {
    match: 0,
    bonus: false,
    prize: 0,
  },
};

export const RANK_TITLE = {
  first: 'first',
  second: 'second',
  third: 'third',
  fourth: 'fourth',
  fifth: 'fifth',
  noWin: 'noWin',
};

export const RANK_NAME = Object.keys(RANK);

export const MATCH_TO_RANK = RANK_NAME.reduce((matchToRank, rank) => {
  matchToRank[RANK[rank].match] = RANK_TITLE[rank];
  return matchToRank;
}, {});
