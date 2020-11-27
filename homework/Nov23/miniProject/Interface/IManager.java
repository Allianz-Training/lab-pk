package lab.Nov26.miniProject.Interface;

import lab.Nov26.miniProject.Product;

public interface IManager {
	public void addProduct(Product product);
	public void deleteProduct(Product product);
	public void showProducts();
	public boolean isContain(Product product);
}
