import AppStateContext from "../contexts/AppStateContext";
import AppStateProvider from "../providers/AppStateProvider";
import { useContext } from "react";

export default function usePrototypes() {
  const {prototypes} = useContext(AppStateContext)

  return prototypes;
}