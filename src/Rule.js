export const TICKET_CONFIGURATION = {
    startRange: 1,
    endRange: 45,
    quantity: 6,
}

export const WINNING_RANK = {
  first: {
    reward: 2_000_000_000,
    matchingNumberCount: 6,
    hasBonusNumber: false,
  },
  second: {
    reward: 30_000_000,
    matchingNumberCount: 5,
    hasBonusNumber: true,
  },
  third: {
    reward: 1_500_000,
    matchingNumberCount: 5,
    hasBonusNumber: false,
  },
  fourth: {
    reward: 50_000,
    matchingNumberCount: 4,
    hasBonusNumber: false,
  },
  fifth: {
    reward: 5_000,
    matchingNumberCount: 3,
    hasBonusNumber: false,
  },
};