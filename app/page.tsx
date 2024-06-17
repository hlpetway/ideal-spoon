import type { Metadata } from "next";
import { Shark } from "./components/shark/Shark";

export default function IndexPage() {
  return <Shark />;
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
