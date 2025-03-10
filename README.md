# Quadratic Equation Calculator

This application solves quadratic equations of the form:

```
ax^2 + bx + c = 0
```

It supports both interactive mode (user input) and non-interactive mode (reading from a file).

## How to Build and Run

Clone the repository
```
git clone <repository_url>
cd <repository_name>
```
### Prerequisites
- Node.js installed on your system

### Running in Interactive Mode
To run the program in interactive mode, use:

```sh
node equation.js
```

You will be prompted to enter values for `a`, `b`, and `c`. The examples of valid coefficients: 1, -2, 4.5 

### Running in File Mode
To run the program with input from a file, use:

```sh
node equation.js <file_path>
```

Example:
```sh
node equation.js ./testing/test.txt
```

## File Format for Non-Interactive Mode
The input file should contain three numbers separated by single spaces:

```
1 -3 2
```

These values correspond to `a`, `b`, and `c` in the quadratic equation.

## Reverted Commit
[Reverted commit link](https://github.com/nikama-s/Quadratic-equation-calculator/commit/b4eb86e469f6d7f4e80f486fb926ee282ad67983)
