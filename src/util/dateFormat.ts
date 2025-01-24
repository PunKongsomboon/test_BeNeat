export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  const hours =
    date.getHours() < 10
      ? "0" + (date.getHours() % 12) || 12
      : date.getHours() % 12 || 12;
  const minutes =
    date.getMinutes() < 10
      ? "0" + date.getMinutes()
      : date.getMinutes().toString();
  const second =
    date.getSeconds() < 10
      ? "0" + date.getSeconds()
      : date.getSeconds().toString();

  return `${day} ${month} ${year} - ${hours}:${minutes}:${second}`;
};
