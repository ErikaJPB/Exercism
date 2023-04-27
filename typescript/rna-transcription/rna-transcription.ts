export function toRna(dnaStrand: string): string {
  let rnaStrand = "";
  for (let i = 0; i < dnaStrand.length; i++) {
    switch (dnaStrand[i]) {
      case "G":
        rnaStrand += "C";
        break;
      case "C":
        rnaStrand += "G";
        break;
      case "T":
        rnaStrand += "A";
        break;
      case "A":
        rnaStrand += "U";
        break;
      default:
        throw new Error("Invalid input DNA.");
    }
  }
  return rnaStrand;
}
