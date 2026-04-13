export const membershipPlans = {
  basic: {
    id: "basic",
    name: "Basic Free Membership",
    price: 0,
    priceLabel: "Free",
    perks: [
      "Browse available events",
      "Create and manage an account",
      "Receive standard updates",
    ],
  },
  premium: {
    id: "premium",
    name: "Premium",
    price: 9.99,
    priceLabel: "$9.99 / month",
    perks: [
      "Early access to select tickets",
      "Member-only discounts",
      "Priority event updates",
      "Exclusive promotional offers",
    ],
  },
  elite: {
    id: "elite",
    name: "Elite",
    price: 19.99,
    priceLabel: "$19.99 / month",
    perks: [
      "Everything in Premium",
      "Top priority event access",
      "Exclusive VIP announcements",
      "Special featured event perks",
    ],
  },
} as const;