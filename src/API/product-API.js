import axios from "axios";

export const getAllProducts = async () => {

    try {
        const { data } = await axios.get("/products");
        return data;
    } catch (err) {
        return err;
    }
}