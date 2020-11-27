package homework.Nov26.miniProject.Page;

import homework.Nov26.miniProject.State;
import homework.Nov26.miniProject.Abstract.Page;

public class AdminPage extends Page {
	
	public AdminPage() {}
	
	@Override
	public void show() {
		System.out.println("a: Add product\nb: Delete product\nc: Back");
		String input = State.getState().getScanner().next();
		switch (input) {
			case "a": {
				State.getState().getStack().push(this);
				new AddProductPage().show();
				break;
			}
			case "b": {
				State.getState().getStack().push(this);
				new DeleteProductPage().show();
				break;
			}
			case "c": {
				Page previousPage = (Page) State.getState().getStack().pop();
				previousPage.show();
				break;
			}
			default: {
				show();
				break;
			}
		}
	}
	
	
}
