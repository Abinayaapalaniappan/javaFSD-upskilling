import java.util.Scanner;
public class GradeCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter marks (0-100): ");
        int inputMarks = scanner.nextInt();
        if (inputMarks < 0 || inputMarks > 100) {
            System.out.println("Invalid marks! Please enter a value between 0 and 100.");
        } else {
            char calculatedGrade;
            if (inputMarks >= 90) {
                calculatedGrade = 'A';
            } else if (inputMarks >= 80) {
                calculatedGrade = 'B';
            } else if (inputMarks >= 70) {
                calculatedGrade = 'C';
            } else if (inputMarks >= 60) {
                calculatedGrade = 'D';
            } else {
                calculatedGrade = 'F';
            }
            System.out.println("Grade: " + calculatedGrade);
        }
        scanner.close();
    }
}
