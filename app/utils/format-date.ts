export const formatDate = (dateString: string) => {
  const [year, month, day] = dateString.split("-");
  return `${parseInt(month)}/${parseInt(day)}/${parseInt(year)}`;
};
