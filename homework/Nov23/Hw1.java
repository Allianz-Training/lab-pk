package homework;

public class Hw1 {
	public static void main(String[] args) {
		System.out.println("============ 1 ===========");
		draw1(2);
		draw1(3);
		draw1(4);
		System.out.println("============ 2 ===========");
		draw2(2);
		draw2(3);
		draw2(4);
		System.out.println("============ 3 ===========");
		draw3(2);
		draw3(3);
		draw3(4);
		System.out.println("============ 4 ===========");
		draw4(2);
		draw4(3);
		draw4(4);
		System.out.println("============ 5 ===========");
		draw5(2);
		draw5(3);
		draw5(4);
		System.out.println("============ 6 ===========");
		draw6(2);
		draw6(3);
		draw6(4);
		System.out.println("============ 7 ===========");
		draw7(2);
		draw7(3);
		draw7(4);
		System.out.println("============ 8 ===========");
		draw8(2);
		draw8(3);
		draw8(4);
	}
	
	public static void draw1(int n) {
		String str = "";
		for(int i=0; i<n; i++) {
			str += "*";
		}
		System.out.println(str);
	}
	
	public static void draw2(int n) {
		String str = "";
		for(int i = 0; i < n; i++) {
			str += "*";
		}
		String str2 = str;
		for(int i = 0; i < n-1; i++) {
			str += "\n" + str2;
		}
		System.out.println(str);
	}
	
	public static void draw3(int n) {
		String str = "";
		for(int i = 1; i <= n; i++) {
			str += i + "";
		}
		String str2 = str;
		for(int i = 0; i < n-1; i++) {
			str += "\n" + str2;
		}
		System.out.println(str);
	}
	
	public static void draw4(int n) {
		String str = "";
		for(int i = n; i > 0; i--) {
			str += i + "";
		}
		String str2 = str;
		for(int i = 0; i < n-1; i++) {
			str += "\n" + str2;
		}
		System.out.println(str);
	}
	
	public static void draw5(int n) {
		for(int i = 1; i <= n; i++) {
			for(int j = 1; j <= n; j++) {
				System.out.print(i);
			}
			System.out.println();
		}
	}
	
	public static void draw6(int n) {
		for(int i = n; i > 0; i--) {
			for(int j = n; j > 0; j--) {
				System.out.print(i);
			}
			System.out.println();
		}
	}
	
	public static void draw7(int n) {
		for(int i = 1; i <= n*n; i++) {
			System.out.print(i);
			if(i%n == 0) System.out.println("");
		}
	}
	
	public static void draw8(int n) {
		for(int i = n*n,j = 1; i > 0; i--, j++) {
			System.out.print(i);
			if(j%n == 0) System.out.println("");
		}
	}
	
	
}
