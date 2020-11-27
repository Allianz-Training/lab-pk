package homework.Nov23;


public class Hw2 {
	public static void main(String[] args) {
		String[][] table = {
				{"1", "2", "3"},
				{"4", "5", "6"},
				{"7", "8", "9"},
		};
		multiplyTable(table);
	}
	
	public static void multiplyTable(String[][] arr) {
		for(int i = 0; i < arr.length; i++) {
			for(int j = 0; j < arr[i].length; j ++) {
				if(j == arr[i].length-1) {					
					System.out.print(Integer.parseInt(arr[i][j])*2 + "\n");
				} else {					
					System.out.print(Integer.parseInt(arr[i][j])*2 + ", ");
				}
			}
		}
	}
}
