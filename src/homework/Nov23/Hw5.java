package homework.Nov23;

public class Hw5 {
    public static void main(String[] args) {
        breakLine(1);
        draw18(2);
        draw18(3);
        draw18(4);
        breakLine(2);
        draw19(2);
        draw19(3);
        draw19(4);
        breakLine(3);
        draw20(2);
        draw20(3);
        draw20(4);
        breakLine(4);
        draw21(2);
        draw21(3);
        draw21(4);
        breakLine(5);
        draw22(2);
        draw22(3);
        draw22(4);
        breakLine(6);
        draw23(2);
        draw23(3);
        draw23(4);
        breakLine(7);
        draw24(2);
        draw24(3);
        draw24(4);
        breakLine(8);
        draw25(2);
        draw25(3);
        draw25(4);

    }
    public static void draw18(int n) {
        for(int i = 0; i < n; i++) {
            for (int j = 0; j < n-i-1; j++) {
                System.out.print("-");
            }
            for (int j = 0; j < i+1; j++) {
                System.out.print("*");
            }
            System.out.println("");
        }
    }

    public static void draw19(int n) {
        for(int i = n; i > 0; i--) {
            for (int j = 0; j < n-i; j++) {
                System.out.print("-");
            }
            for (int j = 0; j < i; j++) {
                System.out.print("*");
            }
            System.out.println("");
        }
    }

    public static void draw20(int n) {
        for(int i = 0; i < n; i++) {
            for (int j = 0; j < n-i-1; j++) {
                System.out.print("-");
            }
            for (int j = 0; j < i+1; j++) {
                System.out.print("*");
            }
            System.out.println("");
        }

        for (int i = 1; i < n; i++) {
            for (int j = 0; j < i; j++) {
                System.out.print("-");
            }
            for (int j = 0; j < n-i; j++) {
                System.out.print("*");
            }
            System.out.println("");
        }
    }

    public static void draw21(int n) {
        int number = 1;
        for(int i = 0; i < n; i++) {
            for (int j = 0; j < n-i-1; j++) {
                System.out.print("-");
            }
            for (int j = 0; j < i+1; j++) {
                System.out.print(number++);
            }
            System.out.println("");
        }

        for (int i = 1; i < n; i++) {
            for (int j = 0; j < i; j++) {
                System.out.print("-");
            }
            for (int j = 0; j < n-i; j++) {
                System.out.print(number++);
            }
            System.out.println("");
        }
    }

    public static void draw22(int n) {
        for (int i = 1; i < n+1; i++) {
            for (int j = 0; j < n-i; j++) {
                System.out.print("-");
            }
            for (int j = 0; j < 2 * i - 1; j++) {
                System.out.print("*");
            }
            for (int j = 0; j < n-i ; j++) {
                System.out.print("-");
            }
            System.out.println("");
        }
    }

    public static void draw23(int n) {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < i; j++) {
                System.out.print("-");
            }
            for (int j = 1; j < 2*(n-i); j++) {
                System.out.print("*");
            }
            for (int j = 0; j < i ; j++) {
                System.out.print("-");
            }
            System.out.println("");
        }
    }

    public static void draw24(int n) {
        // top shape
        for (int i = 1; i < n+1; i++) {
            for (int j = 0; j < n-i; j++) {
                System.out.print("-");
            }
            for (int j = 0; j < 2 * i - 1; j++) {
                System.out.print("*");
            }
            for (int j = 0; j < n-i ; j++) {
                System.out.print("-");
            }
            System.out.println("");
        }
        // bottom shape
        for (int i = 1; i < n; i++) {
            for (int j = 0; j < i; j++) {
                System.out.print("-");
            }
            for (int j = 1; j < 2*(n-i); j++) {
                System.out.print("*");
            }
            for (int j = 0; j < i ; j++) {
                System.out.print("-");
            }
            System.out.println("");
        }
    }

    public static void draw25(int n) {
        int number = 1;
        for (int i = 1; i < n+1; i++) {
            for (int j = 0; j < n-i; j++) {
                System.out.print("-");
            }
            for (int j = 0; j < 2 * i - 1; j++) {
                System.out.print(number++);
            }
            for (int j = 0; j < n-i ; j++) {
                System.out.print("-");
            }
            System.out.println("");
        }

        for (int i = 1; i < n; i++) {
            for (int j = 0; j < i; j++) {
                System.out.print("-");
            }
            for (int j = 1; j < 2*(n-i); j++) {
                System.out.print(number++);
            }
            for (int j = 0; j < i ; j++) {
                System.out.print("-");
            }
            System.out.println("");
        }
    }

    public static void breakLine(int num) {
        System.out.println("================= " + num + " =================");
    }
}
