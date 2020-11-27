package lab.Nov26.miniProject.Page;

import java.util.Scanner;

import lab.Nov26.miniProject.Product;
import lab.Nov26.miniProject.ProductManager;
import lab.Nov26.miniProject.State;
import lab.Nov26.miniProject.Abstract.Page;

public class DeleteProductPage extends Page {

	public DeleteProductPage() {}

	@Override
	public void show() {
		ProductManager products = State.getState().getProductManager();
		products.showProducts();
		System.out.println("Type product Id to delete\nb. back");
		String input = State.getState().getScanner().next();
		switch (input) {
			case "b": {
				Page previousPage = (Page) State.getState().getStack().pop();
				previousPage.show();
				break;
			}
			default: {
				if (isNumber(input)) {
					int id = Integer.parseInt(input);
					Product p = products.getProductById(id);
					if (products.isContain(p)) {
						products.deleteProduct(p);
					} else {
						System.out.println("Id not found, Please try again");
					}
					show();
				}
				show();
				break;
			}
		}
	}
}
