package lab.Nov26.miniProject.Page;

import java.util.Scanner;

import lab.Nov26.miniProject.State;
import lab.Nov26.miniProject.Abstract.Page;

public class MainPage extends Page {
	
	public MainPage() {}

	@Override
	public void show() {
		System.out.println("What do you want to do ?");
		System.out.println("a. " + "Buy products");
		System.out.println("b. " + "Manage products");
		String input = State.getState().getScanner().next();
		switch (input) {
			case "a": {
				State.getState().getStack().push(this);
				new ProductListPage().show();
				break;
			}
			case "b": {
				if(State.getState().getIsAdmin()) {
					State.getState().getStack().push(this);
					new AdminPage().show();
				} else {
					show();
				}
				break;
			}
			default: {
				show();
				break;
			}
		}
	}
	
	public String toString() {
		return "This is Main Page.";
	}
}
