package lab;

public class lab13 {
	public static void main(String[] args) {
		int[][] arr2D = {
			{1,2,3,},
			{4,5,6,7},
			{8,9,}
		};
		// 1
		for(int[] arr: arr2D) {
			for(int n: arr) {
				System.out.print(n +" ");
			}
			System.out.println("");
		}
		// 2
		int sum = 0;
		for(int[] arr: arr2D) {
			sum += arr[arr.length-1];
		}
		System.out.println("\nSum of last column = " + sum);
	}
}
