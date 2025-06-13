import * as typesServices from "../services/typesServices.js";

import ctrlWrapper from "../helpers/ctrlWrapper.js";

const getTypesController = async(req, res)=> {
    const result = await typesServices.getTypes();

    res.json(result);
}

export default {
    getTypesController: ctrlWrapper(getTypesController),
}