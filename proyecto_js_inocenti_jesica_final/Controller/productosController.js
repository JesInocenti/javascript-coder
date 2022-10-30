const API = "./data/data.json";

const productosController = async () => {
    try {
        const response = await fetch(API);
        const data = await response.json();

        return data;
    } catch (error) {
        console.log("Hubo un error en la petición", error);
    }
}

export default productosController;