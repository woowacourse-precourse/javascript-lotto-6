import ValidationError from './ValidationError.js';

/**
 * @param {string} message
 * @throws {ValidationError}
 */
export default function handleValidationError(message) {
  throw new ValidationError(message);
}
