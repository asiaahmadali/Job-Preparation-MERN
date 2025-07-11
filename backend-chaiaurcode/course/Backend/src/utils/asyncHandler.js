const asyncHandler = (fn) => async (req, res, next) => {
  try {
    return await fn(req, res, next);
  } catch (error) {
    res.send(error.code || 500).json({
      success: false,
      message: error.message,
    });
  }
};

export default asyncHandler;

// const asyncHandler=(requesthandlerfun)=>{
//   (req,res,next)=>{
//     Promise.resolve(()=>{
//         requesthandlerfun(req,res,next);
//     })
//     .reject((err)=>{
//       console.log(err)
//     })
//   }
// }
// export default asyncHandler;
