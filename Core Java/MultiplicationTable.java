import java.util.Scanner;
public class MultiplicationTable {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number to print its multiplication table: ");
        int inputNumber = scanner.nextInt();
        for (int i = 1; i <= 10; i++) {
            System.out.println(inputNumber + " x " + i + " = " + (inputNumber * i));
        }
        scanner.close();
    }
}
