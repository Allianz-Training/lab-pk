package homework.Nov26.miniProject.Page;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

import homework.Nov26.miniProject.Cart;
import homework.Nov26.miniProject.Product;
import homework.Nov26.miniProject.ProductManager;
import homework.Nov26.miniProject.State;
import homework.Nov26.miniProject.Abstract.Page;

public class CheckoutPage extends Page {
	
	public CheckoutPage() {	}
	
	@Override
	public void show() {
		System.out.println("=========== Checkout ===========");
		Cart cart = State.getState().getShoppingCart();
		ProductManager products = State.getState().getProductManager();
		cart.showProducts();
		System.out.println("Type product Id to delete\nb. back\nc. confirm");
		String input = State.getState().getScanner().nextLine();
		
		switch (input) {
			case "b": {
				((Page) State.getState().getStack().pop()).show();
				break;
			}
			case "c": {
				if(!cart.getShoppingCart().isEmpty()) {
					System.out.println("Please enter address: ");
					String address = State.getState().getScanner().nextLine();
					State.getState().getScanner().close();
					confirm(address);
				}
				System.out.println("Thank you");
				break;
			}
			default: {
				if(isNumber(input)) {
					int id = Integer.parseInt(input);
					Product p = products.getProduct(id);
					if(cart.isContain(p)) {
						cart.deleteProduct(p);
					}else {
						System.out.println("Id not found, Please try again");
					}
				}
				show();
				break;
			}
		}
	}
	
	private void confirm(String address) {
		try {
		      File file = new File("src/address.txt");
		      FileWriter writer = new FileWriter(file, true);
		      BufferedWriter bw = new BufferedWriter(writer);
		      bw.write(address);
		      bw.newLine();
		      bw.close();
	    } catch (IOException e) {
		      System.out.println("An error occurred.");
		      e.printStackTrace();
	    }
	}
}
