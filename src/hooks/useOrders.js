import AppStateContext from "../contexts/AppStateContext";
import AppStateProvider from "../providers/AppStateProvider";
import { useContext } from "react";

export default function useOrders() {
  const {orders} = useContext(AppStateContext)

  return orders;
}