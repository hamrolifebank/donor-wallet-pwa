let tries = 5;
export default function handler(req, res) {
  if (req.method === "POST") {
    const otpProvidedByUser = req.body.otp;
    if (otpProvidedByUser) {
      const matchedOtp = 1234 === Number(otpProvidedByUser);

      if (!matchedOtp && tries !== 0) {
        tries--;
        res
          .status(400)
          .json({ msg: `You entered wrong otp, you have ${tries} more tries` });
      } else if (!matchedOtp && tries <= 1) {
        res.status(400).json({ msg: "Please contact our team" });
      } else {
        res.status(200).json({ msg: "Phone number successfully verified" });
      }
    }
  }
}
