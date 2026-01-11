import axios from "axios";

export const getAllCategories = async () => {

    try {
        const { data } = await axios.get("/categories");
        console.log(data);
        return data;
    } catch (err) {
        return err;
    }
}