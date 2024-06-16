import type { Metadata } from "next";
import { Shark } from "./components/shark/Shark";
import styles from "../../styles/layout.module.css";

export default function IndexPage() {
  const updatedStyles = {
    ...styles,
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

  return <Shark styles={updatedStyles} />;
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
