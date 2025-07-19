const Razorpay = require("razorpay");

// Commented out Razorpay initialization since environment variables are not set
// exports.instance = new Razorpay({
// 	key_id: process.env.RAZORPAY_KEY,
// 	key_secret: process.env.RAZORPAY_SECRET,
// });

// Temporary mock instance to prevent import errors
exports.instance = {
  orders: {
    create: async () => {
      throw new Error("Razorpay not configured. Please set up RAZORPAY_KEY and RAZORPAY_SECRET environment variables.");
    }
  }
};
