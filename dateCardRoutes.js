const express = require("express");
const router = express.Router();
const {
  add_date_description,
  add_pick_date_plan,
  pick_date_plan,
  create_post_dateExperience,
  notification_list,
  push_notification,
  get_post,
  get_all_post,
  get_date_list,
  get_date_history,
  get_all_dateList,
  rewards_list,
  get_all_date_cards,
  get_all_date_cards_users_plans,
  delete_notification,
  rating_date,
  rating_value,
  get_date_plan,
  push_notificationTest,
  SubscriptionPlans_fun,
  get_subscription_plans,
  subscription_plans_list, /// for admin
  past_date_list,
  purchase,
  checkSubcription,
  google_ads_rewards,
  ads_rewards_pts,
  all_points,
  delete_dateCard,
  adsmock,
  adsmockp,
  deactivateAccount,
  get_sub_plan
} = require("../controllers/dateCardController");

const {
  getAllCategory,
  CategoryVlidation,
  AddCategory,
  categoryEdit,
  editSubscriptionPlans,
  deletCategory,
  deletUsersPlans,
  AddDateCardsByAdmin,
  DateCardsByAdmin,
  UpdateSubscriptionPlans,
  deletSubscriptionPlans,
  ForumListdelete,
  ForumList,
} = require("../controllers/admin/adminController");
const {
  getAllProduct,
  addPrdocut,
  ProductVlidation,
  deleteProduct,
  productEdit,
  productDetail,
  addQuestion,
  surveyList,
} = require("../controllers/admin/productController");

const { upload } = require("../config/utils");
const { auth } = require("../middlewares/auth");

// Routes

router.post("/subscriptionPlans", SubscriptionPlans_fun);
router.get("/get_subscription_plans", auth, get_subscription_plans);
router.get("/subscription_plans_list", subscription_plans_list); ///   for admin
router.get("/Forumlist", ForumList); //for admin
router.post("/add_date_description", auth, add_date_description);
// router.get('/get_all_date_cards',get_all_date_cards);
router.get("/get_all_date_cards/:user_id", get_all_date_cards);
router.get("/get_all_date_cards_users_plans", get_all_date_cards_users_plans);
router.post("/pick_date_plan", auth, pick_date_plan);
router.post("/add_pick_date_plan", auth, add_pick_date_plan);
router.post("/post_dateExperience", auth, create_post_dateExperience);
router.get("/get_post/:user_id", get_post);
router.get("/get_all_post", auth, get_all_post);
router.get("/get_date_list/:user_id", auth, get_date_list);
router.get("/get_date_history/:user_id", auth, get_date_history);
router.get("/past_date_list/:user_id", auth, past_date_list);
router.get("/get_all_dateList", auth, get_all_dateList);
router.delete("/selected_date/:dateCard_id", auth, delete_dateCard);
router.get("/rewards_list/:user_id", auth, rewards_list);
router.post("/rating_date", auth, rating_date);
router.get("/rating_value/:user_id", auth, rating_value);
router.get("/all_points/:user_id", auth, all_points);

router.get("/notification_list/:user_id", auth, notification_list);
router.delete(
  "/delete_notification/:notification_id",
  auth,
  delete_notification
);
router.get("/get_date_plan/:user_id", auth, get_date_plan);

router.post("/push_notification", push_notification);

//Here is Admin Routes
// /api/date-card  it is coming main from back side
router.get("/api/getAllCategory", getAllCategory);
router.post("/api/AddCategory", CategoryVlidation, AddCategory);
router.post("/AddDateCardsByAdmin", AddDateCardsByAdmin); /// when admin will accept

router.post("/DateCardsByAdmin", DateCardsByAdmin); /// when admin will add his self
// router.put("/updateSubscriptionPlans", UpdateSubscriptionPlans); ///  admin update subscription plans

// router.get('/api/categoryEdit/:category_id', categoryEdit);
// router.post('/api/deletCategory/:category_id', deletCategory);
router.post("/deletUserPlan/:category_id", deletUsersPlans);

router.get("/api/getAllProduct", getAllProduct);
router.post("/api/addQuestion", addQuestion);
router.post(
  "/api/addPrdocut",
  upload.single("product_images"),
  ProductVlidation,
  addPrdocut
);
router.post("/api/deleteProduct/:product_id", deleteProduct);
router.get("/api/productEdit/:product_id", productEdit);
router.get("/api/productDetail/:product_id", productDetail);

router.post("/deletCategory/:category_id", deletCategory);
router.post("/deletSubscriptionPlans/:category_id", deletSubscriptionPlans);
router.post("/ForumListdelete/:category_id", ForumListdelete);

router.post("/editCategory/:category_id", categoryEdit);
router.post("/editSubscriptionPlans/:category_id", editSubscriptionPlans);
router.post("/push_notificationTest", push_notificationTest);

///  in app purchase
router.post("/purchase",
  // auth,
  purchase);
router.post("/checkSubcription", auth, checkSubcription);
router.post("/google_ads_rewards", auth, google_ads_rewards);
router.post("/ads_rewards_pts", auth, ads_rewards_pts);

//// ads mocker

router.post("/adsmockp", adsmockp);
router.get("/adsmock", adsmock);

///// deactivate Account
router.post("/deactivateAccount", deactivateAccount);

router.get("/get_sub_plan/:user_id",
  //  auth,
  get_sub_plan);

module.exports = router;
