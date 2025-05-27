public class VirtualThreadDemo {
    public static void main(String[] args) {
        long startTimeMillis = System.currentTimeMillis();
        for (int threadIndex = 0; threadIndex < 100_000; threadIndex++) {
            Thread.startVirtualThread(() -> {
                System.out.println("Hello from virtual thread " + Thread.currentThread());
            });
        }
        long endTimeMillis = System.currentTimeMillis();
        System.out.println("Virtual threads launched in " + (endTimeMillis - startTimeMillis) + " ms");
    }
}
public class PlatformThreadDemo {
    public static void main(String[] args) {
        long startTimeMillis = System.currentTimeMillis();
        for (int threadIndex = 0; threadIndex < 100_000; threadIndex++) {
            Thread platformThread = new Thread(() -> {
                System.out.println("Hello from platform thread " + Thread.currentThread());
            });
            platformThread.start();
        }
        long endTimeMillis = System.currentTimeMillis();
        System.out.println("Platform threads launched in " + (endTimeMillis - startTimeMillis) + " ms");
    }
}
