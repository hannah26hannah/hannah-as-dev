import { format, parseISO } from 'date-fns';

const capitalize = (str) => {
  return str.replace(/^\w/, (c) => c.toUpperCase());
};

const formatDate = (time) => {
  return format(parseISO(time), 'LLLL d, yyyy');
};

// 'subdays', formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true, })

export { capitalize, formatDate };
