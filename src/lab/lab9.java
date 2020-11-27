package lab;

public class lab9 {
	public static void main(String[] args) {
		for (int count = 0; count <= 20; count++) {
			if (count == 11) {
				System.out.println("Count = " + count);
				continue;
			}
			System.out.println(count);
		}
	}
}
