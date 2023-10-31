export class List {
  // An array to store the elements of the list.
  values: any[];

  // Constructor to initialize the list with values.
  constructor(...values: any[]) {
    this.values = values;
  }

  // Static method to create a new List with the provided values.
  public static create(...values: unknown[]): List {
    // Do *not* construct any array literal ([]) in your solution.
    // Do *not* construct any arrays through new Array in your solution.
    // DO *not* use any of the Array.prototype methods in your solution.
    // You may use the destructuring and spreading (...) syntax from Iterable.
    return new List(...values);
  }

  // Append the elements of another list to this list.
  public append(list: List): List {
    return new List(...this.values, ...list.values);
  }

  // Concatenate multiple lists into a new list.
  public concat(list: List): List {
    for (let value of list.values) {
      this.values = [...this.values, ...value.values];
    }
    return this;
  }

  // Get the length (number of elements) of the list.
  public length(): number {
    return this.values.length;
  }

  // Reverse the elements in the list.
  public reverse(): List {
    let result = new List();

    for (let value of this.values) {
      result.values = [value, ...result.values];
    }

    return result;
  }

  // Execute a callback function for each element in the list.
  public forEach(callback: (value: any) => void): void {
    for (const value of this.values) {
      callback(value);
    }
  }

  // Filter elements in the list based on a predicate.
  public filter<T>(callback: (value: T) => boolean): List {
    let list = new List();
    for (const value of this.values) {
      if (callback(value)) {
        list.values = [...list.values, value];
      }
    }
    return list;
  }

  // Map each element to a new value using a transformation function.
  public map<T>(callback: (value: T) => any): List {
    let list = new List();
    for (const value of this.values) {
      list.values = [...list.values, callback(value)];
    }
    return list;
  }

  // Fold (reduce) the list from the left using an accumulator and a binary function.
  public foldl<T, U>(callback: (acc: T, value: U) => any, initial: any): any {
    let result = initial;
    for (const value of this.values) {
      result = callback(result, value);
    }
    return result;
  }

  // Fold (reduce) the list from the right using an accumulator and a binary function.
  public foldr<T, U>(callback: (acc: T, value: U) => any, initial: any): any {
    let result = initial;
    for (let i = this.values.length - 1; i >= 0; i--) {
      result = callback(result, this.values[i]);
    }
    return result;
  }
}
