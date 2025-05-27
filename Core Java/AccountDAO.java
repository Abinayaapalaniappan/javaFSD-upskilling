import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
public class AccountDAO {
    private static final String DB_URL = "jdbc:sqlite:bank.db";
    // For MySQL:
    // private static final String DB_URL = "jdbc:mysql://localhost:3306/your_database_name";
    // private static final String DB_USER = "your_username";
    // private static final String DB_PASSWORD = "your_password";
    public boolean transferFunds(int senderAccountId, int receiverAccountId, double transferAmount) {
        String debitQuery = "UPDATE accounts SET balance = balance - ? WHERE id = ? AND balance >= ?";
        String creditQuery = "UPDATE accounts SET balance = balance + ? WHERE id = ?";
        try (Connection connection = DriverManager.getConnection(DB_URL)) {
            connection.setAutoCommit(false);
            try (PreparedStatement debitStatement = connection.prepareStatement(debitQuery);
                 PreparedStatement creditStatement = connection.prepareStatement(creditQuery)) {
                debitStatement.setDouble(1, transferAmount);
                debitStatement.setInt(2, senderAccountId);
                debitStatement.setDouble(3, transferAmount);
                int debitResult = debitStatement.executeUpdate();
                if (debitResult == 0) {
                    connection.rollback();
                    System.out.println("Debit failed: insufficient funds or invalid sender account.");
                    return false;
                }
                creditStatement.setDouble(1, transferAmount);
                creditStatement.setInt(2, receiverAccountId);
                int creditResult = creditStatement.executeUpdate();
                if (creditResult == 0) {
                    connection.rollback();
                    System.out.println("Credit failed: invalid receiver account.");
                    return false;
                }
                connection.commit();
                System.out.println("Transfer completed successfully!");
                return true;
            } catch (SQLException sqlException) {
                connection.rollback();
                sqlException.printStackTrace();
                return false;
            } finally {
                connection.setAutoCommit(true); // reset autocommit
            }
        } catch (SQLException sqlException) {
            sqlException.printStackTrace();
            return false;
        }
    }
}
public class Main {
    public static void main(String[] args) {
        AccountDAO accountDAO = new AccountDAO();
        boolean transferStatus = accountDAO.transferFunds(1, 2, 200.00);
        System.out.println("Transfer result: " + transferStatus);
    }
}
