import { OUTPUT_MESSAGE } from "../constatns/message.js"
import { print } from "../utils.js"

export const printAttempt = (attempt) => {
  print(`\n${attempt + OUTPUT_MESSAGE.ATTEMPT}`)
}

export const printRandomNumberArray = (array) => {
  array.forEach((numbers) => {
    print(numbers);
  })
}