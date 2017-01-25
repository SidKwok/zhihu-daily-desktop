export function formatStoriesDate(date) {
    let dateYear = date.getFullYear().toString();
    let dateMonth = (date.getMonth() + 1).toString();
    let dateDay = (date.getDate() + 1).toString();
    return dateYear
        + (dateMonth.length === 2 ? dateMonth : '0' + dateMonth)
        + (dateDay.length === 2 ? dateDay : '0' + dateDay);
}
