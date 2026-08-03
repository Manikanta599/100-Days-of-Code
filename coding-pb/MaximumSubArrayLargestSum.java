
public class MaximumSubArrayLargestSum {

    public static int maxSubArrayBruteForce(int[] arr) {
        int maxSum = 0;
        int len = arr.length;
        for (int i = 0; i < len; i++) {
            for (int j = i; j < len; j++) {
                int _s = 0;
                for (int k = i; k <= j; k++) {
                    _s += arr[k];
                }
                if (_s > maxSum) {
                    maxSum = _s;
                }
            }
        }

        return maxSum;
    }

    public static void main(String[] args) {
        int[] arr = {};
        System.out.println(".()" + maxSubArrayBruteForce(arr));
    }
}
