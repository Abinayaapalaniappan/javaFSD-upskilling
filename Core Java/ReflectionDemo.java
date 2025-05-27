public class Person {
    private String name;

    public Person() {
        this.name = "John Doe";
    }
    public void sayHello() {
        System.out.println("Hello, my name is " + name);
    }
    public void setName(String name) {
        this.name = name;
    }
}
import java.lang.reflect.Method;
import java.lang.reflect.Parameter;
public class ReflectionDemo {
    public static void main(String[] args) {
        try {
            Class<?> personClass = Class.forName("Person");
            Object personInstance = personClass.getDeclaredConstructor().newInstance();
            Method[] declaredMethods = personClass.getDeclaredMethods();
            for (Method method : declaredMethods) {
                System.out.print("Method: " + method.getName() + "(");
                Parameter[] parameters = method.getParameters();
                for (int i = 0; i < parameters.length; i++) {
                    System.out.print(parameters[i].getType().getSimpleName() + " " + parameters[i].getName());
                    if (i < parameters.length - 1) System.out.print(", ");
                }
                System.out.println(")");
            }
            for (Method method : declaredMethods) {
                if (method.getName().equals("setName")) {
                    method.invoke(personInstance, "Alice");
                }
            }
            for (Method method : declaredMethods) {
                if (method.getName().equals("sayHello")) {
                    method.invoke(personInstance);
                }
            }

        } catch (Exception exception) {
            exception.printStackTrace();
        }
    }
}
