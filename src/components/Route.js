import UserList from "./Users/userList";
import UserServey from "./Users/UserServey";
import SurveyDetail from "./Users/SurveyDetail";
import AuditReport from "./Users/AuditReport";
import AuditImages from "./Users/AuditImages";
import CompanyList from "./Users/CompanyList";
import AddCompany from "./Users/AddCompany";
import Dashboard from "./Dashboard/dashboard";
import CategoryList from "./Product/CategoryList";
import ProductList from "./Product/ProductList";
import AddCategory from "./Product/AddCategory";
import QuestionList from "./Product/QuestionList";
import AddQuestion from "./Product/AddQuestion";
import AddProduct from "./Product/AddProduct";
import ProductDetail from "./Product/ProductDetail";
import PP from "./Agency/PP";
import TC from "./Agency/TC";

//////// for date jar
import AddDateCard from "./Date Cards/addDateCard";
import DateCardsList from "./Date Cards/dateCardsList";
import UserSuggestedIdeas from "./Date Cards/userSuggestedIdeas";
import SubscriptionPlans from "./Date Cards/subscriptionPlans";
import SubscriptionList from "./Date Cards/all_subscription_plans";
import UpdateSubscriptionPlans from "./Date Cards/updatePageForSubsPlans";
import ForumList from "./Date Cards/forum";
import SubscriberList from "./Users/SubscriberList";
import UnsubscriberList from "./Users/UnsubsriberList";

///Pages updated///

import ManageLocation from './pages/ManageLocation/ManageLocation'
import AddLocation from './pages/AddLocation/AddLoaction'
import ForumHome from './pages/Forum/ForumHome'
import ManageNotification from './pages/ManageNotification/ManageNotification'
import AddNotification from './pages/AddNotification/AddNotification'
import UserSuggestedDate from './pages/UserSuggestedDate/UserSuggestedDates'



const Routes = [
  {
    path: "/Forum-list",
    name: "ForumList",
    exact: true,
    pageTitle: "Forum List",
    //isPrivate: true,
    component: ForumList,
  },
  {
    path: "/update_Subscription_Plans",
    name: "UpdateSubscriptionPlans",
    exact: true,
    pageTitle: "Update Subscription Plans",
    //isPrivate: true,
    component: UpdateSubscriptionPlans,
  },
  {
    path: "/update_Subscription_Plans/:id",
    name: "UpdateSubscriptionPlans",
    exact: true,
    pageTitle: "Update Subscription Plans",
    //isPrivate: true,
    component: UpdateSubscriptionPlans,
  },
  {
    path: "/all_Subscription_Plans",
    name: "SubscriptionList",
    exact: true,
    pageTitle: "Subscription Plans",
    //isPrivate: true,
    component: SubscriptionList,
  },
  {
    path: "/Subscription_Plans",
    name: "SubscriptionPlans",
    exact: true,
    pageTitle: "Subscription Plans",
    //isPrivate: true,
    component: SubscriptionPlans,
  },
  {
    path: "/date-cards-list",
    name: "DateCardsList",
    exact: true,
    pageTitle: "DateCardsList",
    //isPrivate: true,
    component: DateCardsList,
  },
  {
    path: "/add-date-card",
    name: "AddDateCard",
    exact: true,
    pageTitle: "AddDateCard",
    //isPrivate: true,
    component: AddDateCard,
  },
  {
    path: "/user-suggested-ideas",
    name: "UserSuggestedIdeas",
    exact: true,
    pageTitle: "UserSuggestedIdeas",
    //isPrivate: true,
    component: UserSuggestedIdeas,
  },

  {
    path: "/user-list",
    name: "Users",
    exact: true,
    pageTitle: "UserList",
    //isPrivate: true,
    component: UserList,
  },
  {
    path: "/subscriber-list",
    name: "Subscriber",
    exact: true,
    pageTitle: "Subscriber",
    //isPrivate: true,
    component: SubscriberList,
  },
  {
    path: "/unsubscriber-list",
    name: "Unsubscriber",
    exact: true,
    pageTitle: "Unsubscriber",
    //isPrivate: true,
    component: UnsubscriberList,
  },
  {
    path: "/company-list",
    name: "CompanyList",
    exact: true,
    pageTitle: "CompanyList",
    //isPrivate: true,
    component: CompanyList,
  },
  {
    path: "/add-company",
    name: "AddCompany",
    exact: true,
    pageTitle: "AddCompany",
    //isPrivate: true,
    component: AddCompany,
  },
  {
    path: "/add-company/:edit?",
    name: "AddCompany",
    exact: true,
    pageTitle: "AddCompany",
    component: AddCompany,
  },
  {
    path: "/category-list",
    name: "Category",
    exact: true,
    pageTitle: "Category",
    component: CategoryList,
  },
  {
    path: "/category-add",
    name: "AddCategory",
    exact: true,
    pageTitle: "AddCategory",
    component: AddCategory,
  },
  {
    path: "/question-list",
    name: "QuestionList",
    exact: true,
    pageTitle: "QuestionList",
    component: QuestionList,
  },
  {
    path: "/question-add",
    name: "AddQuestion",
    exact: true,
    pageTitle: "AddQuestion",
    component: AddQuestion,
  },
  {
    path: "/survey-report/:user_id?",
    name: "UserServey",
    exact: true,
    pageTitle: "UserServey",
    component: UserServey,
  },
  {
    path: "/survey-detail/:product_id?",
    name: "SurveyDetail",
    exact: true,
    pageTitle: "SurveyDetail",
    component: SurveyDetail,
  },
  {
    path: "/audit-report/:user_id?",
    name: "AuditReport",
    exact: true,
    pageTitle: "AuditReport",
    component: AuditReport,
  },
  {
    path: "/audit-images/:hf_id?",
    name: "AuditImages",
    exact: true,
    pageTitle: "AuditImages",
    component: AuditImages,
  },
  {
    path: "/category-add/:edit?",
    name: "AddCategory",
    exact: true,
    pageTitle: "AddCategory",
    component: AddCategory,
  },
  {
    path: "/product-list",
    name: "Products",
    exact: true,
    pageTitle: "Products",
    component: ProductList,
  },
  {
    path: "/product-add",
    name: "AddProduct",
    exact: true,
    pageTitle: "AddProduct",
    component: AddProduct,
  },
  {
    path: "/product-add/:edit?",
    name: "AddProduct",
    exact: true,
    pageTitle: "AddProduct",
    component: AddProduct,
  },
  {
    path: "/product-details/:product_id?",
    name: "Product Details",
    exact: true,
    pageTitle: "Product Details",
    component: ProductDetail,
  },
  {
    path: "/pp",
    name: "Privacy Policy",
    exact: true,
    pageTitle: "Privacy Policy",
    component: PP,
  },
  {
    path: "/tc",
    name: "Terms & Condition",
    exact: true,
    pageTitle: "Terms & Condition",
    component: TC,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    exact: true,
    pageTitle: "Dashboard",
    component: Dashboard,
  },
  {
    path:'/add-notification',
    name: "Add notification",
    exact: true, 
    pageTitle:"Add Notification",
    component: AddNotification,
  },
  {
    path:'/notification',
    name: "Notification",
    exact: true, 
    pageTitle:"Notification",
    component: ManageNotification,
  },
  {
    path:'/add-location',
    name: "Add Location",
    exact: true, 
    pageTitle:"Add Location",
    component: AddLocation,
  },
  {
    path:'/location',
    name: "Location",
    exact: true, 
    pageTitle:"Location",
    component: ManageLocation,
  },
  {
    path:'/notification',
    name: "Notification",
    exact: true, 
    pageTitle:"Notification",
    component: ManageNotification,
  },
  {
    path:'/forum-home',
    name: "Forum",
    exact: true, 
    pageTitle:"Forum",
    component: ForumHome,
  },
  {
    path:'/user-sugested-dates',
    name: "UserSuggested",
    exact: true, 
    pageTitle:"UserSuggested",
    component: UserSuggestedDate,
  },

];






export default Routes;
