export default {
  SubscriptionPlansAdd: async (payload, user_id) => {
    console.log("payload:", payload);
    console.log("user_id:", user_id);
    await fetch(process.env.REACT_APP_API_URL + "date-card/subscriptionPlans", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        subscription_title: payload.subscription_title,
        subscription_description: payload.subscription_description,
        subscription_price: payload.subscription_price,
        user_id: user_id,
      }),
    })
      .then((resp) => {
        return resp.json().then((resp) => {
          if (resp.status === 1) {
            alert("Subscription plans are adding  successfully");
          } else if (resp.status === 0) {
            alert("Failed Adding Subscription plans");
          }
        });
      })
      .then((err) => {
        console.log(err);
      });
  },
};
