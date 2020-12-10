import { Page } from "../interface"
import State from "../state"
import AdminPage from "./adminPage"
import ProductListPage from "./productListPage"

class MainPage implements Page {
    public show(): void {
        console.log('What do you want to buy ?')
        const rl = State.getState().getRl()
        rl.question('a. Buy Products\nb. Manage products\n', (input: string) => {
            switch (input) {
                case 'a':
                    State.getState().getStack().push(this)
                    new ProductListPage().show()
                    break
                case 'b':
                    if(State.getState().getIsAdmin()) {
                        State.getState().getStack().push(this)
                        new AdminPage().show()
                    }
                    else this.show()
                    break
                default:
                    this.show()
                    break
            }
        })
    }

}

export default MainPage
