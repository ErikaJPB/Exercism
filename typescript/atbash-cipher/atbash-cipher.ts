export function encode(plainText: string): string {
  const plain = "abcdefghijklmnopqrstuvwxyz";
  const cipher = "zyxwvutsrqponmlkjihgfedcba";
  let output = "";

  plainText = plainText.toLowerCase().replace(/[^a-z0-9]/g, "");

  for (let i = 0; i < plainText.length; i++) {
    const char = plainText.charAt(i);
    if (/[a-z]/.test(char)) {
      output += cipher.charAt(plain.indexOf(char));
    } else {
      output += char;
    }
  }

  output = output.replace(/(.{5})/g, "$1 ").trim();

  return output;
}

export function decode(cipherText: string): string {
  const plain = "abcdefghijklmnopqrstuvwxyz";
  const cipher = "zyxwvutsrqponmlkjihgfedcba";
  let output = "";

  cipherText = cipherText.toLowerCase().replace(/[^a-z0-9]/g, "");

  for (let i = 0; i < cipherText.length; i++) {
    const char = cipherText.charAt(i);
    if (/[a-z]/.test(char)) {
      output += plain.charAt(cipher.indexOf(char));
    } else {
      output += char;
    }
  }

  return output;
}
