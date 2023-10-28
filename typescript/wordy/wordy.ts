const operators: { [key: string]: string } = {
  plus: "+",
  minus: "-",
  "multiplied by": "*",
  "divided by": "/",
};
const operation = (a: number, op: string, b: number) => {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return 0;
  }
};

export function answer(question: string): number {
  const expr = question
    // Replacing words like "plus" and "minus" with corresponding operators
    // Splitting the question into words and remove empty strings, then skip the first two words (e.g., "What is")
    .replace(/plus|minus|multiplied by|divided by/g, (o) => operators[o])
    .split(/ |\?/)
    .filter(Boolean)
    .slice(2);

  // Checking if the expression contains only numbers and known operators
  if (
    !expr.every((e) => !isNaN(Number(e)) || ["+", "-", "*", "/"].includes(e))
  ) {
    throw new Error("Unknown operation");
  }

  // Creating a stack to evaluate the expression
  const stack: any[] = [];
  // Pushing the numbers onto the stack, and when three elements are on the stack, perform an operation
  for (const v of expr) {
    stack.push(isNaN(Number(v)) ? v : Number(v));

    if (stack.length === 3) {
      if (!isNaN(stack[0]) && isNaN(stack[1]) && !isNaN(stack[2])) {
        const b: number = stack.pop()!;
        const op: string = stack.pop()!;
        const a: number = stack.pop()!;

        // Performing the operation and push the result back onto the stack
        stack.push(operation(a, op, b));
      } else {
        throw Error("Syntax error");
      }
    }
  }

  // Ensuring there's only one element left on the stack, which is the final result
  if (stack.length !== 1) {
    throw Error("Syntax error");
  }

  return stack.pop()!;
}
