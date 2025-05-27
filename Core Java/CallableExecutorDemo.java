import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.*;
public class CallableExecutorDemo {
    public static void main(String[] args) {
        ExecutorService executorService = Executors.newFixedThreadPool(3);
        List<Future<String>> taskResults = new ArrayList<>();
        for (int taskNumber = 1; taskNumber <= 5; taskNumber++) {
            int currentTaskId = taskNumber;
            Callable<String> callableTask = () -> {
                // Simulate some computation or I/O
                Thread.sleep(1000);
                return "Result from Task " + currentTaskId;
            };
            taskResults.add(executorService.submit(callableTask));
        }
        for (Future<String> taskResult : taskResults) {
            try {
                String result = taskResult.get();  // blocking call until task completes
                System.out.println(result);
            } catch (InterruptedException | ExecutionException exception) {
                exception.printStackTrace();
            }
        }
        executorService.shutdown();
    }
}
