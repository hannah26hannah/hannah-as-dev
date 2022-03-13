const capitalize = (str) => {
  return str.replace(/^\w/, (c) => c.toUpperCase());
};

// 'subdays', formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true, })

export { capitalize };
