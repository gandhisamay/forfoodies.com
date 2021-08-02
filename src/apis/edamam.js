import axios from "axios";

const app_id = "2e3a83ad";
const app_key = "b5637aefb6772e3168103c63e8de8c63"

export default axios.create({
    baseURL: "https://api.edamam.com/api/recipes",
    params:{
        app_id : app_id,
        app_key : app_key,
        type: "public"
    },
});

