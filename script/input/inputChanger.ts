export const inputChanger = (
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setState: any
) => {
  setState(event.target.value);
};
