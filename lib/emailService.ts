const nodemailer = require('nodemailer')

let transporter: any = null

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})
  }
  return transporter
}

export async function sendOTPEmail(email: string, otp: string) {
  const transporter = getTransporter()
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Vignan TechSolutions - Email Verification OTP',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd;">
        <div style="background: linear-gradient(135deg, #1E3A8A, #06B6D4); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">🚀 Vignan TechSolutions</h1>
          <p style="color: #E0F2FE; margin: 10px 0 0 0;">Innovation Meets Learning</p>
        </div>
        <div style="padding: 40px 30px; background: #ffffff;">
          <h2 style="color: #1E3A8A; margin-bottom: 20px;">📧 Email Verification Required</h2>
          <p style="color: #333; font-size: 16px; line-height: 1.6;">Welcome to Vignan TechSolutions! Please use the OTP below to complete your registration:</p>
          <div style="background: linear-gradient(135deg, #1E3A8A, #06B6D4); color: white; padding: 25px; text-align: center; font-size: 32px; font-weight: bold; letter-spacing: 8px; margin: 30px 0; border-radius: 10px; box-shadow: 0 4px 15px rgba(30, 58, 138, 0.3);">
            ${otp}
          </div>
          <div style="background: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; margin: 20px 0; border-radius: 5px;">
            <p style="color: #92400E; margin: 0; font-weight: bold;">⏰ Important:</p>
            <p style="color: #92400E; margin: 5px 0 0 0;">This OTP will expire in 5 minutes for security reasons.</p>
          </div>
          <p style="color: #666; font-size: 14px; margin-top: 30px;">If you didn't request this verification, please ignore this email. Your account security is important to us.</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="color: #999; font-size: 12px; text-align: center;">© 2024 Vignan TechSolutions | Empowering Tech Minds</p>
        </div>
      </div>
    `
  }

  await transporter.sendMail(mailOptions)
}

export async function sendAcknowledgmentEmail(email: string, name: string, message: string) {
  const transporter = getTransporter()
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Thank You for Your Project Inquiry - Vignan TechSolutions',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd;">
        <div style="background: linear-gradient(135deg, #1E3A8A, #06B6D4); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">🚀 Vignan TechSolutions</h1>
          <p style="color: #E0F2FE; margin: 10px 0 0 0;">Innovation Meets Learning</p>
        </div>
        <div style="padding: 40px 30px; background: #ffffff;">
          <h2 style="color: #1E3A8A; margin-bottom: 20px;">Dear ${name},</h2>
          <p style="color: #333; font-size: 16px; line-height: 1.6;">Thank you for your interest in our services! We have received your project inquiry and our team will review it shortly.</p>
          
          <div style="background: #F0F9FF; border-left: 4px solid #06B6D4; padding: 20px; margin: 20px 0; border-radius: 5px;">
            <h3 style="color: #1E3A8A; margin: 0 0 10px 0;">Our Response:</h3>
            <p style="color: #333; margin: 0; white-space: pre-line;">${message}</p>
          </div>
          
          <p style="color: #666; font-size: 14px; margin-top: 30px;">We will get back to you within 24 hours with a detailed proposal. If you have any urgent questions, feel free to contact us.</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="color: #999; font-size: 12px; text-align: center;">© 2024 Vignan TechSolutions | Empowering Tech Minds</p>
        </div>
      </div>
    `
  }

  await transporter.sendMail(mailOptions)
}