public class Hello {
    public int square(int number) {
        return number * number;
    }
    public static void main(String[] args) {
        Hello helloInstance = new Hello();
        System.out.println(helloInstance.square(5));
    }
}
