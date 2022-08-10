import moment from 'moment';

export const getAge = (dateOfBirth: string): string => {
  const correctDateOfBirth = dateOfBirth.split(/-|\//)[0].length > 2 ? dateOfBirth = dateOfBirth.split(/-|\//).reverse().join('-') : dateOfBirth;
  const birth = moment(correctDateOfBirth, 'DD-MM-YYYY');

  const numberOfMonths = moment().diff(birth, 'months', true);
  const birthObject = {
    year: Math.floor(numberOfMonths / 12),
    month: Math.floor(numberOfMonths) % 12,
    day: Math.round((numberOfMonths % 1) * moment().daysInMonth())
  };

  if (moment(birth).isAfter(moment())) {
    return 'Я из будущего...';
  } else {
    if (birthObject.year < 1 && birthObject.month < 1) {
      return `${birthObject.day} ${days(birthObject.day)}`;
    }
    if (birthObject.year < 1) {
      return `${birthObject.month} ${months(birthObject.month)} ${birthObject.day ? birthObject.day + ' ' + String(days(birthObject.day)) : ''}`;
    }
    if (birthObject.year < 2) {
      return `${birthObject.year} ${years(birthObject.year)} ${birthObject.month} ${months(birthObject.month)}`;
    }
    return `${birthObject.year} ${years(birthObject.year)}`;
  }
};

const days = (day: number): string => {
  if (day === 1 || day === 31) {
    return 'день';
  }
  if ((day >= 2 && day <= 4) || day === 22 || day === 23 || day === 24) {
    return 'дня';
  }
  else {
    return 'дней';
  }
};

const months = (month: number): string => {
  if (month === 1) {
    return 'месяц';
  }
  if (month >= 2 && month <= 4) {
    return 'месяца';
  }
  else {
    return 'месяцев';
  }
};

const years = (year: number): string => {
  const variants: string[] = ['год', 'года', 'лет'];
  const cases: number[] = [2, 0, 1, 1, 1, 2];
  return variants[(year % 100 > 4 && year % 100 < 20) ? 2 : cases[(year % 10 < 5) ? year % 10 : 5]];
};