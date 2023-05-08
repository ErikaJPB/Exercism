export class Robot {
  private static readonly LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  private static readonly DIGITS = "0123456789";
  private static readonly TOTAL_NUMBER_OF_NAMES = 26 * 26 * 10 * 10 * 10;
  private static readonly USED_NAMES = new Set<string>();

  public _name: string;

  constructor() {
    this._name = this.generateName();
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    this._name = this.generateName();
    Robot.USED_NAMES.add(this._name);
  }

  private generateName(): string {
    let name = "";
    do {
      let letters = "";
      let digits = "";
      for (let i = 0; i < 2; i++) {
        letters += Robot.LETTERS.charAt(Math.floor(Math.random() * 26));
      }
      for (let i = 0; i < 3; i++) {
        digits += Robot.DIGITS.charAt(Math.floor(Math.random() * 10));
      }
      name = letters + digits;
    } while (Robot.USED_NAMES.has(name));
    Robot.USED_NAMES.add(name);
    return name;
  }
  public static releaseNames(): void {
    Robot.USED_NAMES.clear();
  }
}
