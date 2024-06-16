import renderer from 'react-test-renderer';
import { EnhancedTableHead } from '../SortingTableHeader';

describe('EnhancedTableHead', () => {
    const onRequestSortMock = jest.fn();
    const order = 'asc';
    const orderBy = 'weekEnding';

    it('should render the table head correctly', () => {
        const component = renderer.create(
            <EnhancedTableHead onRequestSort={onRequestSortMock} order={order} orderBy={orderBy} />,
          );
          let tree = component.toJSON();
          expect(tree).toMatchSnapshot();
    });
});