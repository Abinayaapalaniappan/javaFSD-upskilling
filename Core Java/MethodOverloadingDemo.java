public class MethodOverloadingDemo {
    public static int add(int num1, int num2) {
        return num1 + num2;
    }
    public static double add(double num1, double num2) {
        return num1 + num2;
    }
    public static int add(int num1, int num2, int num3) {
        return num1 + num2 + num3;
    }
    public static void main(String[] args) {
        int sumTwoInts = add(5, 10);
        double sumTwoDoubles = add(3.5, 2.7);
        int sumThreeInts = add(1, 2, 3);
        System.out.println("Sum of two integers (5 + 10): " + sumTwoInts);
        System.out.println("Sum of two doubl
