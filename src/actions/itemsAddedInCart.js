
export default {

    ItemsAddedInCart: async (payload, user_id) => {
        console.log("payload:", payload);
        console.log("user_id", user_id);
        // console.log("dateCard_name", payload.dateCard_name);
        // console.log("dateCard_description", payload.dateCard_description);
        // process.env.REACT_APP_API_URL + "date-card/get_all_date_cards"
        // fetch("/addedProductsInCart", {
        await fetch(process.env.REACT_APP_API_URL + "date-card/DateCardsByAdmin", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                // productsAddedInCart: action.itemAddinCart,
                // authId: action.authId

                dateCard_name: payload.dateCard_name,
                dateCard_description: payload.dateCard_description,
                user_id: user_id,
                ageToggle: payload.ageToggle

            }),

        }).then((resp) => {
            return resp.json().then((resp) => {
                console.log("resp:", resp);
                if (resp.status === 1) {
                    // console.log("resp.status:", resp.status);
                    alert("Date Cards are adding  successfully")

                }
                else if (resp.status === 0) {

                    alert("Amin could not share Date Cards.")
                    // console.log("resp_else:", resp);
                }
            })
        }).then((err) => {
            console.log("Amin could not share Date Cards.", err);
        })
    }

}
