import java.util.Scanner;
public class EvenOrOddChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter an integer: ");
        int inputNumber = scanner.nextInt();
        if (inputNumber % 2 == 0) {
            System.out.println(inputNumber + " is even.");
        } else {
            System.out.println(inputNumber + " is odd.");
        }
        scanner.close();
    }
}
