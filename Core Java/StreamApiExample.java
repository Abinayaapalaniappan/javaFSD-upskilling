import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
public class StreamApiExample {
    public static void main(String[] args) {
        List<Integer> ages = Arrays.asList(10, 15, 22, 33, 40, 55, 60);
        List<Integer> adultAges = ages.stream()
                                     .filter(age -> age % 2 == 0)
                                     .collect(Collectors.toList());
        System.out.println("Even numbers: " + adultAges);
    }
}
