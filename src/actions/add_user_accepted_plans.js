export default {
  // Add_user_accepted_plans: async (payload, ageToggle) => {
  Add_user_accepted_plans: async (payload) => {
    // console.log("payload._id", payload._id);
    // console.log("ageToggle:", ageToggle);
    await fetch(
      process.env.REACT_APP_API_URL + "date-card/AddDateCardsByAdmin",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          // productsAddedInCart: action.itemAddinCart,
          // authId: action.authId

          dateCard_name: payload.dateCard_name,
          dateCard_description: payload.dateCard_description,
          user_id: payload.user_id,
          dateCard_id:payload._id
          // ageToggle: payload.ageToggle
        }),
      }
    )
      .then((resp) => {
        return resp.json().then((resp) => {
          if (resp.status === 1) {
            // console.log("resp.status:", resp.status);
            alert("Date Card Added  successfully");
          } else if (resp.status === 0) {
            alert("Date Card Added successfully!");
            // console.log("resp_else:", resp);
          }
        });
      })
      .then((err) => {
        console.log(err);
      });
  },
};
