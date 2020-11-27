package homework.oop;

public class MovablePoint implements Movable {
	protected int x;
	protected int y;
	protected int xSpeed;
	protected int ySpeed;

	public MovablePoint(int x, int y, int xSpeed, int ySpeed) {
		this.x = x;
		this.y = y;
		this.xSpeed = xSpeed;
		this.ySpeed = ySpeed;
	}

	@Override
	public void moveUp() {
		// TODO Auto-generated method stub
		y -= ySpeed;
		System.out.println("Move up");
	}

	@Override
	public void moveDown() {
		// TODO Auto-generated method stub
		y += ySpeed;
		System.out.println("Move down");
	}

	@Override
	public void moveLeft() {
		// TODO Auto-generated method stub
		x -= xSpeed;
		System.out.println("Move left");
	}

	@Override
	public void moveRight() {
		// TODO Auto-generated method stub
		x += xSpeed;
		System.out.println("Move right");
	}

	@Override
	public String toString() {
		return "MovablePoint [x=" + x + ", y=" + y + ", xSpeed=" + xSpeed + ", ySpeed=" + ySpeed + "]";
	}
	
	
}
