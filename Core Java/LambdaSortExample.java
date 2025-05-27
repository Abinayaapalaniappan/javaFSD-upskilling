import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
public class LambdaSortExample {
    public static void main(String[] args) {
        List<String> fruits = new ArrayList<>();
        fruits.add("Charlie");
        fruits.add("Alice");
        fruits.add("Bob");
        fruits.add("Eve");
        fruits.add("David");
        System.out.println("Before sorting: " + fruits);
        Collections.sort(fruits, (fruit1, fruit2) -> fruit1.compareToIgnoreCase(fruit2));
        System.out.println("After sorting: " + fruits);
    }
}
