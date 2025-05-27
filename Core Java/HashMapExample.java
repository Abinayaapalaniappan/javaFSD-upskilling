import java.util.HashMap;
import java.util.Scanner;
public class HashMapExample {
    public static void main(String[] args) {
        Scanner inputScanner = new Scanner(System.in);
        HashMap<Integer, String> students = new HashMap<>();
        System.out.println("Enter student ID and name (type -1 to stop):");
        while (true) {
            System.out.print("Enter student ID: ");
            int studentId = inputScanner.nextInt();
            inputScanner.nextLine(); 
            if (studentId == -1) {
                break;
            }
            System.out.print("Enter student name: ");
            String studentName = inputScanner.nextLine();
            students.put(studentId, studentName);
        }
        System.out.print("\nEnter an ID to search for the student name: ");
        int queryId = inputScanner.nextInt();
        if (students.containsKey(queryId)) {
            System.out.println("Student Name: " + students.get(queryId));
        } else {
            System.out.println("No student found with ID " + queryId);
        }
        inputScanner.close();
    }
}
