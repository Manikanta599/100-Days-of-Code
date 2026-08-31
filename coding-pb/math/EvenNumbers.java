
import java.util.Scanner;

public class EvenNumbers {

    public static boolean checkEvnNumber(int n) {
        if (n % 2 == 0) {
            System.out.println("Even " + n);
            return true;
        }
        System.out.println("odd number");
        return false;
    }

    public static int largestOfIntegers(int[] numsArr) {
        int largest = 0;
        if (numsArr.length == 2) {
            largest = numsArr[0] > numsArr[1] ? numsArr[0] : numsArr[1];
        }
        return largest;
    }

    public static void swapTwoNumbers(int a, int b) {
        // int temp = a;
        // a = b;
        // b = temp;

        a = a + b;
        b = a - b;
        a = a - b;
        System.err.println("a: " + a + " b: " + b);
    }

    public static void sumOfDigits(int num) {
        // num%10 get the last digit
        // num/10 remove the last digit

        int sum = 0;
        while (num > 0) {
            int lastNum = num % 10;
            sum += lastNum;
            num = num / 10;
        }
        System.out.println("sum of digits : " + sum);
    }

    public static int countNoOfDigits(int num) {
        num = Math.abs(num);
        char[] arr = String.valueOf(num).toCharArray();
        System.out.println("lllllllllllll" + arr.length);
        int count = 0;
        if (num == 0) {
            count = 1;
        }
        while (num > 0) {
            num = num / 10;
            count++;
        }

        System.out.println("count of numbers: " + count);
        return count;
    }

    public static int reverseNum(int num) {
        // String s = "";
        // while (num > 0) {
        //     int lastNum = num % 10;
        //     s = s + lastNum;
        //     num = num / 10;
        // }
        // System.out.println("reverse " + s);

        // reverse = reverse * 10 + digit;
        int rev = 0;
        int sign = num > 0 ? 1 : -1;
        num = Math.abs(num);
        while (num > 0) {
            int lastNum = num % 10;
            rev = rev * 10 + lastNum;
            num = num / 10;
        }
        rev = sign * rev;
        System.out.println("reverse " + rev);
        return rev;
    }

    public static void palindromeOfNumber(int num) {
        // int sign = num > 0 ? 1 : -1;
        // num = Math.abs(num);

        int rev = 0;
        int orginal = num;

        while (num > 0) {
            int digit = num % 10;
            rev = rev * 10 + digit;
            num = num / 10;
        }
        if (rev == orginal) {
            System.out.println("palindrome :" + orginal);
        } else {
            System.out.println("Not a palindrome :" + orginal);
        }
    }

    public static int amstrongNum(int num) {
        int noOfDigits = countNoOfDigits(num);

        int totalSum = 0;
        int original = num;
        while (num > 0) {
            int digit = num % 10;

            // int powerSum = 1;
            // for (int i = 0; i < noOfDigits; i++) {
            //     powerSum *= digit;
            // }
            // totalSum = totalSum + powerSum;
            // powerSum = 0;
            totalSum = totalSum + (int) Math.pow(digit, noOfDigits);
            num = num / 10;
        }
        System.out.println("total Sum : " + totalSum);

        if (original == totalSum) {
            System.out.println("amstrong number: " + totalSum);
        } else {
            System.out.println("Not amstrong number: " + totalSum);
        }
        return noOfDigits;
    }

    public static boolean checkNumberIsPrime(int num) {

        if (num < 2) {
            System.out.println("Not a prime number");
            return false;
        }

        for (int i = 2; i * i <= num; i++) {
            if (num % i == 0) {
                // System.out.println("Not a prime number");
                return false;
            }
        }
        // System.out.println("It is a prime number");
        return true;
    }

    public static void primeNumbersInRange(int start, int end) {

        for (int i = start; i <= end; i++) {
            if (checkNumberIsPrime(i)) {
                System.out.println(i + " ");
            }
        }
    }

    public static void factorsOfANumber(int num) {
        for (int i = 1; i * i <= num; i++) {
            if (num % i == 0) {
                System.out.print(i + " ");

                if (i != num / i) {
                    System.out.print(num / i + " ");
                }
            }
        }
        System.out.println();
    }

    public static void main(String[] args) {
        try {
            Scanner sc = new Scanner(System.in);
            int num = sc.nextInt();
            // checkEvnNumber(n);
            // System.out.println("enter length");
            // int len = sc.nextInt();
            // System.out.println("enter elements: ");
            // int[] arr = new int[len];
            // for (int i = 0; i < len; i++) {
            //     int ele = sc.nextInt();
            //     arr[i] = ele;
            // }
            // System.out.println("largest " + largestOfIntegers(arr));
            // int a = 5;
            // int b = 9;
            // swapTwoNumbers(a, b);

            // int num = -124;
            // sumOfDigits(num);
            // countNoOfDigits(num);
            // reverseNum(num);
            // palindromeOfNumber(num);
            // amstrongNum(num);
            // checkNumberIsPrime(num);
            // int start = 10;
            // int end = 50;
            // primeNumbersInRange(start, end);
            factorsOfANumber(num);

        } catch (Exception e) {
            System.out.println(e.toString());
        }
    }
}
