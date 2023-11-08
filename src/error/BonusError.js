import ERROR from '../constants/Error';
import GAME from '../constants/Game';

function checkBonus(bonus) {
    if (bonus < GAME.LOTTO_MIN || bonus > GAME.LOTTO_MAX) {
        throw new Error(ERROR.RANGE);
    }

    if (isNaN(bonus)) {
        throw new Error(ERROR.IS_NAN);
    }
}

export default checkBonus;