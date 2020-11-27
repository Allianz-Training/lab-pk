package homework.Nov26.miniProject;

public class Product{
	private int id;
	private String title;
	private long price;
//	private int amount;
	
	public Product(Integer id, String title, long price) {
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

	public long getPrice() {
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
