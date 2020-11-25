package homework.oop;

public class Main {
	public static void main(String[] args) {
		Circle circle = new Circle();
		Circle circle2 = new Circle(2.5);
		
		System.out.println(circle);
		System.out.println(circle.getArea());
		System.out.println(circle.getCircumference());
		System.out.println(circle2);
		System.out.println(circle2.getArea());
		System.out.println(circle2.getCircumference());
		
		Rectangle rectangle = new Rectangle();
		Rectangle rectangle2 = new Rectangle(5, 8);
		System.out.println(rectangle);
		System.out.println(rectangle.getArea());
		System.out.println(rectangle.getPerimeter());
		System.out.println(rectangle2);
		System.out.println(rectangle2.getArea());
		System.out.println(rectangle2.getPerimeter());
		
		Employee employee = new Employee(1, "John", "Doe", 10000);
		System.out.println(employee);
		System.out.println(employee.getAnnualSalary());
		System.out.println(employee.raiseSalary(50));
		
		// OOP2 homework1
		MovableCircle moveableCircle = new MovableCircle(1, 1, 5, 5, 8);
		moveableCircle.moveDown();
		System.out.println(moveableCircle);
		// OOP2 homework2
		MovableRectangle movableRectangle = new MovableRectangle(1, 1, 2, 2, 6, 6);
		System.out.println(movableRectangle);
		// OOP2 homework3
		DiscountRate discountRate = new DiscountRate();
		System.out.println(discountRate.getServiceDiscountRate("Premium"));
		System.out.println(discountRate.getServiceDiscountRate("Gold"));
		System.out.println(discountRate.getServiceDiscountRate("Silver"));
		
		Visit visitPremium = new Visit("PK", null);
		visitPremium.getCustomer().setMember(true);
		visitPremium.getCustomer().setMemberType("Premium");
		visitPremium.setServiceExpense(150);
		visitPremium.setProductExpense(100);
		System.out.println(visitPremium);
		System.out.println(visitPremium.getTotalExpense());
		
		Visit visitGold = new Visit("Time", null);
		visitGold.getCustomer().setMember(true);
		visitGold.getCustomer().setMemberType("Gold");
		visitGold.setServiceExpense(150);
		visitGold.setProductExpense(100);
		System.out.println(visitGold);
		System.out.println(visitGold.getTotalExpense());
		
		Visit visitSilver = new Visit("KP", null);
		visitSilver.getCustomer().setMember(true);
		visitSilver.getCustomer().setMemberType("Silver");
		visitSilver.setServiceExpense(150);
		visitSilver.setProductExpense(100);
		System.out.println(visitSilver);
		System.out.println(visitSilver.getTotalExpense());

		Visit visiter = new Visit("emiT", null);
		visiter.setServiceExpense(150);
		visiter.setProductExpense(100);
		System.out.println(visiter);		
		System.out.println(visiter.getTotalExpense());

	}
}

