package homework.oop;

import java.util.Date;

public class Visit {
	private Customer customer;
	private Date date;
	private double serviceExpense;
	private double productExpense;
	
	public Visit(String name, Date date) {
		this.customer = new Customer(name);
		this.date = date;
	}
	
	public String getName() {
		return customer.getName();
	}
	
	public Customer getCustomer() {
		return customer;
	}
	
	public double getServiceExpense() {
		return serviceExpense;
	}
	
	public void setServiceExpense(double ex) {
		serviceExpense = ex;
	}
	
	public double getProductExpense() {
		return productExpense;
	}
	
	public void setProductExpense(double ex) {
		productExpense = ex;
	}
	
	public double getTotalExpense() {
		if(customer.isMember()) {
			DiscountRate rate = new DiscountRate();
			return serviceExpense * (1 - rate.getServiceDiscountRate(customer.getMemberType())) + 
				productExpense * (1 - rate.getProductDiscountRate(customer.getMemberType()));
		}
		return serviceExpense + productExpense;
	}

	@Override
	public String toString() {
		return "Visit [customer=" + customer + ", date=" + date + ", serviceExpense=" + serviceExpense
				+ ", productExpense=" + productExpense + "]";
	}
	
	
	
}
