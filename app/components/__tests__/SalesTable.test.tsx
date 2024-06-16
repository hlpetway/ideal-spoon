import renderer from 'react-test-renderer';
import { SalesTable, Sale } from "../SalesTable";

// Mock sales data
const sales: Sale[] = [
    {
        weekEnding: "2021-10-01",
        retailSales: 100,
        wholesaleSales: 80,
        unitsSold: 10,
        retailerMargin: 20,
    },
    {
        weekEnding: "2021-10-08",
        retailSales: 150,
        wholesaleSales: 120,
        unitsSold: 15,
        retailerMargin: 30,
    },
];

describe("SalesTable", () => {
    it("renders the table with correct data", () => {
        const component = renderer.create(
            <SalesTable productTitle="Product A" sales={sales} />,
          );
          let tree = component.toJSON();
          expect(tree).toMatchSnapshot();
    });
});