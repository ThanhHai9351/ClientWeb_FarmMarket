import { format } from "date-fns";
export const formattedDate = (day) => {
  return format(new Date(day), "HH:mm:ss dd/MM/yyyy");
};
