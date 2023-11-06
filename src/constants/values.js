const LOTTO = { 
    MIN: 1,
    MAX: 45,
    LEN: 6,
  };
  
const AMOUNT = { 
    UNIT: 1000
};

const REWARD = {
    THREE: 5000,
    FOUR: 50000,
    FIVE: 1500000,
    FIVE_BONUS: 30000000,
    SIX: 2000000000,
};

const REWARD_ARRAY = [
    REWARD.SIX, 
    REWARD.FIVE_BONUS, 
    REWARD.FIVE, 
    REWARD.FOUR, 
    REWARD.THREE
]; 

const WIN_INDEX = { 
    FOUR: 3,
    FIVE: 2,
    FIVE_BONUS: 1,
    SIX: 0,
};

const WIN = {
    ARRAY: 5, 
    THREE: 3,
    FOUR: 4,
    FIVE: 5, 
    SIX: 6,
    IDX: 1, 
};

const CALCULATE = { 
    DECIMAL: 1,
    PERCENTAGE: 100,
};

export { LOTTO, AMOUNT, REWARD, REWARD_ARRAY, WIN_INDEX, WIN, CALCULATE };