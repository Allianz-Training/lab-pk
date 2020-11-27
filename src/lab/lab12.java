package lab;


public class lab12 {
	public static void main(String[] args) {
		String str1 = "You and Me";
		String str2 = " you and me ";
		System.out.println(str1.equalsIgnoreCase(str2));
		System.out.println(str1.contains("Me"));
		System.out.println("str1's length = " + str1.length());
		System.out.println("str2's length = " + str2.length());
		System.out.println(str1.substring(5));
		System.out.println(str2.trim());
		System.out.println(str2.toUpperCase());
		System.out.println(str2.toUpperCase().trim());
		lastToUpper("John doe");
		
	}
	public static void lastToUpper(String str) {
		char[] tmp = str.toCharArray();
		tmp[str.length()-1] -= 32;
		System.out.println(new String(tmp));
	}
}
