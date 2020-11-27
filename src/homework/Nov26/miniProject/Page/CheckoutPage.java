package homework.Nov26.miniProject.Page;

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
		Cart cart = State.getState().getShoppingCart();
		ProductManager products = State.getState().getProductManager();
		cart.showProducts();
		System.out.println("Type product Id to delete, b: back,  c: checkout");
		String input = State.getState().getScanner().next();
		
		switch (input) {
			case "b": {
				Page previousPage = (Page) State.getState().getStack().pop();
				previousPage.show();
				break;
			}
			case "c": {
				System.out.println("Please enter address: ");
				String address = State.getState().getScanner().next();
				State.getState().getScanner().close();
				confirm(address);
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
		      FileWriter writer = null;
		      if (file.createNewFile()) {
		    	  writer = new FileWriter(file.getName());
		      } 
		      else {
		    	  writer = new FileWriter(file.getName());
		      }
		      writer.write(address + "\n");
		      writer.close();
	    } catch (IOException e) {
		      System.out.println("An error occurred.");
		      e.printStackTrace();
	    }
	}
}
