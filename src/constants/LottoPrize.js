const LOTTO_PRIZE = Object.freeze({
  FIRST_PLACE: {
    CONDITION: '6개 일치',
    PRIZE: '2,000,000,000원',
  },
  SECOND_PLACE: {
    CONDITION: '5개 일치, 보너스 볼 일치',
    PRIZE: '30,000,000원',
  },
  THIRD_PLACE: {
    CONDITION: '5개 일치',
    PRIZE: '1,500,000원',
  },
  FOURTH_PLACE: {
    CONDITION: '4개 일치',
    PRIZE: '50,000원',
  },
  FIFTH_PLACE: {
    CONDITION: '3개 일치',
    PRIZE: '5,000원',
  },
});

export default LOTTO_PRIZE;
