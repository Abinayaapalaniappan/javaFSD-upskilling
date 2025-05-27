import java.util.Scanner;
public class SimpleCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the first number: ");
        double firstNumber = scanner.nextDouble();
        System.out.print("Enter the second number: ");
        double secondNumber = scanner.nextDouble();
        System.out.println("Choose an operation: +, -, *, /");
        char operation = scanner.next().charAt(0);
        double calculationResult;
        switch (operation) {
            case '+':
                calculationResult = firstNumber + secondNumber;
                System.out.println("Result: " + calculationResult);
                break;
            case '-':
                calculationResult = firstNumber - secondNumber;
                System.out.println("Result: " + calculationResult);
                break;
            case '*':
                calculationResult = firstNumber * secondNumber;
                System.out.println("Result: " + calculationResult);
                break;
            case '/':
                if (secondNumber != 0) {
                    calculationResult = firstNumber / secondNumber;
                    System.out.println("Result: " + calculationResult);
                } else {
                    System.out.println("Error: Division by zero is not allowed.");
                }
                break;
            default:
                System.out.println("Invalid operation.");
        }
        scanner.close();
    }
}
