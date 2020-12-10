import { Page } from "../interface"
import State from "../state"
import AddProductPage from "./addProductPage"
import DeleteProductPage from "./deleteProductPage"

class AdminPage implements Page {

    constructor() {}

    public show(): void {
        console.log('=========== Admin Mode ===========')
        const rl = State.getState().getRl()
        rl.question('a. Add product\nb. Delete product\nc. Back\n', (input: string) => {
            switch (input) {
                case 'a': {
                    State.getState().getStack().push(this);
                    new AddProductPage().show()
                    break;
                }
                case 'b': {
                    State.getState().getStack().push(this)
                    new DeleteProductPage().show()
                    break;
                }
                case 'c': {
                    State.getState().getStack().pop()?.show()
                    break
                }
                default: {
                    this.show()
                    break
                }
            }
        })
    }

}

export default AdminPage
