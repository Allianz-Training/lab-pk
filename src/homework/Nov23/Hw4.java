package homework.Nov23;

import java.util.Scanner;

public class Hw4 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.print("Please enter number : ");
		int number = scanner.nextInt();
		for(int i = 1; i < 13; i++ ) {
			System.out.println(number + " x " + i + " = " + number*i);
		}
	}
}
