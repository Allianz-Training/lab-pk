package homework.oop;

public class DiscountRate {
	private double serviceDistcountPremium = 0.2;
	private double serviceDistcountGold = 0.15;
	private double serviceDistcountSilver = 0.1;
	private double productDistcountPremium = 0.1;
	private double productDistcountGold = 0.1;
	private double productDistcountSilver = 0.1;
	
	public double getServiceDiscountRate(String type) {
		switch (type) {
		case "Premium": {
			return serviceDistcountPremium;
		}
		
		case "Gold": {
			return serviceDistcountGold;
		}
		
		case "Silver": {
			return serviceDistcountSilver;
		}
		default:
			return 0;
		}
	}
	
	public double getProductDiscountRate(String type) {
		switch (type) {
		case "Premium": {
			return productDistcountPremium;
		}
		
		case "Gold": {
			return productDistcountGold;
		}
		
		case "Silver": {
			return productDistcountSilver;
		}
		default:
			return 0;
		}
	}
}
