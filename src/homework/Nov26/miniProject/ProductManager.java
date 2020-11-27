package homework.Nov26.miniProject;

import java.util.ArrayList;
import java.util.List;

import lab.Nov26.miniProject.Interface.IManager;

public class ProductManager implements IManager {
	
	private List<Product> products;
	
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
