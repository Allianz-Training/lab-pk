package lab;

public class lab6 {
	public static void main(String[] args) {
		System.out.println("============== 1 ============");
		// 1
		int i = 1;
		while(i <= 10) {
			System.out.println(i);
			i++;
		}
		// 2
		System.out.println("============== 2 ============");
		int sum = 0;
		for(i=1; i <= 10; i++) {
			sum += i;
		}
		System.out.println(sum);
		// 3
		System.out.println("============== 3 ============");
		for(i=1; i<=100; i++) {
			if(i%12 == 0) {
				System.out.println(i);
			}
		}
		// 4
		System.out.println("============== 4 ============");
		int[] arr = {1,2,3,4,5};
		for (int num : arr) {
			System.out.println(num);
		}
		
	}
}
