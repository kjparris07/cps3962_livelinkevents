export const events = [
  {
    id: "1",
    title: "Drake Concert",
    date: "2026-05-01",
    location: "NYC",
    price: 120,

    fees: {
      service: 10,
      tax: 5,
    },

    deals: [
      "10% student discount",
      "Buy 2 get 1 free",
    ],

    budget: [
      { type: "Standard", price: 80 },
      { type: "VIP", price: 200 },
    ],

    notify: true,
  },
];
