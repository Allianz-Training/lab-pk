package homework.Nov26.miniProject;

import homework.Nov26.miniProject.Interface.IManager;

import java.util.ArrayList;
import java.util.List;

public class ProductManager implements IManager {
	
	private final List<Product> products;
	
	public ProductManager() {
		products = new ArrayList<>();
	}
	
	public void addProduct(Product product) {
		products.add(product);
	}
	
	public int getSize() {
		return products.size();
	}
	
	public Product getProduct(int id) {
		for(Product p: products) {
			if(p.getId() == id) {
				return p;
			}
		}
		
		return null; 
	}
	
	public void showProducts() {
		if(products.isEmpty()) {
			System.out.println("Empty List");
		} else {
			System.out.println("=========== Product List ===========");
		}
		for(Product product: products) {
			System.out.println(product);
		}
		System.out.println("");
	}

	@Override
	public void deleteProduct(Product product) {
		products.remove(product);
	}

	@Override
	public boolean isContain(Product product) {
		return products.contains(product);
	}
	
	public Product getProductById(int id) {
		for(Product product: products) {
			if(product.getId() == id) {
				return product;
			}
		}
		return null;
	}
}
