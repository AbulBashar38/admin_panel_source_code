const metisMenuCompany = [
  {
    id: "main",
    label: "Main",
  },
  {
    id: 1,
    icon: "icon-speedometer",
    label: "Dashboard",
    to: "/dashboard",
  },
  {
    id: 2,
    icon: "icon-home",
    label: "User",
    to: "#",
    content: [
      {
        id: 3,
        label: "User List",
        to: "/user-list",
      },
    ],
  },
  {
    id: 4,
    icon: "icon-home",
    label: "Date Cards",
    to: "#",
    content: [
      {
        id: 5,
        label: "Date Cards List",
        to: "/date-cards-list",
      },
      {
        id: 6,
        label: "Add Date card",
        to: "/add-date-card",
      },
      {
        id: 7,
        label: "User Suggested Ideas",
        to: "/user-suggested-ideas",
      },
    ],
  },
  {
    id: 8,
    icon: "icon-home",
    label: "Admin-Settings",
    to: "#",
    content: [
      {
        id: 9,
        label: "Privacy Policy",
        to: "/pp?content_type=pp",
      },
      {
        id: 10,
        label: "Terms & Condition",
        to: "/tc?content_type=tc",
      },
    ],
  },
  // {
  //   id: 11,
  //   icon: "icon-home",
  //   label: "Subscription Plans",
  //   to: "#",
  //   content: [
  //     {
  //       id: 12,
  //       label: "Add Subscription Plans",
  //       to: "/Subscription_Plans",
  //     },
  //     {
  //       id: 13,
  //       label: "See All Subscription Plans",
  //       to: "/all_Subscription_Plans",
  //     },
  //   ],
  // },
];

export default metisMenuCompany;
