import { cTop, HStack, State, Text, TForm, UIController, UIScene, VStack } from '@tuval/forms';

export class AppController extends UIController {

    @State()
    private menu_text: string;

    protected InitController() {
        this.menu_text = 'About';
    }

    public OnBindModel(form: TForm) {

    }
    public LoadView() {
        return UIScene(
            VStack({ alignment: cTop })(
                Text('Hello__ Tuval').fontSize(20)
            )

        )
    }
}