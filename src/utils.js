export const  getRandomDateFormatted = (startDate, endDate) => {
    // Convert start and end dates to timestamps
    const startTimestamp = startDate.getTime();
    const endTimestamp = endDate.getTime();
  
    // Generate a random timestamp between start and end
    const randomTimestamp = Math.random() * (endTimestamp - startTimestamp) + startTimestamp;
  
    // Create a new Date object with the random timestamp
    const randomDate = new Date(randomTimestamp);
  
    // Format the date as "YYYY DD MMM YYYY" (e.g., "2023 28 Dec 2024")
    const formattedDate = `${randomDate.getDate()} ${getMonthAbbreviation(randomDate.getMonth())} ${randomDate.getFullYear()}`;
  
    return formattedDate;
  }
  
  function getMonthAbbreviation(monthIndex) {
    const monthsAbbreviation = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return monthsAbbreviation[monthIndex];
  }
  