interface toggleBorderBottomState {
  activeScrollPage?: string;
  value?: string;
  width: number;
}

export const toggleBorderBottom = ({
  activeScrollPage,
  value,
  width,
}: toggleBorderBottomState) => {
  if (
    width <= 600 &&
    activeScrollPage === value &&
    activeScrollPage === "stock"
  ) {
    return "2px solid red";
  }
  if (width <= 600) {
    return activeScrollPage === value
      ? "2px solid #3D69B7"
      : "2px solid transparent";
  }
  if (activeScrollPage === value && activeScrollPage === "stock") {
    return "4px solid red";
  }
  return activeScrollPage === value
    ? "4px solid #3D69B7"
    : "4px solid transparent";
};
