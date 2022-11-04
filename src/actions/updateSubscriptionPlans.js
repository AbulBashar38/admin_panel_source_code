export default {
  UpdateSubscriptionPlans: async (payload, plan_card_id) => {
    console.log("payload:", payload);
    console.log("user_id:", plan_card_id);
    await fetch(
      process.env.REACT_APP_API_URL + "date-card/updateSubscriptionPlans",
      {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
        },

        // body: JSON.stringify({
        //   subscription_title: payload.subscription_title,
        //   subscription_description: payload.subscription_description,
        //   subscription_price: payload.subscription_price,
        // //   user_id: user_id,
        // }),
        body: JSON.stringify(payload, plan_card_id),
      }
    )
      .then((resp) => {
        return resp.json().then((resp) => {
          if (resp.status === 1) {
            alert("Subscription plans are updating successfully");
          } else if (resp.status === 0) {
            alert("Failed Update Subscription plans");
          }
        });
      })
      .then((err) => {
        console.log(err);
      });
  },
};
