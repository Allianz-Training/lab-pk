package homework.Nov26.miniProject.Page;

import java.util.Scanner;

import homework.Nov26.miniProject.Product;
import homework.Nov26.miniProject.ProductManager;
import homework.Nov26.miniProject.State;
import homework.Nov26.miniProject.Abstract.Page;

public class AddProductPage extends Page {
	
	public AddProductPage() {}

	@Override
	public void show() {
		ProductManager products = State.getState().getProductManager();
		products.showProducts();
		
		Scanner scanner = State.getState().getScanner();
		int id = products.getSize()+1;
		
		System.out.print("Please enter product name: ");
		String title = scanner.next();
			
		System.out.print("Please enter product price: ");
		long price = scanner.nextLong();
		
		Product newProduct = new Product(id, title, price);
		products.addProduct(newProduct);
		products.showProducts();
		((Page) State.getState().getStack().pop()).show();
	}
	
}
