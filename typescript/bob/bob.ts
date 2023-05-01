export function hey(input: string): string {
  const trimmedInput = input.trim();
  const isQuestion = trimmedInput.endsWith("?");
  const isYelling =
    trimmedInput === trimmedInput.toUpperCase() && /[A-Z]/.test(trimmedInput);

  if (isQuestion && isYelling) {
    return "Calm down, I know what I'm doing!";
  } else if (isQuestion) {
    return "Sure.";
  } else if (isYelling) {
    return "Whoa, chill out!";
  } else if (!trimmedInput) {
    return "Fine. Be that way!";
  } else {
    return "Whatever.";
  }
}
