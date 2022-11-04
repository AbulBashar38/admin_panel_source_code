
import {
  USER_SIGNIN_SUCCESS,
  COMPANY_LIST,
  AUDIT_IMAGES,
  AUDIT_REPORT,
  SURVEY_DETAIL,
  SURVEY_LIST,
  EDIT_COMPANY,
  ADD_COMPANY,
  USER_SIGNIN_FAIL,
  USER_SIGNOUT,
  USER_LIST,
  DASHBAORD_DATA,
  USER_CHANGE_PASSWORD,
  USER_APPROVAL,
  GET_DATE_CARDS_LIST,
  ADD_DATE,
  USER_SUGGESTED_DATE_CARDS,
  DELETE_CATEGORY,
  CATEGORY_EDIT,
  DELETE_USER,
  ADMIN_ADD_DATE_CARDS,
  signUp_data_selection,
  GET_DATE_CARDS_LIST_OF_USERS,
  DELETE_USERS_PLANS,
  add_user_accepted_plans,
  subscription_plans,
  subscription_plans_list,
  DELETE_subscription_plans,
  subscription_plans_EDIT,
  update_subscription_plans,
  BlockUser,
  UnblockBlockUser,
  TOGGLE,
  ANDROIDLIST,
  IOSLIST,
  SUBUSERLIST,
  UNSUBLIST,
  CondBaseUsers,
  PurchaseUsers,
  ForumList,
  ForumListDEL
} from "../constents/constents";
// import { admin_add_date_cards } from '../../../admin/src/actions/userAction';
// import ItemsAddedInCart from "../actions/userAction"
import ItemsAddedInCart from "../actions/itemsAddedInCart.js";
import SubscriptionPlansAdd from "../actions/add_subscriptionplans";
import Add_user_accepted_plans from "../actions/add_user_accepted_plans.js";
import UpdateSubscriptionPlans from "../actions/updateSubscriptionPlans";

import jwt_decode from "jwt-decode";

export const initState = {
  loading: false,
  regeisterErrors: [],
  errors: [],
  loginErrors: [],
  token: "",
  user: "",
  subscribeUser: null,
  unsubscribeUser: null,
  // toggleUSer: false
  isEdit: true,
};

const verifyToken = (token) => {
  const decodedToken = jwt_decode(token);
  const expiresIn = new Date(decodedToken.exp * 1000);
  if (new Date() > expiresIn) {
    localStorage.removeItem("myToken");
  } else {
    return decodedToken;
  }
};
const token = localStorage.getItem("myToken");

if (token) {
  const decoded = verifyToken(token);
  initState.token = token;
  const { user } = decoded;
  initState.user = user;
}

export const userReducer = (state = initState, action) => {
  switch (action.type) {

    case subscription_plans_list:
      return { ...state, loading: true, subscriptionPlansList: action.payload };

    case ForumList:
      return { ...state, loading: true, AllForumList: action.payload };


    case PurchaseUsers:
      // console.log("users_in_reducer_action.payload:", action.payload);
      return { ...state, loading: true, purchaseUsers: action.payload };


    case USER_SIGNIN_SUCCESS:
      const decoded = verifyToken(action.payload);
      const { user } = decoded;
      return { ...state, token: action.payload, user: user };
    case USER_SIGNIN_FAIL:
      return { loading: false, loginErrors: action.payload };
    case USER_SIGNOUT:
      return { ...state, token: "", user: "" };

    case USER_CHANGE_PASSWORD:
      return {
        loading: false,
        passwordUpdate: action.payload,
        loginErrors: "",
      };

    case DASHBAORD_DATA:
      console.log("action.payload:", action.payload);
      return { ...state, getDashbaord: action.payload };

    case "SUBSCRIBE_USERS":
      console.log("action.payload:", action.payload);
      return { ...state, subscribeUser: action.payload };

    case USER_APPROVAL:
      return { ...state, adminApprovalStatus: action.payload };

    case USER_LIST:
      // console.log("users_in_reducer_action.payload:", action.payload);
      return { ...state, loading: true, users: action.payload };

    case ANDROIDLIST:
      // console.log("users_in_reducer_action.payload:", action.payload);
      return { ...state, loading: true, androidLISTUsers: action.payload };
    case IOSLIST:
      // console.log("users_in_reducer_action.payload:", action.payload);
      return { ...state, loading: true, iosLISTUsers: action.payload };
    case SUBUSERLIST:
      // console.log("users_in_reducer_action.payload:", action.payload);
      return { ...state, loading: true, SubLISTUsers: action.payload };
    case UNSUBLIST:
      // console.log("users_in_reducer_action.payload:", action.payload);
      return { ...state, loading: true, UnSubLISTUsers: action.payload };

    case CondBaseUsers:
      // console.log("users_in_reducer_action.payload:", action.payload);
      return { ...state, loading: true, filterUsers: action.payload };

    case GET_DATE_CARDS_LIST:
      // console.log("dateCardsList_in_reducer:", action.payload);
      return { ...state, loading: true, dateCardsList: action.payload };

    case GET_DATE_CARDS_LIST_OF_USERS:
      console.log("dateCardsList_in_reducer:", action.payload);
      return { ...state, loading: true, dateCardsListOfUsers: action.payload };

    case DELETE_CATEGORY:
      return { ...state, deleteCategory: action.payload, errors: "" };
    case DELETE_subscription_plans:
      return { ...state, subscription_plans_del: action.payload, errors: "" };


    case ForumListDEL:
      return { ...state, ForumLists_DEL: action.payload, errors: "" };




    case DELETE_USER:
      return { ...state, deleteUSERS: action.payload, errors: "" };

    case BlockUser:
      return { ...state, blockusers: action.payload, errors: "" };

    case UnblockBlockUser:
      return { ...state, UnblockBlockusers: action.payload, errors: "" };

    case DELETE_USERS_PLANS:
      return { ...state, deleteUsersPlans: action.payload, errors: "" };

    case CATEGORY_EDIT:
      console.log("action.payload", action.payload);
      return { ...state, categoryEditUpdate: action.payload.categoryEdit };

    case subscription_plans_EDIT:
      console.log("action.payload", action.payload);
      return {
        ...state,
        subscription_plans_EditUpdate: action.payload.categoryEdit,
      };

    case COMPANY_LIST:
      return {
        ...state,
        loading: true,
        companies: action.payload,
        companyEdit: "",
      };

    case ADD_COMPANY:
      return {
        ...state,
        loading: true,
        addCompany: action.payload,
        companyEdit: "",
      };

    case EDIT_COMPANY:
      return { ...state, loading: true, companyEdit: action.payload };

    case SURVEY_LIST:
      return { ...state, loading: true, surveyList: action.payload };

    case SURVEY_DETAIL:
      return { ...state, loading: true, getSurveyDetail: action.payload };

    case AUDIT_REPORT:
      return { ...state, loading: true, getAuditReport: action.payload };

    case AUDIT_IMAGES:
      return { ...state, loading: true, getAuditImages: action.payload };

    case signUp_data_selection:
      return ItemsAddedInCart.ItemsAddedInCart(action.payload, action.user_id);

    case update_subscription_plans:
      return UpdateSubscriptionPlans.UpdateSubscriptionPlans(
        action.payload,
        action.plan_card_id
      );

    case subscription_plans:
      return SubscriptionPlansAdd.SubscriptionPlansAdd(
        action.payload,
        action.user_id
      );

    case add_user_accepted_plans:
      return Add_user_accepted_plans.Add_user_accepted_plans(action.payload);

    case TOGGLE:
      return {
        ...state,
        [action.payload.toggledState]: !state[action.payload.toggledState],
        // type: state.isTest ? "test" : "exercise"
      }

    default:
      return state;
  }
};

export default userReducer;




// before


// import {
//   USER_SIGNIN_SUCCESS,
//   COMPANY_LIST,
//   AUDIT_IMAGES,
//   AUDIT_REPORT,
//   SURVEY_DETAIL,
//   SURVEY_LIST,
//   EDIT_COMPANY,
//   ADD_COMPANY,
//   USER_SIGNIN_FAIL,
//   USER_SIGNOUT,
//   USER_LIST,
//   DASHBAORD_DATA,
//   USER_CHANGE_PASSWORD,
//   USER_APPROVAL,
//   GET_DATE_CARDS_LIST,
//   ADD_DATE,
//   USER_SUGGESTED_DATE_CARDS,
//   DELETE_CATEGORY,
//   CATEGORY_EDIT,
//   DELETE_USER,
//   ADMIN_ADD_DATE_CARDS,
//   signUp_data_selection,
//   GET_DATE_CARDS_LIST_OF_USERS,
//   DELETE_USERS_PLANS,
//   add_user_accepted_plans,
//   subscription_plans,
//   subscription_plans_list,
//   DELETE_subscription_plans,
//   subscription_plans_EDIT,
//   update_subscription_plans,
//   BlockUser,
//   UnblockBlockUser,
//   TOGGLE
// } from "../constents/constents";
// // import { admin_add_date_cards } from '../../../admin/src/actions/userAction';
// // import ItemsAddedInCart from "../actions/userAction"
// import ItemsAddedInCart from "../actions/itemsAddedInCart.js";
// import SubscriptionPlansAdd from "../actions/add_subscriptionplans";
// import Add_user_accepted_plans from "../actions/add_user_accepted_plans.js";
// import UpdateSubscriptionPlans from "../actions/updateSubscriptionPlans";

// import jwt_decode from "jwt-decode";

// export const initState = {
//   loading: false,
//   regeisterErrors: [],
//   errors: [],
//   loginErrors: [],
//   token: "",
//   user: "",
//   // toggleUSer: false
//   isEdit: true,
// };

// const verifyToken = (token) => {
//   const decodedToken = jwt_decode(token);
//   const expiresIn = new Date(decodedToken.exp * 1000);
//   if (new Date() > expiresIn) {
//     localStorage.removeItem("myToken");
//   } else {
//     return decodedToken;
//   }
// };
// const token = localStorage.getItem("myToken");

// if (token) {
//   const decoded = verifyToken(token);
//   initState.token = token;
//   const { user } = decoded;
//   initState.user = user;
// }

// export const userReducer = (state = initState, action) => {
//   switch (action.type) {
//     case subscription_plans_list:
//       return { ...state, loading: true, subscriptionPlansList: action.payload };

//     case USER_SIGNIN_SUCCESS:
//       const decoded = verifyToken(action.payload);
//       const { user } = decoded;
//       return { ...state, token: action.payload, user: user };
//     case USER_SIGNIN_FAIL:
//       return { loading: false, loginErrors: action.payload };
//     case USER_SIGNOUT:
//       return { ...state, token: "", user: "" };

//     case USER_CHANGE_PASSWORD:
//       return {
//         loading: false,
//         passwordUpdate: action.payload,
//         loginErrors: "",
//       };

//     case DASHBAORD_DATA:
//       console.log("action.payload:", action.payload);
//       return { ...state, getDashbaord: action.payload };

//     case USER_APPROVAL:
//       return { ...state, adminApprovalStatus: action.payload };

//     case USER_LIST:
//       console.log("users_in_reducer_action.payload:", action.payload);
//       return { ...state, loading: true, users: action.payload };

//     case GET_DATE_CARDS_LIST:
//       console.log("dateCardsList_in_reducer:", action.payload);
//       return { ...state, loading: true, dateCardsList: action.payload };

//     case GET_DATE_CARDS_LIST_OF_USERS:
//       console.log("dateCardsList_in_reducer:", action.payload);
//       return { ...state, loading: true, dateCardsListOfUsers: action.payload };

//     case DELETE_CATEGORY:
//       return { ...state, deleteCategory: action.payload, errors: "" };
//     case DELETE_subscription_plans:
//       return { ...state, subscription_plans_del: action.payload, errors: "" };

//     case DELETE_USER:
//       return { ...state, deleteUSERS: action.payload, errors: "" };

//     case BlockUser:
//       return { ...state, blockusers: action.payload, errors: "" };

//     case UnblockBlockUser:
//       return { ...state, UnblockBlockusers: action.payload, errors: "" };

//     case DELETE_USERS_PLANS:
//       return { ...state, deleteUsersPlans: action.payload, errors: "" };

//     case CATEGORY_EDIT:
//       console.log("action.payload", action.payload);
//       return { ...state, categoryEditUpdate: action.payload.categoryEdit };

//     case subscription_plans_EDIT:
//       console.log("action.payload", action.payload);
//       return {
//         ...state,
//         subscription_plans_EditUpdate: action.payload.categoryEdit,
//       };

//     case COMPANY_LIST:
//       return {
//         ...state,
//         loading: true,
//         companies: action.payload,
//         companyEdit: "",
//       };

//     case ADD_COMPANY:
//       return {
//         ...state,
//         loading: true,
//         addCompany: action.payload,
//         companyEdit: "",
//       };

//     case EDIT_COMPANY:
//       return { ...state, loading: true, companyEdit: action.payload };

//     case SURVEY_LIST:
//       return { ...state, loading: true, surveyList: action.payload };

//     case SURVEY_DETAIL:
//       return { ...state, loading: true, getSurveyDetail: action.payload };

//     case AUDIT_REPORT:
//       return { ...state, loading: true, getAuditReport: action.payload };

//     case AUDIT_IMAGES:
//       return { ...state, loading: true, getAuditImages: action.payload };

//     case signUp_data_selection:
//       return ItemsAddedInCart.ItemsAddedInCart(action.payload, action.user_id);

//     case update_subscription_plans:
//       return UpdateSubscriptionPlans.UpdateSubscriptionPlans(
//         action.payload,
//         action.plan_card_id
//       );

//     case subscription_plans:
//       return SubscriptionPlansAdd.SubscriptionPlansAdd(
//         action.payload,
//         action.user_id
//       );

//     case add_user_accepted_plans:
//       return Add_user_accepted_plans.Add_user_accepted_plans(action.payload);

//     case TOGGLE:
//       return {
//         ...state,
//         [action.payload.toggledState]: !state[action.payload.toggledState],
//         // type: state.isTest ? "test" : "exercise"
//       }

//     default:
//       return state;
//   }
// };

// export default userReducer;
