import java.util.Scanner;
public class FactorialCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int inputNumber = scanner.nextInt();
        if (inputNumber < 0) {
            System.out.println("Invalid input! Please enter a non-negative integer.");
        } else {
            long calculatedFactorial = 1; 
            for (int i = 1; i <= inputNumber; i++) {
                calculatedFactorial *= i;
            }
            System.out.println("Factorial of " + inputNumber + " is " + calculatedFactorial);
        }
        scanner.close();
    }
}
