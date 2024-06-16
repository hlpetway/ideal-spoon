import { createAppSlice } from "../../createAppSlice";
import { SharkResponse, fetchShark } from "./sharkAPI";

interface SharkSale {
    weekEnding: string,
    retailSales: number,
    wholesaleSales: number,
    unitsSold: number,
    retailerMargin: number
}

export interface SharkSliceState {
    title: string,
    image: string,
    subtitle: string,
    sales: SharkSale[],
    status: "idle" | "loading" | "failed",
    tags: string[];
}

const initialState: SharkSliceState = {
    title: "Loading Product Details",
    image: "",
    subtitle: "",
    sales: [],
    status: "idle",
    tags: [],
};

const formatPayload = function (response: SharkResponse): SharkSliceState {
    return {
        status : "idle",
        image: response.data["image"],
        sales : response.data["sales"],
        subtitle: response.data["subtitle"],
        tags: response.data["tags"],
        title: response.data["title"],
    }
}

export const sharkSlice = createAppSlice({
    name: "shark",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchShark.pending, (state) => {
            state.status = "loading";
        })
        .addCase(fetchShark.fulfilled, (state, action) => {
            let updatedState = formatPayload(action.payload);
            state.status = updatedState.status;
            state.image  = updatedState.image;
            state.sales = updatedState.sales;
            state.subtitle = updatedState.subtitle;
            state.tags = updatedState.tags;
            state.title = updatedState.title;
        })
        .addCase(fetchShark.rejected, (state) => {
                state.status = "failed";
        })
    }
});

export const selectTitle = (state: {shark: SharkSliceState}) => state.shark.title;
export const selectImage = (state: {shark: SharkSliceState}) => state.shark.image;
export const selectSubTitle = (state: {shark: SharkSliceState}) => state.shark.subtitle;
export const selectSales = (state: {shark: SharkSliceState}) => state.shark.sales;
export const selectTags = (state: {shark: SharkSliceState}) => state.shark.tags;

export default sharkSlice.reducer;