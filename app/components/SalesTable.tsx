import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { EnhancedTableHead } from "./SortingTableHeader";
import { getComparator, stableSort } from "../helpers/sortUtils";
import { Order } from "../types";

interface SalesTableProps {
    productTitle: string,
    sales: Sale[]
}

export interface Sale {
    weekEnding: string,
    retailSales: number,
    wholesaleSales: number,
    unitsSold: number,
    retailerMargin: number
}


function createData(
    weekEnding: string,
    retailSales: number,
    wholesaleSales: number,
    unitsSold: number,
    retailerMargin: number
) {
    return { weekEnding, retailSales, wholesaleSales, unitsSold, retailerMargin };
}

export function SalesTable(props: SalesTableProps) {
    const { productTitle, sales } = props;
    const [order, setOrder] = React.useState<Order>("asc");
    const [orderBy, setOrderBy] = React.useState<keyof Sale>("weekEnding");

    const rows = sales.map((sale: Sale) => createData(sale.weekEnding, sale.retailSales, sale.wholesaleSales, sale.unitsSold, sale.retailerMargin));

    const visibleRows = React.useMemo(
        () =>
            stableSort(rows, getComparator(order, orderBy)),
        [order, orderBy, rows],
    );

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof Sale,
    ) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label={`a table view of all sales for ${productTitle} product`}>
                <EnhancedTableHead
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                />
                <TableBody>
                    {visibleRows.map((row, index) => (
                        <TableRow
                            key={`${productTitle}-sale-${index}`}
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell align="left">{row.weekEnding}</TableCell>
                            <TableCell align="right">{row.retailSales}</TableCell>
                            <TableCell align="right">{row.wholesaleSales}</TableCell>
                            <TableCell align="right">{row.unitsSold}</TableCell>
                            <TableCell align="right">{row.retailerMargin}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}