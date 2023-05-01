export function isPangram(sentence: string): boolean {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const lowerCaseSentence = sentence.toLocaleLowerCase();

  for (let character of alphabet) {
    if (!lowerCaseSentence.includes(character)) {
      return false;
    }
  }
  return true;
}
