import Day from '../models/Day';
import viewMainPage from '../view/main.js'


export default function actionMainPage() {
    const model = Day.findAll();
    const view = new viewMainPage();

    view.createListMonths(model);

}