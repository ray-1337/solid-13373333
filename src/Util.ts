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
}