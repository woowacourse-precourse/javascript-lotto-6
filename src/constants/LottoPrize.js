const LOTTO_PRIZE = Object.freeze({
  FIRST: {
    CONDITION: {
      matchCount: 6,
      matchBonus: false,
    },
    TEXT: '6개 일치',
    PRIZE: '2,000,000,000원',
  },
  SECOND: {
    CONDITION: {
      matchCount: 5,
      matchBonus: true,
    },
    TEXT: '5개 일치, 보너스 볼 일치',
    PRIZE: '30,000,000원',
  },
  THIRD: {
    CONDITION: {
      matchCount: 5,
      matchBonus: false,
    },
    TEXT: '5개 일치',
    PRIZE: '1,500,000원',
  },
  FOURTH: {
    CONDITION: {
      matchCount: 4,
      matchBonus: false,
    },
    TEXT: '4개 일치',
    PRIZE: '50,000원',
  },
  FIFTH: {
    CONDITION: {
      matchCount: 3,
      matchBonus: false,
    },
    TEXT: '3개 일치',
    PRIZE: '5,000원',
  },
});

export default LOTTO_PRIZE;
