import renderer from 'react-test-renderer';
import { Provider } from "react-redux";
import { store } from "../../../../lib/store";
import { Shark } from "../Shark";
const styles = {
    gridContainer: "",
    paper: "",
    productDetails: "",
    productImg: "",
    productTitle: "",
    productSubTitle: "",
    productTags: "",
    tag: "",
    sharkSalesChart: "",
    salesDetails: "",
};

describe("Shark component", () => {
    it("should match the snapshot", () => {
        const component = renderer.create(<Provider store={store}><Shark styles={styles} /></Provider>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});