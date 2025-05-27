import java.util.List;
import java.util.stream.Collectors;
public class RecordExample {
    public record Person(String name, int age) {}
    public static void main(String[] args) {
        Person person1 = new Person("Alice", 30);
        Person person2 = new Person("Bob", 20);
        Person person3 = new Person("Charlie", 25);
        Person person4 = new Person("Diana", 35);
        System.out.println(person1);
        System.out.println(person2);
        List<Person> personList = List.of(person1, person2, person3, person4);
        List<Person> adults = personList.stream()
                                       .filter(p -> p.age() >= 25)
                                       .collect(Collectors.toList());
        System.out.println("\nPeople aged 25 and older:");
        adults.forEach(System.out::println);
    }
}
