import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import isFuture from 'date-fns/isFuture';

const dateLogic = (() => {
    const defaultDateFormatter = (date) => format(date, "d MMM yyyy")

    const defaultDate = () => defaultDateFormatter(new Date())

    const checkIfDateIsToday = (date) => isToday(new Date(date));

    const checkIfDateIsFuture = (date) => isFuture(new Date(date));

    const sortByDate = (array) => {
        array.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    };

    const getDefaultDate = () => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        let month = (currentDate.getMonth() + 1).toString();
        let day = currentDate.getDate().toString();
    
        if (month.length === 1) {
          month = `0${  month}`;
        }
        if (day.length === 1) {
          day = `0${  day}`;
        }
      
        return `${year}-${month}-${day}`;
      };

    return {
        defaultDateFormatter,
        defaultDate,
        checkIfDateIsToday,
        checkIfDateIsFuture,
        sortByDate,
        getDefaultDate
    }
})();

export default dateLogic;