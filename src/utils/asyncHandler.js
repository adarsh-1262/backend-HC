const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
        .catch((err) => next(err));
    }
};



export { asyncHandler};


// const asyncHandler = () =>{}
// const asyncHandler = (fn) => () => {}                        
// const asyncHandler = (fn) => async() => {}



// TRY-CATCH BLOCK:---->

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message || "Internal Server Error",
//         })
//         console.log("MONGODB connection FAILED: ", error);
//     }
// }