export class Clock {
  private minutes: number;

  constructor(hours: number, minutes: number = 0) {
    this.minutes = (hours * 60 + minutes) % 1440;
    if (this.minutes < 0) {
      this.minutes += 1440;
    }
  }

  public toString(): string {
    const hours = Math.floor(this.minutes / 60);
    const minutes = this.minutes % 60;
    return `${this.formatNumber(hours)}:${this.formatNumber(minutes)}`;
  }

  public plus(minutes: number): Clock {
    return new Clock(0, this.minutes + minutes);
  }

  public minus(minutes: number): Clock {
    return this.plus(-minutes);
  }

  public equals(other: Clock): boolean {
    return this.minutes === other.minutes;
  }

  private formatNumber(number: number): string {
    return number < 10 ? `0${number}` : `${number}`;
  }
}
