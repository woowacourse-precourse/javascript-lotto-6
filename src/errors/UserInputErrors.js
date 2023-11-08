import GameError from './GameError.js';

export class UserInputError extends GameError {}
export class PurchasePriceInputError extends UserInputError {}
export class WinningNumbersInputError extends UserInputError {}
export class BonusNumberInputError extends UserInputError {}
