interface toggleColorState {
  activeScrollPage: string;
  value: string;
}

export const toggleColor = ({ activeScrollPage, value }: toggleColorState) => {
  return activeScrollPage === value ? "#3D69B7" : "black";
};
