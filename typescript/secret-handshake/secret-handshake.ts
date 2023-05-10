export function commands(decimalNum: number): string[] {
  const binaryNum = decimalNum.toString(2);

  const handshake: string[] = [];

  if (binaryNum[binaryNum.length - 1] === "1") {
    handshake.push("wink");
  }
  if (binaryNum[binaryNum.length - 2] === "1") {
    handshake.push("double blink");
  }
  if (binaryNum[binaryNum.length - 3] === "1") {
    handshake.push("close your eyes");
  }
  if (binaryNum[binaryNum.length - 4] === "1") {
    handshake.push("jump");
  }
  if (binaryNum[binaryNum.length - 5] === "1") {
    handshake.reverse();
  }
  return handshake;
}
