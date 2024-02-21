import {asyncHandler} from "../utils/asynchandler.js";

const registerUser = asyncHandler( async (req, res) =>{
    res.status(200).json({
        message: "okk, this is my first response on postman!!"
    })
})

export{registerUser}