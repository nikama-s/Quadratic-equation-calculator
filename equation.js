function solveQuadraticEquation(a, b, c) {
  if (a === 0) {
    throw new Error("Error. a cannot be 0");
  }

  const D = b * b - 4 * a * c;
  console.log(`Equation is: (${a}) x^2 + (${b}) x + (${c}) = 0`);

  if (D > 0) {
    const x1 = (-b + Math.sqrt(D)) / (2 * a);
    const x2 = (-b - Math.sqrt(D)) / (2 * a);

    console.log("There are 2 roots");
    console.log(`x1 = ${x1}`);
    console.log(`x2 = ${x2}`);
  } else if (D === 0) {
    const x1 = -b / (2 * a);

    console.log("There are 1 roots");
    console.log(`x1 = ${x1}`);
  } else {
    console.log("There are 0 roots");
  }
}

solveQuadraticEquation(1, -3, 2);
