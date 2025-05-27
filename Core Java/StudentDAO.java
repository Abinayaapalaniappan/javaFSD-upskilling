import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
public class StudentDAO {
    private static final String DB_URL = "jdbc:sqlite:students.db";
    // For MySQL, it would be like:
    // private static final String DB_URL = "jdbc:mysql://localhost:3306/your_database_name";
    // private static final String DB_USER = "your_username";
    // private static final String DB_PASSWORD = "your_password";
    public boolean addStudent(String studentName, int studentAge) {
        String insertSQL = "INSERT INTO students (name, age) VALUES (?, ?)";
        try (Connection connection = DriverManager.getConnection(DB_URL);
             PreparedStatement preparedStatement = connection.prepareStatement(insertSQL)) {
            preparedStatement.setString(1, studentName);
            preparedStatement.setInt(2, studentAge);
            int rowsAffected = preparedStatement.executeUpdate();
            return rowsAffected > 0;
        } catch (SQLException exception) {
            exception.printStackTrace();
            return false;
        }
    }
    public boolean modifyStudent(int studentId, String updatedName, int updatedAge) {
        String updateSQL = "UPDATE students SET name = ?, age = ? WHERE id = ?";
        try (Connection connection = DriverManager.getConnection(DB_URL);
             PreparedStatement preparedStatement = connection.prepareStatement(updateSQL)) {
            preparedStatement.setString(1, updatedName);
            preparedStatement.setInt(2, updatedAge);
            preparedStatement.setInt(3, studentId);
            int rowsAffected = preparedStatement.executeUpdate();
            return rowsAffected > 0;
        } catch (SQLException exception) {
            exception.printStackTrace();
            return false;
        }
    }
    /*
    private Connection getDBConnection() throws SQLException {
        return DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
    }
    */
}
public class Main {
    public static void main(String[] args) {
        StudentDAO studentDAO = new StudentDAO();
        boolean isInserted = studentDAO.addStudent("David", 21);
        System.out.println("Inserted: " + isInserted);
        boolean isUpdated = studentDAO.modifyStudent(2, "Robert", 23);
        System.out.println("Updated: " + isUpdated);
    }
}
