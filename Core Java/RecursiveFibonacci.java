import java.util.Scanner;
public class RecursiveFibonacci {
    public static int fibonacci(int position) {
        if (position <= 0) {
            return 0; // Base case: F(0) = 0
        } else if (position == 1) {
            return 1; // Base case: F(1) = 1
        } else {
            return fibonacci(position - 1) + fibonacci(position - 2); // Recursive case
        }
    }
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a positive integer n to find the nth Fibonacci number: ");
        int position = scanner.nextInt();
        if (position < 0) {
            System.out.println("Invalid input! Please enter a positive integer.");
        } else {
            int fibNumber = fibonacci(position);
            System.out.println("Fibonacci number at position " + position + " is " + fibNumber);
        }
        scanner.close();
    }
}
