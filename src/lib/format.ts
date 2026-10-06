export const ymd = (d: Date) =>
  `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;

export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
