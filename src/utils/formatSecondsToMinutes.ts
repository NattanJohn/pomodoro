export function formatSecondsToMinutes(seconds: number) {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secondsFormatted = String(seconds % 60).padStart(2, '0');
  return `${minutes}:${secondsFormatted}`;
}
