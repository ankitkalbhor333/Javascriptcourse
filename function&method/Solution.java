class Solution {
    public void reverseArray(int arr[], int d) {
       int n=arr.length;
      for(int i=0;i<d;i++){
int temp=arr[0];
for(int j=1;j<n;j++){
arr[j-1]=arr[j];
}
arr[n-1]=temp;
      }
       
    }
    public static void main(String[] args){
        int [] arr={1,2,3,4,5,6,7,8,9};
        Solution obj=new Solution();
        
        obj.reverseArray(arr,2);
        for(int num:arr){
            System.out.println(num+ " ");
        }
    }
}