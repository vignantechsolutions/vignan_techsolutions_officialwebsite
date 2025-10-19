# Email OTP Setup Guide

## 1. Install Dependencies

```bash
npm install nodemailer @types/nodemailer
```

## 2. Gmail Configuration

### Step 1: Enable 2-Factor Authentication
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Click "Security" in left sidebar
3. Under "Signing in to Google", click "2-Step Verification"
4. Follow setup instructions

### Step 2: Generate App Password
1. In Google Account Security settings
2. Click "2-Step Verification"
3. Scroll down to "App passwords"
4. Select app: "Mail"
5. Select device: "Other (Custom name)"
6. Enter: "Vignan TechSolutions"
7. Copy the 16-digit password

### Step 3: Update Environment Variables
Edit `.env.local` file:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-digit-app-password
```

## 3. Production Email Services

### SendGrid (Recommended)
1. Sign up at [SendGrid](https://sendgrid.com/)
2. Create API key
3. Add to `.env.local`:
```env
SENDGRID_API_KEY=your-sendgrid-api-key
```

### Resend (Modern Alternative)
1. Sign up at [Resend](https://resend.com/)
2. Create API key
3. Add to `.env.local`:
```env
RESEND_API_KEY=your-resend-api-key
```

## 4. Test Email Sending

Run the development server:
```bash
npm run dev
```

1. Go to feedback page
2. Click "Register"
3. Enter email and details
4. Check email for OTP
5. Enter OTP to complete registration

## 5. Troubleshooting

### Gmail Issues:
- Ensure 2FA is enabled
- Use App Password, not regular password
- Check spam folder
- Verify email in `.env.local`

### Network Issues:
- Check firewall settings
- Ensure port 587 is open
- Try different SMTP settings

## 6. Email Template Customization

Edit `lib/emailService.ts` to customize:
- Company branding
- Email styling
- OTP format
- Security messages