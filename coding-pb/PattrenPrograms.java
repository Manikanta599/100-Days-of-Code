
import java.util.Scanner;

public class PattrenPrograms {

    public static void rightAngleTriangleBruteForce(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*" + " ");
            }
            System.out.println();
        }
    }

    public static void rightAngleTriangleOpt(int n) {
        String row = "*" + " ";
        for (int i = 1; i <= n; i++) {
            System.out.println(row);
            row += "*" + " ";
        }
    }

    public static void leftAngleTriangle(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            for (int k = 1; k <= i; k++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        // rightAngleTriangleBruteForce(num);
        // rightAngleTriangleOpt(num);
        leftAngleTriangle(num);
    }
}
