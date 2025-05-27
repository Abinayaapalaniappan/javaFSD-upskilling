import java.util.Scanner;
public class TryCatchExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        try {
            System.out.print("Enter the numerator: ");
            int dividend = scanner.nextInt();
            System.out.print("Enter the denominator: ");
            int divisor = scanner.nextInt();
            int quotient = dividend / divisor;
            System.out.println("Result: " + quotient);
        } catch (ArithmeticException e) {
            System.out.println("Error: Division by zero is not allowed.");
        }
        scanner.close();
    }
}
