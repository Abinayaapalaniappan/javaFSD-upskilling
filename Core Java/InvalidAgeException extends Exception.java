import java.util.Scanner;
class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}
public class CustomExceptionExample {
    public static void main(String[] args) {
        Scanner inputScanner = new Scanner(System.in);
        System.out.print("Enter your age: ");
        int userAge = inputScanner.nextInt();
        try {
            checkAge(userAge);
            System.out.println("Access granted. You are eligible.");
        } catch (InvalidAgeException e) {
            System.out.println("Access denied: " + e.getMessage());
        }
        inputScanner.close();
    }
    public static void checkAge(int userAge) throws InvalidAgeException {
        if (userAge < 18) {
            throw new InvalidAgeException("You must be at least 18 years old.");
        }
    }
}
