import java.util.Scanner;
import java.util.Random;
public class NumberGuessingGame {
    public static void main(String[] args) {
        Random random = new Random();
        Scanner scanner = new Scanner(System.in);
        int secretNumber = random.nextInt(100) + 1;  
        int userGuess = 0;
        System.out.println("Guess the number between 1 and 100:");
        while (userGuess != secretNumber) {
            System.out.print("Enter your guess: ");
            userGuess = scanner.nextInt();
            if (userGuess < secretNumber) {
                System.out.println("Too low! Try again.");
            } else if (userGuess > secretNumber) {
                System.out.println("Too high! Try again.");
            } else {
                System.out.println("Congratulations! You guessed the number correctly.");
            }
        }
        scanner.close();
    }
}
