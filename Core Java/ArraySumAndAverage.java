import java.util.Scanner;
public class ArraySumAndAverage {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number of elements: ");
        int arraySize = scanner.nextInt();
        int[] elements = new int[arraySize];
        System.out.println("Enter " + arraySize + " numbers:");
        for (int i = 0; i < arraySize; i++) {
            elements[i] = scanner.nextInt();
        }
        int totalSum = 0;
        for (int element : elements) {
            totalSum += element;
        }
        double averageValue = (double) totalSum / arraySize;
        System.out.println("Sum: " + totalSum);
        System.out.println("Average: " + averageValue);
        scanner.close();
    }
}
