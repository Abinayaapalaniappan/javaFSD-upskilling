public class TypeCastingExample {
    public static void main(String[] args) {
        double originalDouble = 9.78;
        int truncatedInt = (int) originalDouble;
        System.out.println("Double value: " + originalDouble);
        System.out.println("Double cast to int: " + truncatedInt);
        int originalInt = 42;
        double widenedDouble = (double) originalInt;
        System.out.println("Int value: " + originalInt);
        System.out.println("Int cast to double: " + widenedDouble);
    }
}
