package homework.Nov23;

public class Hw3 {
    public static void main(String[] args) {
        breakLine(1);
        draw9(2);
		draw9(3);
		draw9(4);
        breakLine(2);
		draw10(2);
		draw10(3);
		draw10(4);
        breakLine(3);
		draw11(2);
		draw11(3);
		draw11(4);
        breakLine(4);
		draw12(2);
		draw12(3);
		draw12(4);
        breakLine(5);
		draw13(2);
		draw13(3);
		draw13(4);
        breakLine(6);
        draw14(2);
        draw14(3);
        draw14(4);
        breakLine(7);
        draw15(2);
        draw15(3);
        draw15(4);
        breakLine(8);
        draw16(2);
        draw16(3);
        draw16(4);
        breakLine(9);
        draw17(2);
        draw17(3);
        draw17(4);
    }

    public static void draw9(int n) {
		for(int i = 0; i < n; i++) {
			System.out.println(i*2);
		}
	}
	
	public static void draw10(int n) {
		for(int i = 0; i < n; i++) {
			System.out.println((i+1)*2);
		}
	}
	
	public static void draw11(int n) {
		for(int i = 1; i <= n; i++) {
			for(int j = 1; j <= n; j++) {
				System.out.print(j*i); 
			}
			System.out.println("");
		}
	}
	
	public static void draw12(int n) {
		for(int i = 0; i < n; i ++) {
			for(int j = 0; j < n; j++) {
				if(j==i) System.out.print("-");
				else System.out.print("*");
			}
			System.out.println("");
		}
	}
	
	public static void draw13(int n) {
		for(int i = n; i > 0; i --) {
			for(int j = 1; j <= n; j++) {
				if(j==i) System.out.print("-");
				else System.out.print("*");
			}
			System.out.println("");
		}
	}

    public static void draw14(int n) {
        for(int i = 0; i < n; i ++) {
            for(int j = 0; j < i+1 ; j++) {
                System.out.print("*");
            }
            for(int k = 0; k < n-i-1; k++) {
                System.out.print("-");
            }
            System.out.println("");
        }
    }

    public static void draw15(int n) {
        for(int i = n; i > 0; i --) {
            for(int j = 0; j < i ; j++) {
                System.out.print("*");
            }
            for(int k = 0; k < n-i; k++) {
                System.out.print("-");
            }
            System.out.println("");
        }
    }

    public static void draw16(int n) {
        // top shape
        for(int i = 0; i < n; i ++) {
            for(int j = 0; j < i+1 ; j++) {
                System.out.print("*");
            }
            for(int k = 0; k < n-i-1; k++) {
                System.out.print("-");
            }
            System.out.println("");
        }
        // bottom shape
        for(int i = n-1; i > 0; i --) {
            for(int j = 0; j < i ; j++) {
                System.out.print("*");
            }
            for(int k = 0; k < n-i; k++) {
                System.out.print("-");
            }
            System.out.println("");
        }
    }

    public static void draw17(int n) {
        // top shape
        for(int i = 0; i < n; i ++) {
            for(int j = 0; j < i+1 ; j++) {
                System.out.print(i+1);
            }
            for(int k = 0; k < n-i-1; k++) {
                System.out.print("-");
            }
            System.out.println("");
        }
        // bottom shape
        for(int i = n-1; i > 0; i --) {
            for(int j = 0; j < i ; j++) {
                System.out.print(i);
            }
            for(int k = 0; k < n-i; k++) {
                System.out.print("-");
            }
            System.out.println("");
        }
    }

    public static void breakLine(int num) {
        System.out.println("================= " + num + " =================");
    }

}
