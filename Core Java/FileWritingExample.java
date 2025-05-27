import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;
public class FileWritingExample {
    public static void main(String[] args) {
        Scanner inputScanner = new Scanner(System.in);
        System.out.print("Enter a string to write to the file: ");
        String textToWrite = inputScanner.nextLine();
        try {
            FileWriter fileWriter = new FileWriter("output.txt");
            fileWriter.write(textToWrite);
            fileWriter.close();
            System.out.println("Data has been written to output.txt");
        } catch (IOException e) {
            System.out.println("An error occurred while writing to the file.");
            e.printStackTrace();
        }
        inputScanner.close();
    }
}
