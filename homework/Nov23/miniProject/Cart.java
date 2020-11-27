package lab.Nov26.miniProject;

import java.util.HashMap;
import java.util.Map.Entry;

import lab.Nov26.miniProject.Interface.IManager;

public class Cart implements IManager {
	private HashMap<Product, Integer> shoppingCart = new HashMap<>();
	private double totalPrice;
	
	public Cart() {
		totalPrice = 0;
	}
	
	public HashMap<Product, Integer> getShoppingCart() {
		return shoppingCart;
	}
	
	@Override
	public void addProduct(Product product) {
		shoppingCart.computeIfAbsent(product, k -> 0);
		shoppingCart.computeIfPresent(product, (k, v) -> v + 1);
	}
	
	public double getTotalPrice() {
		totalPrice = 0;
		shoppingCart.forEach((k, v) -> {
			totalPrice += k.getPrice() * v;
		});
		return totalPrice;
	}

	@Override
	public void showProducts() {
		if(shoppingCart.isEmpty()) {
			System.out.println("Empty Cart");
		}
		shoppingCart.forEach((k, v) -> {
			System.out.println(k + " " + v);
		});
		System.out.println("Total price is " + getTotalPrice());
		System.out.println("");
	}

	@Override
	public void deleteProduct(Product product) {
		int amount = shoppingCart.get(product);
		amount--;
		if(amount <= 0) {
			shoppingCart.remove(product);
		} else {
			shoppingCart.computeIfPresent(product, (k,v) -> v-1);
		}
	}

	@Override
	public boolean isContain(Product product) {
		return shoppingCart.containsKey(product);
	}

}
