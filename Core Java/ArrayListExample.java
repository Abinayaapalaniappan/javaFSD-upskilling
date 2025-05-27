import java.util.ArrayList;
import java.util.Scanner;
public class ArrayListExample {
    public static void main(String[] args) {
        Scanner inputScanner = new Scanner(System.in);
        ArrayList<String> namesList = new ArrayList<>();
        System.out.println("Enter student names (type 'done' to finish):");
        while (true) {
            System.out.print("Enter name: ");
            String enteredName = inputScanner.nextLine();
            if (enteredName.equalsIgnoreCase("done")) {
                break;
            }
            namesList.add(enteredName);
        }
        System.out.println("\nList of student names:");
        for (String studentName : namesList) {
            System.out.println(studentName);
        }
        inputScanner.close();
    }
}
