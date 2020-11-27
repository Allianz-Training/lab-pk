package homework.Nov26.miniProject;

import java.util.Scanner;
import java.util.Stack;

import lab.Nov26.miniProject.Abstract.Page;

public class State {
	private static State singleton = null;
	private static boolean isAdmin = false;
	private static Stack<Page> stack;
	private static Cart shoppingCart;
	private static ProductManager products;
	private static Scanner scanner;
	
	public State() {
		shoppingCart = new Cart();
		stack = new Stack<>();
		products = new ProductManager();
		scanner = new Scanner(System.in);
	}

	public static State getState() {
		if(singleton == null) {
			singleton = new State();
		}
		return singleton; 
	}
	
	public Scanner getScanner() {
		return scanner;
	}
	
	public void setIsAdmin(boolean isAdmin) {
		this.isAdmin = isAdmin;
	}
	
	public boolean getIsAdmin() {
		return isAdmin;
	}
	
	public Cart getShoppingCart() {
		return shoppingCart;
	}
	
	public Stack getStack() {
		return stack;
	}
	
	public ProductManager getProductManager() {
		return products;
	}
	
}
