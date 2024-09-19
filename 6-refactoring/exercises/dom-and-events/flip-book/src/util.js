
/**
 *
 */
export const reverseAndUpper = (event) => {
  const input = event.target.value;

  // execute core logic
  const upperCased = input.toUpperCase();
  const splitted = upperCased.split('');
  const reversed = splitted.reverse();
  const reversedUppercase = reversed.join('');

  return reversedUppercase;
};
