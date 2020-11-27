package lab.Nov26.miniProject.Abstract;

public abstract class Page {
	public abstract void show();
	
	protected boolean isNumber(String str) {
		try {
			int n = Integer.parseInt(str);
		}
		catch (Exception e) {
			return false;
		}
		return true;
	}
}
