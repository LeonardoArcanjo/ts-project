export function TimeToSeconds(time: string) {
  const [hours = '0', minutes, seconds] = time.split(":");    // atribuição em hours com valor default, caso ele não seja passado

  const hoursInSeconds = Number(hours) * 3600;
  const minutesInSeconds = Number(minutes) * 60;

  return hoursInSeconds + minutesInSeconds + Number(seconds);
}

