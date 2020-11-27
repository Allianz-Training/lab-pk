package homework.oop;

public class Circle {
	private double radius = 1.0;
	private String color = "red";

	public Circle() {}
	
	public Circle(double r) {
		this.radius = r;
	}
	
	public double getRadius() {
		return radius;
	}
	
	public double getArea() {
		return Math.PI * Math.pow(radius, 2);
	}

	public void setRadius(double radius) {
		this.radius = radius;
	}
	
	public double getCircumference() {
		return 2*Math.PI*radius;
	}
	
	public String toString() {
		return "Circle[radius=" + radius  +"]";
	}
	
	
	
	
	
}
