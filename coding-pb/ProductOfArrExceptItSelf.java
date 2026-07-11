
import java.util.Arrays;

class ProductOfArrExceptItSelf {

    public static int[] bruteForceApproach(int[] arr) {
        int[] nArr = new int[arr.length];

        for (int i = 0; i < arr.length; i++) {
            int product = 1;

            for (int j = 0; j < arr.length; j++) {
                if (i != j) {
                    product *= arr[j];
                }
            }

            nArr[i] = product;
        }

        return nArr;
    }

    public static int[] optmized1(int[] arr) {

        int[] res = new int[arr.length];

        return res;
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4};

        int[] res = bruteForceApproach(arr);

        System.out.println(Arrays.toString(res));
    }
}
