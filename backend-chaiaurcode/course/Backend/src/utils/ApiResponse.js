// class ApiResponse {
//   constructor(statusCode, data, message = "success") {
//     this.statusCode = statusCode;
//     this.data = data;
//     this.message = message;
//     this.success = statusCode < 400;
//   }
// }

// export default ApiResponse;

class ApiResponse {
  constructor(statuscode, data, message = "success") {
    (this.statuscode = statuscode),
      (this.data = data),
      (this.message = message);
  }
}

export default ApiResponse;
