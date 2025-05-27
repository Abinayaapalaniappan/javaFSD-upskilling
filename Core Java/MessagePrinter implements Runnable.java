class MessagePrinter implements Runnable {
    private String text;
    private int repeatCount;
    public MessagePrinter(String text, int repeatCount) {
        this.text = text;
        this.repeatCount = repeatCount;
    }
    public void run() {
        for (int i = 1; i <= repeatCount; i++) {
            System.out.println(Thread.currentThread().getName() + ": " + text + " (" + i + ")");
            try {
                Thread.sleep(500);  
            } catch (InterruptedException e) {
                System.out.println("Thread interrupted");
            }
        }
    }
}
public class ThreadExample {
    public static void main(String[] args) {
        Runnable task1 = new MessagePrinter("Hello from Thread 1", 5);
        Runnable task2 = new MessagePrinter("Hello from Thread 2", 5);
        Thread workerThread1 = new Thread(task1, "Thread-1");
        Thread workerThread2 = new Thread(task2, "Thread-2");
        workerThread1.start();
        workerThread2.start();
    }
}
