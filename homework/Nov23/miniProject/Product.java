package lab.Nov26.miniProject;

public class Product{
	private int id;
	private String title;
	private double price;
//	private int amount;
	
	public Product(Integer id, String title, double price) {
		this.id = id;
		this.title = title;
		this.price = price;
//		this.amount = amount;
	}
	
	public int getId() {
		return id;
	}
	
	public String getTitle() {
		return title;
	}

	public double getPrice() {
		return price;
	}
	
//	public int getAmount() {
//		return amount;
//	}

	@Override
	public String toString() {
		return id + " " + title + " " + price + " Baht.";
	}
	
	
}
