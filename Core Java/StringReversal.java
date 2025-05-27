import java.util.Scanner;
public class StringReversal {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a string to reverse: ");
        String originalString = scanner.nextLine();
        StringBuilder reversedUsingBuilder = new StringBuilder(originalString).reverse();
        System.out.println("Reversed string (using StringBuilder): " + reversedUsingBuilder);
        String reversedUsingLoop = "";
        for (int i = originalString.length() - 1; i >= 0; i--) {
            reversedUsingLoop += originalString.charAt(i);
        }
        System.out.println("Reversed string (using loop): " + reversedUsingLoop);
        scanner.close();
    }
}
