// A mock function to mimic making an async request for data
import { createAsyncThunk } from '@reduxjs/toolkit';
export interface SharkResponse {
    data: {
        id: string,
        title: string,
        image: string,
        subtitle: string,
        brand: string,
        reviews: [
            {
                customer: string,
                review: string,
                score: number
            }
        ],
        retailer: string,
        details: string[],
        tags: string[],
        sales: [
            {
                weekEnding: string,
                retailSales: number,
                wholesaleSales: number,
                unitsSold: number,
                retailerMargin: number
            }
        ]
    }
}
export const fetchShark = createAsyncThunk('shark/fetchProductDetails', async () => {
    const response = await fetch("http://localhost:3000/api/shark", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const result: SharkResponse = await response.json();
    return result;
  });
  