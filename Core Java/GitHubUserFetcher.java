import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
public class GitHubUserFetcher {
    public static void main(String[] args) {
        String username = "octocat"; 
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://api.github.com/users/" + username))
                .GET()
                .build();
        try {
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            System.out.println("Status Code: " + response.statusCode());
            System.out.println("Response Body:");
            System.out.println(response.body());
            ObjectMapper mapper = new ObjectMapper();
            JsonNode jsonNode = mapper.readTree(response.body());
            System.out.println("\nParsed JSON:");
            System.out.println("Login: " + jsonNode.get("login").asText());
            System.out.println("Name: " + jsonNode.get("name").asText());
            System.out.println("Public Repos: " + jsonNode.get("public_repos").asInt());
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }
}
