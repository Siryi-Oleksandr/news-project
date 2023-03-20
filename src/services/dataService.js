export function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

// readDate: '20.03.2023, 18:41:42';

export function handleDate(articles) {
  const allDates = articles.map(({ readDate }) => readDate);

  const uniqueDates = allDates.filter(
    (date, index, array) => array.indexOf(date) === index
  );

  return uniqueDates;
}
