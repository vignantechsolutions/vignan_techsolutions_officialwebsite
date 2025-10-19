@echo off
echo Installing Email OTP Dependencies...
echo.

echo Installing nodemailer...
npm install nodemailer

echo Installing TypeScript types...
npm install @types/nodemailer

echo.
echo ✓ Dependencies installed successfully!
echo.
echo Next steps:
echo 1. Configure Gmail App Password
echo 2. Update .env.local file
echo 3. Test email sending
echo.
echo See SETUP_EMAIL_OTP.md for detailed instructions
pause