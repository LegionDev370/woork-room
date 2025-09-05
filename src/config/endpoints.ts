const ENDPOINTS = {
  auth: {
    sendOtp: () => `send-otp`,
    verifyOtp: () => `verify-otp`,
  },
  user: {
    checkEmail: () => `user/email-check`,
    profileQuestions: (stepNumber: number) =>
      `admin/user-profile/questions?step_number=${stepNumber}`,
  },
  socket: {
    chat: () => `/chat`,
  },
};
export default ENDPOINTS;
