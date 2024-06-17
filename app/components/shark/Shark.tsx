"use client";
import { useEffect } from "react";
import { Paper } from "@mui/material";
import {
    selectImage,
    selectSubTitle,
    selectTitle,
    selectSales,
    selectTags
} from "../../../lib/features/shark/sharkSlice";
import { fetchShark } from "../../../lib/features/shark/sharkAPI";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import { SalesTable } from "../SalesTable";
import { Grid } from "@mui/material";
import { Stack } from "@mui/material";
import { Chip } from "@mui/material";
import styles from "../../styles/layout.module.css";

export const Shark = () => {
    const dispatch = useAppDispatch();
    const productImage = useAppSelector(selectImage);
    const productSubTitle = useAppSelector(selectSubTitle);
    const productTitle = useAppSelector(selectTitle);
    const productTags = useAppSelector(selectTags);
    const sharkSales = useAppSelector(selectSales);

    useEffect(() => {
        dispatch(fetchShark());
    },[]);

    return (
        <Grid className={styles.gridContainer} container spacing={2}>
            <Grid item xs={3}>
                <Paper className={styles.paper}  elevation={1}>
                <div className={styles.productDetails}>
                    <img className={styles.productImg} src={productImage} alt={productTitle} />
                    <h2 className={styles.productTitle}>
                        {productTitle}
                    </h2>
                    <h4 className={styles.productSubTitle}>{productSubTitle}</h4>
                    <div className={styles.productTags}>
                        <Stack direction="row" spacing={1}>
                        {productTags?.map((tag) => (
                            <Chip key={tag} label={tag} className={styles.tag}/>
                        ))}
                        </Stack>
                    </div>
                </div>
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <div className="shark-sales-chart">
                    <img className={styles.sharkSalesChart}src="chart.png" alt="a chart of shark sales over time"/>
                    </div>
                <div className="shark-sales">
                    <div className="sales-graph">
                    </div>
                    <div className={styles.salesDetails}>
                        <SalesTable productTitle={productTitle} sales={sharkSales} />
                    </div>
                </div>
            </Grid>
        </Grid >
    );
};
