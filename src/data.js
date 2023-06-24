import {
  CiBadgeDollar,
  CiBoxes,
  CiChat2,
  CiCreditCard1,
  CiCreditCard2,
  CiDollar,
  CiMedal,
  CiSettings,
  CiShop,
  CiUser,
} from "react-icons/ci";

export const mainData = [
  {
    content: "Missing Items",
    count: 3,
  },
  {
    content: "Merchant Rules",
    count: 15,
  },
  {
    content: "Category Rules",
    count: 18,
  },
  {
    content: "Department Rules",
    count: 2,
  },
  {
    content: " Location Rules",
    count: 3,
  },
];

export const profile = {
  name: "Washim",
  role: "Admin",
};

export const sidebarContent = [
  {
    avatar: CiBoxes,
    content: "Insights",
  },
  {
    avatar: CiDollar,
    content: "Transactions",
  },
  {
    avatar: CiCreditCard1,
    content: "Card",
  },
  {
    avatar: CiShop,
    content: "Vendors",
  },
  {
    avatar: CiChat2,
    content: "Accouting",
  },
  {
    avatar: CiUser,
    content: "People",
  },
  {
    avatar: CiBadgeDollar,
    content: "Reimburse",
  },
  {
    avatar: CiCreditCard2,
    content: "My Fillo",
  },
  {
    avatar: CiMedal,
    content: "Refer & Earn",
  },
  {
    avatar: CiSettings,
    content: "Settings",
  },
];

export const tableHeader = [
  "Date",
  "Amount",
  "Cardholder",
  "QuickBooks Category",
  "Receipt",
  "Memo",
  "Sync",
];

export const tableData = [
  {
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/1Password_icon.png/600px-1Password_icon.png?20210805233604",
    company: "1Password",
    type: "Saas / Software",
    amount: "$50.06",
    cardHolder: "Ramona Peters",
    occupation: "Engineering",
    category: "Software - Subscriptions",
    receipt: true,
    memo: null,
  },
  {
    avatar:
      "https://cdn.icon-icons.com/icons2/2699/PNG/512/webflow_logo_icon_169218.png",
    company: "Webflow",
    type: "Saas / Software",
    amount: "$450.16",
    cardHolder: "TK Kong",
    occupation: "Desing",
    category: "Software - Subscriptions",
    receipt: false,
    memo: "",
  },
  {
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple-logo.png/600px-Apple-logo.png?20200509031052",
    company: "Apple",
    type: "Electronics",
    amount: "$1750.16",
    cardHolder: "Daisy Ward",
    occupation: "Operation",
    category: "Employee - Equipment",
    receipt: true,
    memo: "Not required",
  },
  {
    avatar:
      "https://www.genengnews.com/wp-content/uploads/2021/02/BestApps_Asansa.jpg",
    company: "Asana",
    type: "Saas / Software",
    amount: "$46.11",
    cardHolder: "Ramona Peters",
    occupation: "Engineering",
    category: "Software - Subscriptions",
    receipt: true,
    memo: "Not required",
  },
  {
    avatar:
      "https://logodownload.org/wp-content/uploads/2020/05/best-buy-logo.png",
    company: "Best Buy",
    type: "Merchandise",
    amount: "$1346.16",
    cardHolder: "Lee Burton",
    occupation: "Sales",
    category: "Employee - Equipment",
    receipt: true,
    memo: "Replacement",
  },
  {
    avatar:
      "https://static.vecteezy.com/system/resources/previews/019/766/223/original/amazon-logo-amazon-icon-transparent-free-png.png",
    company: "Amazon AWS",
    type: "Cloud Services",
    amount: "$9346.13",
    cardHolder: "Ramona Peters",
    occupation: "Engineering",
    category: "Cloud : Services",
    receipt: true,
    memo: "Monthly Bill",
  },
  {
    avatar:
      "https://qfassets.b-cdn.net/original/2X/4/4f318376518977bb92a5ab1f8785a0c6a2da4afd.png",
    company: "Zapier",
    type: "Saas / Software",
    amount: "$161.12",
    cardHolder: "Ramona Peters",
    occupation: "Engineering",
    category: "Software - Subscriptions",
    receipt: false,
    memo: "",
  },
  {
    avatar:
      "https://seeklogo.com/images/S/sublime-text-logo-C2736A0B50-seeklogo.com.png",
    company: "Sublime Hq",
    type: "Saas / Software",
    amount: "$212.16",
    cardHolder: "Ramona Peters",
    occupation: "Engineering",
    category: "Software - Subscriptions",
    receipt: true,
    memo: "Missing Memo",
  },
];
