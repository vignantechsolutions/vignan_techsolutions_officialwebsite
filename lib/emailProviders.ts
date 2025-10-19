// Alternative email providers for production

// SendGrid
export async function sendOTPWithSendGrid(email: string, otp: string) {
  const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email }] }],
      from: { email: 'noreply@vignantechsolutions.com' },
      subject: 'Email Verification OTP',
      content: [{
        type: 'text/html',
        value: `Your OTP is: <strong>${otp}</strong>`
      }]
    })
  })
  return response.ok
}

// Resend
export async function sendOTPWithResend(email: string, otp: string) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: 'noreply@vignantechsolutions.com',
      to: email,
      subject: 'Email Verification OTP',
      html: `Your OTP is: <strong>${otp}</strong>`
    })
  })
  return response.ok
}