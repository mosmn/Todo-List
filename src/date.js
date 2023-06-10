// function to get the current(today) date dynamically
// function to format date
// function sort by date
// function to check if date is today
// function to get year, month, day from date

import format from "date-fns/format";
import isToday from "date-fns/isToday";
import isFuture from "date-fns/isFuture";

const dateLogic = (() => {
  const defaultDateFormatter = (date) => format(date, "d MMM yyyy");

  const defaultDate = () => defaultDateFormatter(new Date());

  const checkIfDateIsToday = (date) => isToday(new Date(date));

  const checkIfDateIsFuture = (date) => isFuture(new Date(date));

  const sortByDate = (array) => {
    array.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  };

  return {
    defaultDateFormatter,
    defaultDate,
    checkIfDateIsToday,
    checkIfDateIsFuture,
    sortByDate,
  };
})();

export default dateLogic;
