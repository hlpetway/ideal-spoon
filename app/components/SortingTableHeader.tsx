import TableSortLabel from "@mui/material/TableSortLabel";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/material";
import { visuallyHidden } from '@mui/utils';
import { Sale } from './SalesTable';
import { Order } from "../types";

interface HeadCell {
    id: keyof Sale;
    label: string;
}

const headCells: readonly HeadCell[] = [
    {
        id: "weekEnding",
        label: "WEEK ENDING",
    },
    {
        id: "retailSales",
        label: "RETAIL SALES",
    },
    {
        id: "wholesaleSales",
        label: "WHOLESALE SALES",
    },
    {
        id: "unitsSold",
        label: "UNITS SOLD",
    },
    {
        id: "retailerMargin",
        label: "RETAILER MARGIN",
    },
];

interface EnhancedTableProps {
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Sale) => void;
    order: Order;
    orderBy: string;
}

export function EnhancedTableHead(props: EnhancedTableProps) {
    const { order, orderBy, onRequestSort } =
        props;
    const createSortHandler =
        (property: keyof Sale) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell, index) => (
                    <TableCell
                        key={headCell.id}
                        align={index === 0 ? 'left' : 'right'}
                        padding='normal'
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}