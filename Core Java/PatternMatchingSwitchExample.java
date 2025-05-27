public class PatternMatchingSwitchExample {
    public static void checkObjectType(Object inputObj) {
        String outputMessage = switch (inputObj) {
            case Integer i -> "It's an Integer with value " + i;
            case String s -> "It's a String: \"" + s + "\"";
            case Double d -> "It's a Double with value " + d;
            case null -> "It's null";
            default -> "Unknown type: " + inputObj.getClass().getSimpleName();
        };
        System.out.println(outputMessage);
    }
    public static void main(String[] args) {
        checkObjectType(42);
        checkObjectType("Hello");
        checkObjectType(3.14);
        checkObjectType(true);  
        checkObjectType(null);
    }
}
