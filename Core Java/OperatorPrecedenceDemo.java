public class OperatorPrecedenceDemo {
    public static void main(String[] args) {
        int multiplicationBeforeAddition = 10 + 5 * 2;             
        int parenthesesFirst = (10 + 5) * 2;                        
        int mixedOperatorsLeftToRight = 20 / 4 + 3 * 2;            
        int parenthesesAffectDivision = 20 / (4 + 3) * 2;         
        System.out.println("10 + 5 * 2 = " + multiplicationBeforeAddition);
        System.out.println("(10 + 5) * 2 = " + parenthesesFirst);
        System.out.println("20 / 4 + 3 * 2 = " + mixedOperatorsLeftToRight);
        System.out.println("20 / (4 + 3) * 2 = " + parenthesesAffectDivision);
        System.out.println("\nExplanation:");
        System.out.println("In expression '10 + 5 * 2': multiplication (*) is evaluated before addition (+), so 5 * 2 = 10, then 10 + 10 = 20.");
        System.out.println("In '(10 + 5) * 2': parentheses force addition first, so 10 + 5 = 15, then 15 * 2 = 30.");
        System.out.println("In '20 / 4 + 3 * 2': division and multiplication have the same precedence, so evaluated left to right: 20 / 4 = 5, 3 * 2 = 6, then 5 + 6 = 11.");
        System.out.println("In '20 / (4 + 3) * 2': parentheses evaluated first (4 + 3 = 7), then 20 / 7 = 2 (integer division), then 2 * 2 = 4.");
    }
}
