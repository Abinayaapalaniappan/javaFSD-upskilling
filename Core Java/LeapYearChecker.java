import java.util.Scanner;
public class LeapYearChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a year: ");
        int inputYear = scanner.nextInt();
        if ((inputYear % 4 == 0 && inputYear % 100 != 0) || (inputYear % 400 == 0)) {
            System.out.println(inputYear + " is a leap year.");
        } else {
            System.out.println(inputYear + " is NOT a leap year.");
        }
        scanner.close();
    }
}
