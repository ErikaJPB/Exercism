export class Rational {
  numerator: number;
  denominator: number;

  constructor(numerator: number, denominator: number) {
    this.numerator = numerator;
    this.denominator = denominator;
  }

  add(r: Rational): Rational {
    const a = this.numerator * r.denominator + r.numerator * this.denominator;
    const b = this.denominator * r.denominator;
    return new Rational(a, b).reduce();
  }

  sub(r: Rational): Rational {
    const a = this.numerator * r.denominator - r.numerator * this.denominator;
    const b = this.denominator * r.denominator;
    return new Rational(a, b).reduce();
  }

  mul(r: Rational): Rational {
    const a = this.numerator * r.numerator;
    const b = this.denominator * r.denominator;
    return new Rational(a, b).reduce();
  }

  div(r: Rational): Rational {
    const a = this.numerator * r.denominator;
    const b = this.denominator * r.numerator;

    return new Rational(a, b).reduce();
  }

  abs(): Rational {
    const a = Math.abs(this.numerator);
    const b = Math.abs(this.denominator);
    return new Rational(a, b).reduce();
  }

  exprational(x: number): Rational {
    if (x >= 0) {
      return new Rational(
        Math.pow(this.numerator, x),
        Math.pow(this.denominator, x)
      );
    } else {
      return new Rational(
        Math.pow(this.denominator, Math.abs(x)),
        Math.pow(this.numerator, Math.abs(x))
      ).reduce();
    }
  }

  expreal(x: number): number {
    return Math.pow(x, this.decimal);
  }

  get decimal(): number {
    return this.numerator / this.denominator;
  }

  gcd(a: number, b: number): number {
    if (b === 0) {
      return a;
    }
    return this.gcd(b, a % b);
  }

  reduce(): Rational {
    const gcd = this.gcd(Math.abs(this.numerator), Math.abs(this.denominator));
    const newNumerator = this.numerator / gcd;
    const newDenominator = this.denominator / gcd;
    if (newDenominator < 0) {
      return new Rational(-newNumerator, -newDenominator);
    }
    return new Rational(newNumerator, newDenominator);
  }
}
