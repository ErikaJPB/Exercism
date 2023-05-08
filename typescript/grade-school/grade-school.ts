type Student = string;
type Roster = Record<number, Student[]>;

export class GradeSchool {
  private _roster: Roster;

  constructor() {
    this._roster = {};
  }

  add(name: Student, grade: number): void {
    for (const g in this._roster) {
      if (this._roster[g].includes(name)) {
        this._roster[g] = this._roster[g].filter((n) => n !== name);
      }
    }

    if (!this._roster[grade]) {
      this._roster[grade] = [];
    }
    this._roster[grade].push(name);
    this._roster[grade].sort();
  }

  grade(grade: number): Student[] {
    return this._roster[grade] ? [...this._roster[grade]] : [];
  }

  roster(): Roster {
    const sortedGrades = Object.keys(this._roster).sort(
      (a, b) => parseInt(a) - parseInt(b)
    );
    const result: Roster = {};
    for (const grade of sortedGrades) {
      result[parseInt(grade)] = [...this._roster[parseInt(grade)]];
    }
    return result;
  }
}
