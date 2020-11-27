package homework.Nov26.miniProject.Page;

import homework.Nov26.miniProject.Product;
import homework.Nov26.miniProject.ProductManager;
import homework.Nov26.miniProject.State;
import homework.Nov26.miniProject.Abstract.Page;

public class ProductListPage extends Page {
	
	public ProductListPage() {}

	@Override
	public void show() {
		ProductManager products = State.getState().getProductManager();
		products.showProducts();
		System.out.println("Type product Id to buy\nb. back\nc. checkout");
		String input = State.getState().getScanner().next();
		
		switch (input) {
			case "b": {
				Page previousPage = (Page) State.getState().getStack().pop();
				previousPage.show();
				break;
			}
			case "c": {
				State.getState().getStack().push(this);
				new CheckoutPage().show();
				break;
			}
			default: {
				if(isNumber(input)) {
					int id = Integer.parseInt(input);
					Product p = products.getProduct(id);
					if(products.isContain(p)) {
						State.getState().getShoppingCart().addProduct(p);
					}
					else {
						System.out.println("Id not found, Please try again");
					}
				}
				show();
				break;
			}
		}
	}
	
}
