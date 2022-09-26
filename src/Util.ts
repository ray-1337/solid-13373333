export function calculateDay(date: string | Date): number {
  return Math.ceil(Math.abs(new Date().getTime() - new Date(date).getTime()) / 864e5);
};

export function calculateYear(date: string | Date): number {
  return Math.floor((new Date().getTime() - new Date(date).getTime()) / 3.15576e+10);
};

export function calculateMonth(date: string | Date): number {
  let months, d1 = new Date(date), d2 = new Date();
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
};

export function sleep(ms: number) {
  return new Promise(r => setTimeout(r, ms));
};

export function preventClick(evt: MouseEvent | UIEvent) {
  evt.preventDefault();
  evt.stopPropagation();
  return false;
};

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export function generateString(length?: number) {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-";
  return [...Array(length || 16)].map(_ => characters[~~(Math.random() * characters.length)]).join('');
};

export function randomizer<R>(array: Array<R>) {
  return array[Math.floor(Math.random() * array.length)];
};

export function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export function shuffleArray<R>(array: Array<R>) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };

  return array;
};