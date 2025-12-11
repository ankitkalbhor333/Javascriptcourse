public class ReverseArray {
    public static void reverse(int[] arr) {
        int left = 0;
        int right = arr.length - 1;

        while (left < right) {
            // Swap elements
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;

            // Move pointers
            left++;
            right--;
        }
    }

    public static void main(String[] args) {
        int[] arr = {0, 1, 2, 5, 12};
        reverse(arr);

        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}
