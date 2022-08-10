
export const getExperience = (expStr: string): string => {
  const variants: string[] = ['год', 'года', 'лет'];
  const cases: number[] = [2, 0, 1, 1, 1, 2];
  const expNum: number = Number(expStr);
  const expTotal: string = variants[(expNum % 100 > 4 && expNum % 100 < 20) ? 2 : cases[(expNum % 10 < 5) ? expNum % 10 : 5]];
  return `${expNum} ${expTotal}`;
};