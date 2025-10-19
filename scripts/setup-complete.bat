@echo off
echo ========================================
echo   Vignan TechSolutions Email OTP Setup
echo ========================================
echo.

echo Step 1: Installing dependencies...
call install-email-deps.bat

echo.
echo Step 2: Testing email configuration...
node test-email.js

echo.
echo Step 3: Setup complete!
echo.
echo ✓ Email OTP system is ready
echo ✓ Check SETUP_EMAIL_OTP.md for configuration
echo ✓ Run 'npm run dev' to start application
echo.
pause