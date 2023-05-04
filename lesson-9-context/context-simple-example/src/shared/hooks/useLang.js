import { useContext } from "react";

import { langContext } from "../../context/langContext";

const useLang = () => {
  const context = useContext(langContext); // повертається значення із value

  return context;
};
export default useLang;
