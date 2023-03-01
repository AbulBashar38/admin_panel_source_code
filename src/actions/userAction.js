import axios from "axios";
import instance from "../components/Config/axios";
import Cookies from "universal-cookie";
import {
  USER_SIGNIN_SUCCESS,
  COMPANY_LIST,
  EDIT_COMPANY,
  ADD_COMPANY,
  USER_SIGNIN_FAIL,
  USER_SIGNOUT,
  USER_LIST_FAIL,
  USER_EDIT,
  USER_CHANGE_PASSWORD,
  DASHBAORD_DATA,
  USER_APPROVAL,
  SURVEY_LIST,
  SURVEY_DETAIL,
  AUDIT_REPORT,
  AUDIT_IMAGES,
  GET_DATE_CARDS_LIST,
  ADD_DATE,
  USER_SUGGESTED_DATE_CARDS,
  DELETE_CATEGORY,
  ERROR_PRODUCT,
  CATEGORY_EDIT,
  DELETE_USER,
  ADMIN_ADD_DATE_CARDS,
  GET_DATE_CARDS_LIST_OF_USERS,
  DELETE_USERS_PLANS,
  subscription_plans_list,
  DELETE_subscription_plans,
  subscription_plans_EDIT,
  BlockUser,
  UnblockBlockUser,
  TOGGLE,
  USER_LIST,
  ANDROIDLIST,
  IOSLIST,
  SUBUSERLIST,
  UNSUBLIST,
  CondBaseUsers,
  PurchaseUsers,
  ForumList,
  ForumListDEL,
} from "../constents/constents";

axios.defaults.baseURL = 'http://localhost:3000';
// axios.defaults.baseURL = "http://server.appsstaging.com:3011";
// axios.defaults.baseURL = "https://webservices.mydatejar.com";
// axios.defaults.baseURL = "https://my-date-jar-p2-36562.uk.r.appspot.com";



const cookies = new Cookies();


export const subscriberListAction = () => async (dispatch) => {
  const getUser = cookies.get("userData");

  const data = await axios.get("/api/subscribe-users")
    .then((resp) => { 
      var users = resp.data.users
      // console.log(resp)
      dispatch({ type: "SUBSCRIBE_USERS", payload: users });
    })
    .catch((err) => {
      console.error(err);
    });
};

// export const unSubscriberAction = () => async (dispatch) => {
//   const getUser = cookies.get("userData");

//   const data = await axios.get("/api/unsubscribe-users")
//     .then((resp) => {
    

//       var users = resp.data.users
   
//       dispatch({ type: "UNSUBSCRIBE_USERS", payload: users });
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// };



export const condBaseUsers = (val) => {
  // debugger
  // console.log("valInAction:", val);
  return async (dispatch) => {
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };
    const vals = { val };
    try {
      // const { data } = await axios.post(process.env.REACT_APP_API_URL + "condBaseUsers", val, config);
      const { data } = await axios.post(
        process.env.REACT_APP_API_URL + "condBaseUsers",
        vals
      );
      dispatch({ type: CondBaseUsers, payload: data });
    } catch (error) {
      // dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.error });
      console.log("error:", error);
    }
  };
};

export const purchaseUsersList = () => async (dispatch) => {
  const getUser = cookies.get("userData");

  const data = await axios.get("/api/PurchaseUsers")
    .then((resp) => {
      // console.log(resp)
      dispatch({ type: PurchaseUsers, payload: resp.data });
    })
    .catch((err) => {
      console.error(err);
    });
};

export const blockUser = (id) => {
  console.log("blockId:", id);
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        process.env.REACT_APP_API_URL + `blockUser/${id}`
      );
      dispatch({ type: BlockUser, payload: data });
    } catch (error) {
      dispatch({ type: ERROR_PRODUCT, payload: error.response.data.error });
    }
  };
};

export const UnblockUser = (id) => {
  console.log("UnblockId:", id);
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        process.env.REACT_APP_API_URL + `UnblockUser/${id}`
      );
      dispatch({ type: UnblockBlockUser, payload: data });
    } catch (error) {
      dispatch({ type: ERROR_PRODUCT, payload: error.response.data.error });
    }
  };
};

// Add admin_add_date_cards
export const admin_add_date_cards = (state) => {
  return async (dispatch) => {
    const config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    };
    try {
      const { data } = await axios.post("/api/AddCategory", state, config);
      dispatch({ type: ADMIN_ADD_DATE_CARDS, payload: data });
    } catch (error) {
      dispatch({ type: ERROR_PRODUCT, payload: error.response.data.error });
    }
  };
};

// export const signin = (state) => {
//   return async (dispatch) => {
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     try {
//       console.log("data:");
//       const { data } = await axios.post("/api/signIn", state, config);
//       console.log("data:", data);
//       // localStorage.setItem('myToken', data.token);\
//       cookies.set("token", data.token, { path: "/" });
//       cookies.set("userData", data.userJson, { path: "/" });
//       dispatch({ type: USER_SIGNIN_SUCCESS, payload: data.token });
//     } catch (error) {
//       dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.error });
//     }
//   };
// };

export const signin = (state) => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_API_URL}signIn`, state, config);
      // localStorage.setItem('myToken', data.token);\
      cookies.set("token", data.token, { path: "/" });
      cookies.set("userData", data.userJson, { path: "/" });
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data.token });
    } catch (error) {
      dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.error });
    }
  };
};

// For Get for Edit user
export const getUserById = (userId) => {
  return async (dispatch) => {
    try {
      const {
        data: { getUser, getFamilyInfo, getEmploymentInfo, getEducationInfo },
      } = await instance.get(`/api/userEdit/${userId}`);
      dispatch({
        type: USER_EDIT,
        payload: {
          getUser,
          getFamilyInfo,
          getEmploymentInfo,
          getEducationInfo,
        },
      });
    } catch (error) {
      dispatch({ type: USER_LIST_FAIL, payload: error.response.data.error });
    }
  };
};

// Here update the user Password
export const passwordSave = (state) => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.post("/api/passwordChange", state, config);
      dispatch({ type: USER_CHANGE_PASSWORD, payload: data });
    } catch (error) {
      dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.error });
    }
  };
};

export const signout = () => (dispatch) => {
  //localStorage.removeItem('myToken');
  cookies.remove("token");
  cookies.remove("userData");
  dispatch({ type: USER_SIGNOUT });
};

// here to get Alla user
// console.log("process.env.REACT_APP_API_URL", process.env.REACT_APP_API_URL);
export const userlist = () => async (dispatch) => {
  const getUser = cookies.get("userData");

  const data = await axios
    .get(process.env.REACT_APP_API_URL + "userList")
    .then((resp) => {
      // console.log(resp)
      dispatch({ type: USER_LIST, payload: resp.data });
    })
    .catch((err) => {
      console.error(err);
    });
};

// here to get Alla user
// console.log("process.env.REACT_APP_API_URL", process.env.REACT_APP_API_URL);
export const userListAndroid = () => async (dispatch) => {
  const getUser = cookies.get("userData");

  const data = await axios
    .get(process.env.REACT_APP_API_URL + "userListAndroid")
    .then((resp) => {
      // console.log(resp)
      dispatch({ type: ANDROIDLIST, payload: resp.data });
    })
    .catch((err) => {
      console.error(err);
    });
};

// here to get Alla user
// console.log("process.env.REACT_APP_API_URL", process.env.REACT_APP_API_URL);
export const userListIos = () => async (dispatch) => {
  const getUser = cookies.get("userData");

  const data = await axios
    .get(process.env.REACT_APP_API_URL + "userListIos")
    .then((resp) => {
      // console.log(resp)
      dispatch({ type: IOSLIST, payload: resp.data });
    })
    .catch((err) => {
      console.error(err);
    });
};

// here to get Alla user
// console.log("process.env.REACT_APP_API_URL", process.env.REACT_APP_API_URL);
export const userListSubscribed = () => async (dispatch) => {
  const getUser = cookies.get("userData");

  const data = await axios
    .get(process.env.REACT_APP_API_URL + "userListSubscribed")
    .then((resp) => {
      // console.log(resp)
      dispatch({ type: SUBUSERLIST, payload: resp.data });
    })
    .catch((err) => {
      console.error(err);
    });
};

// here to get Alla user
// console.log("process.env.REACT_APP_API_URL", process.env.REACT_APP_API_URL);
export const userListUnsubscribed = () => async (dispatch) => {
  const getUser = cookies.get("userData");

  const data = await axios
    .get(process.env.REACT_APP_API_URL + "userListUnsubscribed")
    .then((resp) => {
      // console.log(resp)
      dispatch({ type: UNSUBLIST, payload: resp.data });
    })
    .catch((err) => {
      console.error(err);
    });
};

/// FOR DATE JAR ADMINS /////////////
// here to get Alla date cards of users and admins
export const dateCardsListAction = (user_id) => async (dispatch) => {
  console.log("action_id>>>>>>>>>:", user_id);
  // debugger
  // const getUser = cookies.get('userData');

  const dateCardsList = await axios
    .get(
      process.env.REACT_APP_API_URL + `date-card/get_all_date_cards/${user_id}`
    )
    .then((resp) => {
      // console.log(resp)
      dispatch({ type: GET_DATE_CARDS_LIST, payload: resp.data });
    })
    .catch((err) => {
      console.error(err);
    });
};

export const addDateCard = (myData) => async (dispatch) => {
  console.log("action data>>>>>>>>>:", myData);

  await axios.post(process.env.REACT_APP_API_URL + "date-card/DateCardsByAdmin", myData).then((res) => {
    console.log(res.data)
    console.log(res)
    if (res.data.status === 1) {
      alert("Date Cards are adding  successfully")
    } else if (res.data.status === 0) {

      alert("Amin could not share Date Cards.")
      // console.log("resp_else:", resp);
    }

  }).catch((err) => {
    console.log(err)
  })


  // await fetch(process.env.REACT_APP_API_URL + "date-card/DateCardsByAdmin", {

  //   method: "POST",

  //   headers: {
  //     "Content-Type": "application/json"
  //   },

  //   body: ({
  //     // productsAddedInCart: action.itemAddinCart,
  //     // authId: action.authId

  //     dateCard_name: dateCard_name,
  //     dateCard_description: dateCard_description,
  //     user_id: user_id,
  //     ageToggle: ageToggle

  //   }).then((resp) => {
  //     console.log(resp)
  //     if (resp.status === 1) {


  //       // console.log("resp.status:", resp.status);
  //       alert("Date Cards are adding  successfully")

  //     }
  //     else if (resp.status === 0) {

  //       alert("Amin could not share Date Cards.")
  //       // console.log("resp_else:", resp);
  //     }
  //   }).catch((err) => {
  //     console.log("Amin could not share Date Cards.", err);

  //   })

  // })
  // debugger
  // const getUser = cookies.get('userData');

  // const dateCardsList = await axios
  //   .get(
  //     process.env.REACT_APP_API_URL + `date-card/get_all_date_cards/${user_id}`
  //   )
  //   .then((resp) => {
  //     // console.log(resp)
  //     dispatch({ type: GET_DATE_CARDS_LIST, payload: resp.data });
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });
};


/// FOR DATE JAR ADMINS /////////////
// here to get Alla date cards of users and admins
export const sub_plans_list = () => async (dispatch) => {
  //   console.log("action_id>>>>>>>>>:", user_id);
  // debugger
  // const getUser = cookies.get('userData');

  const subscription_plans = await axios
    .get(process.env.REACT_APP_API_URL + "date-card/ForumList")
    .then((resp) => {
      // console.log(resp)
      dispatch({ type: subscription_plans_list, payload: resp.data });
    })
    .catch((err) => {
      console.error(err);
    });
};

export const forum_list = () => async (dispatch) => {
  //   console.log("action_id>>>>>>>>>:", user_id);
  // debugger
  // const getUser = cookies.get('userData');

  const subscription_plans = await axios
    .get(process.env.REACT_APP_API_URL + "date-card/Forumlist")
    .then((resp) => {
      // console.log(resp)
      dispatch({ type: ForumList, payload: resp.data });
    })
    .catch((err) => {
      console.error(err);
    });
};

/// FOR DATE JAR ADMINS /////////////
// here to get Alla date cards by users which will accepted by admin
export const users_sug_date_cards = () => async (dispatch) => {
  // const getUser = cookies.get('userData');

  const dateCardsList = await axios
    .get(
      process.env.REACT_APP_API_URL + "date-card/get_all_date_cards_users_plans"
    )
    .then((resp) => {
      console.log("resp.data>>>", resp.data);
      dispatch({ type: GET_DATE_CARDS_LIST_OF_USERS, payload: resp.data });
    })
    .catch((err) => {
      console.error(err);
    });
};

// Here Delete Category
export const Date_cards_Delete = (category_id) => {
  // debugger
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        process.env.REACT_APP_API_URL + `date-card/deletCategory/${category_id}`
      );
      dispatch({ type: DELETE_CATEGORY, payload: data });
    } catch (error) {
      dispatch({ type: ERROR_PRODUCT, payload: error.response.data.error });
    }
  };
};

// Here Delete subscription plans
export const subscription_plans_Delete = (category_id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        process.env.REACT_APP_API_URL +
        `date-card/deletSubscriptionPlans/${category_id}`
      );
      dispatch({ type: DELETE_subscription_plans, payload: data });
    } catch (error) {
      dispatch({ type: ERROR_PRODUCT, payload: error.response.data.error });
    }
  };
};

// Here Delete subscription plans
export const forumlist_Delete = (category_id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        process.env.REACT_APP_API_URL +
        // `date-card/deletSubscriptionPlans/${category_id}`
        `date-card/ForumListdelete/${category_id}`
      );
      dispatch({ type: ForumListDEL, payload: data });
    } catch (error) {
      dispatch({ type: ERROR_PRODUCT, payload: error.response.data.error });
    }
  };
};

// Here Delete users plans
export const users_Date_cards_plans_Delete = (category_id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        process.env.REACT_APP_API_URL + `date-card/deletUserPlan/${category_id}`
      );
      dispatch({ type: DELETE_USERS_PLANS, payload: data });
    } catch (error) {
      dispatch({ type: ERROR_PRODUCT, payload: error.response.data.error });
    }
  };
};

// Here Delete user
export const users__Delete = (category_id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        process.env.REACT_APP_API_URL + `deletUser/${category_id}`
      );
      dispatch({ type: DELETE_USER, payload: data });
    } catch (error) {
      dispatch({ type: ERROR_PRODUCT, payload: error.response.data.error });
    }
  };
};

// Here edit category
export const Date_cards_Edit = (category_id, state) => {
  return async (dispatch) => {
    try {
      for (const key in state) {
        if (state[key] === "") {
          delete state[key];
        }
      }

      const { data } = await axios.post(
        process.env.REACT_APP_API_URL + "date-card/editCategory/" + category_id,
        state
      );

      dispatch({ type: CATEGORY_EDIT, payload: data });
    } catch (error) {
      dispatch({ type: ERROR_PRODUCT, payload: error.response.data.error });
    }
  };
};

// Here edit subscription plans
export const subscription_plans_Edit = (category_id, state) => {
  console.log("state:", state);
  console.log("category_id:", category_id);
  return async (dispatch) => {
    try {
      for (const key in state) {
        if (state[key] === "") {
          delete state[key];
        }
      }

      const { data } = await axios.post(
        process.env.REACT_APP_API_URL +
        "date-card/editSubscriptionPlans/" +
        category_id,
        state
      );

      dispatch({ type: subscription_plans_EDIT, payload: data });
    } catch (error) {
      dispatch({ type: ERROR_PRODUCT, payload: error.response.data.error });
    }
  };
};

//////////////////////////////////////////////////

//////////////////////////////////////////////////

// here to get company
export const companylist = () => async (dispatch) => {
  try {
    const { data } = await axios.post(`/api/getAllCompany`);
    dispatch({ type: COMPANY_LIST, payload: data.data });
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.error });
  }
};

// Here update the user Password
export const companySave = (state) => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.post("/api/AddCompany", state, config);
      dispatch({ type: ADD_COMPANY, payload: data });
    } catch (error) {
      dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.error });
    }
  };
};

// Here to Edit company
export const companyByID = (company_id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/companyEdit/${company_id}`);
      dispatch({ type: EDIT_COMPANY, payload: data.companyEdit });
    } catch (error) {
      dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.error });
    }
  };
};

// Here to Get Datshboar Data
export const dashbaordData = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/dashboard");
      dispatch({ type: DASHBAORD_DATA, payload: data });
    } catch (error) {
      dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.error });
    }
  };
};

// Here Admin Approval
export const adminApproval = (user_id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/adminApproval/${user_id}`);
      dispatch({ type: USER_APPROVAL, payload: data });
    } catch (error) {
      dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.error });
    }
  };
};

// here to get Survey Report
export const surveylist = (user_id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/surveyList/${user_id}`);
    dispatch({ type: SURVEY_LIST, payload: data.data });
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.error });
  }
};

// here to get Survey Report
export const surveyDetail = (product_id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/surveyDetails/${product_id}`);
    dispatch({ type: SURVEY_DETAIL, payload: data.data });
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.error });
  }
};

// here to get Audit Report
export const auditReports = (user_id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/auditReport/${user_id}`);
    dispatch({ type: AUDIT_REPORT, payload: data.data });
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.error });
  }
};

// here to get Audit Report
export const auditImagesGet = (hf_id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/auditImages/${hf_id}`);
    dispatch({ type: AUDIT_IMAGES, payload: data.data });
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.error });
  }
};

// before

// import axios from "axios";
// import instance from "../components/Config/axios";
// import Cookies from "universal-cookie";
// import {
//   USER_SIGNIN_SUCCESS,
//   COMPANY_LIST,
//   EDIT_COMPANY,
//   ADD_COMPANY,
//   USER_SIGNIN_FAIL,
//   USER_SIGNOUT,
//   USER_LIST,
//   USER_LIST_FAIL,
//   USER_EDIT,
//   USER_CHANGE_PASSWORD,
//   DASHBAORD_DATA,
//   USER_APPROVAL,
//   SURVEY_LIST,
//   SURVEY_DETAIL,
//   AUDIT_REPORT,
//   AUDIT_IMAGES,
//   GET_DATE_CARDS_LIST,
//   ADD_DATE,
//   USER_SUGGESTED_DATE_CARDS,
//   DELETE_CATEGORY,
//   ERROR_PRODUCT,
//   CATEGORY_EDIT,
//   DELETE_USER,
//   ADMIN_ADD_DATE_CARDS,
//   GET_DATE_CARDS_LIST_OF_USERS,
//   DELETE_USERS_PLANS,
//   subscription_plans_list,
//   DELETE_subscription_plans,
//   subscription_plans_EDIT,
//   BlockUser,
//   UnblockBlockUser,
//   TOGGLE
// } from "../constents/constents";

// const cookies = new Cookies();

// export const blockUser = (id) => {
//   console.log("blockId:", id);
//   return async (dispatch) => {
//     try {
//       const { data } = await axios.post(
//         process.env.REACT_APP_API_URL + `blockUser/${id}`
//       );
//       dispatch({ type: BlockUser, payload: data });
//     } catch (error) {
//       dispatch({ type: ERROR_PRODUCT, payload: error.response.data.error });
//     }
//   };
// };

// export const UnblockUser = (id) => {
//   console.log("UnblockId:", id);
//   return async (dispatch) => {
//     try {
//       const { data } = await axios.post(
//         process.env.REACT_APP_API_URL + `UnblockUser/${id}`
//       );
//       dispatch({ type: UnblockBlockUser, payload: data });
//     } catch (error) {
//       dispatch({ type: ERROR_PRODUCT, payload: error.response.data.error });
//     }
//   };
// };

// // Add admin_add_date_cards
// export const admin_add_date_cards = (state) => {
//   return async (dispatch) => {
//     const config = {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "multipart/form-data",
//       },
//     };
//     try {
//       const { data } = await axios.post("/api/AddCategory", state, config);
//       dispatch({ type: ADMIN_ADD_DATE_CARDS, payload: data });
//     } catch (error) {
//       dispatch({ type: ERROR_PRODUCT, payload: error.response.data.error });
//     }
//   };
// };

// export const signin = (state) => {
//   return async (dispatch) => {
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     try {
//       const { data } = await axios.post("/api/signIn", state, config);
//       // localStorage.setItem('myToken', data.token);\
//       cookies.set("token", data.token, { path: "/" });
//       cookies.set("userData", data.userJson, { path: "/" });
//       dispatch({ type: USER_SIGNIN_SUCCESS, payload: data.token });
//     } catch (error) {
//       dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.error });
//     }
//   };
// };

// // For Get for Edit user
// export const getUserById = (userId) => {
//   return async (dispatch) => {
//     try {
//       const {
//         data: { getUser, getFamilyInfo, getEmploymentInfo, getEducationInfo },
//       } = await instance.get(`/api/userEdit/${userId}`);
//       dispatch({
//         type: USER_EDIT,
//         payload: {
//           getUser,
//           getFamilyInfo,
//           getEmploymentInfo,
//           getEducationInfo,
//         },
//       });
//     } catch (error) {
//       dispatch({ type: USER_LIST_FAIL, payload: error.response.data.error });
//     }
//   };
// };

// // Here update the user Password
// export const passwordSave = (state) => {
//   return async (dispatch) => {
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     try {
//       const { data } = await axios.post("/api/passwordChange", state, config);
//       dispatch({ type: USER_CHANGE_PASSWORD, payload: data });
//     } catch (error) {
//       dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.error });
//     }
//   };
// };

// export const signout = () => (dispatch) => {
//   //localStorage.removeItem('myToken');
//   cookies.remove("token");
//   cookies.remove("userData");
//   dispatch({ type: USER_SIGNOUT });
// };

// // here to get Alla user
// console.log("process.env.REACT_APP_API_URL", process.env.REACT_APP_API_URL);
// export const userlist = () => async (dispatch) => {
//   const getUser = cookies.get("userData");

//   const data = await axios
//     .get(process.env.REACT_APP_API_URL + "userList")
//     .then((resp) => {
//       // console.log(resp)
//       dispatch({ type: USER_LIST, payload: resp.data });
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// };

// /// FOR DATE JAR ADMINS /////////////
// // here to get Alla date cards of users and admins
// export const dateCardsListAction = (user_id) => async (dispatch) => {
//   console.log("action_id>>>>>>>>>:", user_id);
//   // debugger
//   // const getUser = cookies.get('userData');

//   const dateCardsList = await axios
//     .get(
//       process.env.REACT_APP_API_URL + `date-card/get_all_date_cards/${user_id}`
//     )
//     .then((resp) => {
//       // console.log(resp)
//       dispatch({ type: GET_DATE_CARDS_LIST, payload: resp.data });
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// };

// /// FOR DATE JAR ADMINS /////////////
// // here to get Alla date cards of users and admins
// export const sub_plans_list = () => async (dispatch) => {
//   //   console.log("action_id>>>>>>>>>:", user_id);
//   // debugger
//   // const getUser = cookies.get('userData');

//   const subscription_plans = await axios
//     .get(process.env.REACT_APP_API_URL + "date-card/subscription_plans_list")
//     .then((resp) => {
//       // console.log(resp)
//       dispatch({ type: subscription_plans_list, payload: resp.data });
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// };

// /// FOR DATE JAR ADMINS /////////////
// // here to get Alla date cards by users which will accepted by admin
// export const users_sug_date_cards = () => async (dispatch) => {
//   // const getUser = cookies.get('userData');

//   const dateCardsList = await axios
//     .get(
//       process.env.REACT_APP_API_URL + "date-card/get_all_date_cards_users_plans"
//     )
//     .then((resp) => {
//       // console.log(resp)
//       dispatch({ type: GET_DATE_CARDS_LIST_OF_USERS, payload: resp.data });
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// };

// // Here Delete Category
// export const Date_cards_Delete = (category_id) => {
//   return async (dispatch) => {
//     try {
//       const { data } = await axios.post(
//         process.env.REACT_APP_API_URL + `date-card/deletCategory/${category_id}`
//       );
//       dispatch({ type: DELETE_CATEGORY, payload: data });
//     } catch (error) {
//       dispatch({ type: ERROR_PRODUCT, payload: error.response.data.error });
//     }
//   };
// };

// // Here Delete subscription plans
// export const subscription_plans_Delete = (category_id) => {
//   return async (dispatch) => {
//     try {
//       const { data } = await axios.post(
//         process.env.REACT_APP_API_URL +
//         `date-card/deletSubscriptionPlans/${category_id}`
//       );
//       dispatch({ type: DELETE_subscription_plans, payload: data });
//     } catch (error) {
//       dispatch({ type: ERROR_PRODUCT, payload: error.response.data.error });
//     }
//   };
// };

// // Here Delete users plans
// export const users_Date_cards_plans_Delete = (category_id) => {
//   return async (dispatch) => {
//     try {
//       const { data } = await axios.post(
//         process.env.REACT_APP_API_URL + `date-card/deletUserPlan/${category_id}`
//       );
//       dispatch({ type: DELETE_USERS_PLANS, payload: data });
//     } catch (error) {
//       dispatch({ type: ERROR_PRODUCT, payload: error.response.data.error });
//     }
//   };
// };

// // Here Delete user
// export const users__Delete = (category_id) => {
//   return async (dispatch) => {
//     try {
//       const { data } = await axios.post(
//         process.env.REACT_APP_API_URL + `deletUser/${category_id}`
//       );
//       dispatch({ type: DELETE_USER, payload: data });
//     } catch (error) {
//       dispatch({ type: ERROR_PRODUCT, payload: error.response.data.error });
//     }
//   };
// };

// // Here edit category
// export const Date_cards_Edit = (category_id, state) => {
//   return async (dispatch) => {
//     try {
//       for (const key in state) {
//         if (state[key] === "") {
//           delete state[key];
//         }
//       }

//       const { data } = await axios.post(
//         process.env.REACT_APP_API_URL + "date-card/editCategory/" + category_id,
//         state
//       );

//       dispatch({ type: CATEGORY_EDIT, payload: data });
//     } catch (error) {
//       dispatch({ type: ERROR_PRODUCT, payload: error.response.data.error });
//     }
//   };
// };

// // Here edit subscription plans
// export const subscription_plans_Edit = (category_id, state) => {
//   console.log("state:", state);
//   console.log("category_id:", category_id);
//   return async (dispatch) => {
//     try {
//       for (const key in state) {
//         if (state[key] === "") {
//           delete state[key];
//         }
//       }

//       const { data } = await axios.post(
//         process.env.REACT_APP_API_URL +
//         "date-card/editSubscriptionPlans/" +
//         category_id,
//         state
//       );

//       dispatch({ type: subscription_plans_EDIT, payload: data });
//     } catch (error) {
//       dispatch({ type: ERROR_PRODUCT, payload: error.response.data.error });
//     }
//   };
// };

// //////////////////////////////////////////////////

// //////////////////////////////////////////////////

// // here to get company
// export const companylist = () => async (dispatch) => {
//   try {
//     const { data } = await axios.post(`/api/getAllCompany`);
//     dispatch({ type: COMPANY_LIST, payload: data.data });
//   } catch (error) {
//     dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.error });
//   }
// };

// // Here update the user Password
// export const companySave = (state) => {
//   return async (dispatch) => {
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     try {
//       const { data } = await axios.post("/api/AddCompany", state, config);
//       dispatch({ type: ADD_COMPANY, payload: data });
//     } catch (error) {
//       dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.error });
//     }
//   };
// };

// // Here to Edit company
// export const companyByID = (company_id) => {
//   return async (dispatch) => {
//     try {
//       const { data } = await axios.get(`/api/companyEdit/${company_id}`);
//       dispatch({ type: EDIT_COMPANY, payload: data.companyEdit });
//     } catch (error) {
//       dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.error });
//     }
//   };
// };

// // Here to Get Datshboar Data
// export const dashbaordData = () => {
//   return async (dispatch) => {
//     try {
//       const { data } = await axios.get("/api/dashboard");
//       dispatch({ type: DASHBAORD_DATA, payload: data });
//     } catch (error) {
//       dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.error });
//     }
//   };
// };

// // Here Admin Approval
// export const adminApproval = (user_id) => {
//   return async (dispatch) => {
//     try {
//       const { data } = await axios.get(`/api/adminApproval/${user_id}`);
//       dispatch({ type: USER_APPROVAL, payload: data });
//     } catch (error) {
//       dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.error });
//     }
//   };
// };

// // here to get Survey Report
// export const surveylist = (user_id) => async (dispatch) => {
//   try {
//     const { data } = await axios.get(`/api/surveyList/${user_id}`);
//     dispatch({ type: SURVEY_LIST, payload: data.data });
//   } catch (error) {
//     dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.error });
//   }
// };

// // here to get Survey Report
// export const surveyDetail = (product_id) => async (dispatch) => {
//   try {
//     const { data } = await axios.get(`/api/surveyDetails/${product_id}`);
//     dispatch({ type: SURVEY_DETAIL, payload: data.data });
//   } catch (error) {
//     dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.error });
//   }
// };

// // here to get Audit Report
// export const auditReports = (user_id) => async (dispatch) => {
//   try {
//     const { data } = await axios.get(`/api/auditReport/${user_id}`);
//     dispatch({ type: AUDIT_REPORT, payload: data.data });
//   } catch (error) {
//     dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.error });
//   }
// };

// // here to get Audit Report
// export const auditImagesGet = (hf_id) => async (dispatch) => {
//   try {
//     const { data } = await axios.get(`/api/auditImages/${hf_id}`);
//     dispatch({ type: AUDIT_IMAGES, payload: data.data });
//   } catch (error) {
//     dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.error });
//   }
// };
