function randomLetter(): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const idx = Math.floor(Math.random() * alphabet.length);
  return alphabet[idx];
}

function randomKey(length: number): string {
  let key = "";
  for (let i = 0; i < length; i++) {
    key += randomLetter();
  }
  return key;
}

function shiftLetter(letter: string, amount: number): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const idx = alphabet.indexOf(letter);
  if (idx === -1) {
    return letter;
  }

  const shiftedIdx = (idx + amount + alphabet.length) % alphabet.length;
  return alphabet[shiftedIdx];
}

export class SimpleCipher {
  key: string;

  constructor(key?: string) {
    if (!key) {
      key = randomKey(100);
    }

    if (!this.isValidKey(key)) {
      throw new Error("Bad key");
    }

    this.key = key;
  }

  isValidKey(key: string): boolean {
    return /^[a-z]+$/.test(key);
  }

  encode(message: string): string {
    let encoded = "";

    for (let i = 0; i < message.length; i++) {
      const letter = message[i];
      const keyLetter = this.key[i % this.key.length];
      const amount = keyLetter.charCodeAt(0) - "a".charCodeAt(0);
      const shiftedLetter = shiftLetter(letter, amount);
      encoded += shiftedLetter;
    }
    return encoded;
  }

  decode(message: string): string {
    let decoded = "";
    for (let i = 0; i < message.length; i++) {
      const letter = message[i];
      const keyLetter = this.key[i % this.key.length];

      const amount = keyLetter.charCodeAt(0) - "a".charCodeAt(0);

      const shiftedLetter = shiftLetter(letter, -amount);
      decoded += shiftedLetter;
    }
    return decoded;
  }
}
