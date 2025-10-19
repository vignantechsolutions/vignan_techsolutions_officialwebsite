const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

async function testEmail() {
  console.log('Testing email configuration...');
  
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('❌ EMAIL_USER and EMAIL_PASS must be set in .env.local');
    return;
  }

  const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  try {
    // Verify connection
    await transporter.verify();
    console.log('✓ SMTP connection verified');

    // Send test email
    const testOTP = '123456';
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to self for testing
      subject: 'Test OTP - Vignan TechSolutions',
      html: `
        <h2>Test Email</h2>
        <p>Your test OTP is: <strong>${testOTP}</strong></p>
        <p>If you received this, email configuration is working!</p>
      `
    });

    console.log('✓ Test email sent successfully');
    console.log('Message ID:', info.messageId);
    
  } catch (error) {
    console.error('❌ Email test failed:', error.message);
    
    if (error.code === 'EAUTH') {
      console.log('\nTroubleshooting:');
      console.log('1. Enable 2-Factor Authentication on Gmail');
      console.log('2. Generate App Password (not regular password)');
      console.log('3. Use the 16-digit App Password in .env.local');
    }
  }
}

testEmail();