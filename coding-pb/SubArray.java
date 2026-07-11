
class SubArray {

    public static void subArrBruteForce(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            for (int j = i; j <arr.length; j++) {
                for (int k = i; k <= j; k++) {
                    System.err.print(arr[k]+" ");
                }
                System.out.println();
            }
        }
    }



    public static void main(String[] args) {
        int[] a = {1, 2, 3, 4};
        subArrBruteForce(a);
    }
}
