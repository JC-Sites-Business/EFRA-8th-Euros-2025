type T_TimeLeft = {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export const calculateTimeLeft = (targetDate: Date): T_TimeLeft => {
  const difference = targetDate.getTime() - new Date().getTime();

  if (difference > 0) {
    const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      months,
      days,
      hours,
      minutes,
      seconds,
    };
  }
};
