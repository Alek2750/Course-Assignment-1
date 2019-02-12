package calculator;

interface ICalculator {
  /**
   * Adds two numbers
   * @param n1 The first number
   * @param n2 Then second number
   * @return the sum of n1+n2
   */
  int add(int n1, int n2);
  /**
   * Subtracts two numbers
   * @param n1 The first number
   * @param n2 Then second number
   * @return n1 - n2
   */
  int sub(int n1, int n2);
  int mul(int n1, int n2);
  int div(int n1, int n2) throws ArithmeticException;
}