///////  below this

// const metisMenu = [
// 	{
// 		"id": 'main',
// 		"label": "Main"
// 	},
// 	{
// 		"id": 1,
// 		"icon": "icon-speedometer",
// 		"label": "Dashboard",
// 		"to": "/dashboard",
// 	},
// 	{
// 		"id": 2,
// 		"icon": "icon-home",
// 		"label": "User",
// 		"to": "#",
// 		content: [
// 			{
// 				"id": 3,
// 				"label": "User List",
// 				"to": "/user-list"
// 			},
// 			{
// 				"id": 4,
// 				"label": "Company List",
// 				"to": "/company-list"
// 			}
// 		]
// 	},
// 	{
// 		"id": 5,
// 		"icon": "icon-home",
// 		"label": "Product",
// 		"to": "#",
// 		content: [
// 			{
// 				"id": 6,
// 				"label": "Category List",
// 				"to": "/category-list"
// 			},
// 			{
// 				"id": 7,
// 				"label": "Product List",
// 				"to": "/product-list"
// 			},
// 			{
// 				"id": 8,
// 				"label": "Question List",
// 				"to": "/question-list"
// 			}
// 		]
// 	},
// 	{
// 		"id": 9,
// 		"icon": "icon-home",
// 		"label": "Admin-Settings",
// 		"to": "#",
// 		content: [
// 			{
// 				"id": 10,
// 				"label": "Privacy Policy",
// 				"to": "/pp?content_type=pp"
// 			},
// 			{
// 				"id": 11,
// 				"label": "Terms & Condition",
// 				"to": "/tc?content_type=tc"
// 			}
// 		]
// 	},

// ];

// export default metisMenu

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
      // {
      //   id: 6,
      //   label: "Add Date card",
      //   to: "/add-date-card",
      // },
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
    label: "Forum",
    to: "#",
    content: [
      {
        id: 9,
        label: "Forum List",
        to: "/Forum-list",
      },
    ],
  },
  {
    id: 10,
    icon: "icon-home",
    label: "Admin-Settings",
    to: "#",
    content: [
      {
        id: 11,
        label: "Privacy Policy",
        to: "/pp?content_type=pp",
      },
      {
        id: 12,
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
