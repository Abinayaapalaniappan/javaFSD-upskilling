import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
public class FileReadingExample {
    public static void main(String[] args) {
        String targetFileName = "output.txt";
        try (BufferedReader bufferedReader = new BufferedReader(new FileReader(targetFileName))) {
            String currentLine;
            System.out.println("Contents of " + targetFileName + ":");
            while ((currentLine = bufferedReader.readLine()) != null) {
                System.out.println(currentLine);
            }
        } catch (IOException e) {
            System.out.println("An error occurred while reading the file.");
            e.printStackTrace();
        }
    }
}
