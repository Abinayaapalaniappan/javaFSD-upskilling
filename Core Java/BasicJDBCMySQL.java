import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
public class BasicJDBCMySQL {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/your_database_name";
        String username = "your_username";
        String password = "your_password";
        String query = "SELECT * FROM students";
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            try (Connection conn = DriverManager.getConnection(url, username, password);
                 Statement stmt = conn.createStatement();
                 ResultSet rs = stmt.executeQuery(query)) {
                System.out.println("ID\tName\tAge");
                while (rs.next()) {
                    int id = rs.getInt("id"); 
                    String name = rs.getString("name");
                    int age = rs.getInt("age");
                    System.out.println(id + "\t" + name + "\t" + age);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
