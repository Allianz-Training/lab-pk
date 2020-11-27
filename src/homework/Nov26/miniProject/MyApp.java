package homework.Nov26.miniProject;

import homework.Nov26.miniProject.Page.MainPage;

public class MyApp {
	
	public static void main(String[] args) {
		Product product = new Product(1,"Iphone", 100000);
		Product product2 = new Product(2,"Samsung", 100000);
		
		State.getState().getProductManager().addProduct(product);
		State.getState().getProductManager().addProduct(product2);
		
		State.getState().setIsAdmin(true);
		MainPage mainPage = new MainPage();
		mainPage.show();
	}
}
