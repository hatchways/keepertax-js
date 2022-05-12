const multipliers1 = {
  meal: 0.5,
  car: 0.4,
};

const transactions1 = [
  {
    id: 't1',
    category: 'meal',
    amount: 32.5,
  },
  {
    id: 't2',
    category: 'meal',
    amount: 51.33,
  },
  {
    id: 't3',
    category: 'car',
    amount: 300.02,
  },
  {
    id: 't4',
    category: 'car',
    amount: 350.61,
  },
  {
    id: 't5',
    category: 'meal',
    amount: 49.68,
  },
  {
    id: 't6',
    category: 'payment',
    amount: 45.0,
  },
];

function generateScheduleC1(multipliers, transactions) {
  return {
    meal: 0,
    car: 0,
    payment: 0,
  };
}

if (module === require.main) {
  console.log(generateScheduleC1(multipliers1, transactions1));
}

module.exports = {
  multipliers1,
  transactions1,
  generateScheduleC1,
};
