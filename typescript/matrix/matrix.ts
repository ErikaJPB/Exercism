export class Matrix {
  private _rows: number[][];

  constructor(matrixString: string) {
    // splitting the input string into an array of rows.
    const rowsString: string[] = matrixString.trim().split("\n");

    // converting each row string into an array of numbers.
    this._rows = rowsString.map((rowString: string) => {
      return rowString.split(" ").map((numString: string) => {
        return parseInt(numString);
      });
    });
  }

  get rows(): number[][] {
    return this._rows;
  }

  get columns(): number[][] {
    // creating an array of columns by mapping over each row.
    return this._rows[0].map((_, colIndex) =>
      this._rows.map((row) => row[colIndex])
    );
  }
}
