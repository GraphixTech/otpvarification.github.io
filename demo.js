document.addEventListener('DOMContentLoaded', function () {
    const verificationForm = document.getElementById('verification-form');
    const emailInput = document.getElementById('email');
    const sendOTPButton = document.getElementById('send-otp');
    const otpContainer = document.getElementById('otp-container');
    const otpInput = document.getElementById('otp');
    const verifyButton = document.getElementById('verify');
    const message = document.getElementById('message');

    let otpSent = false;

    sendOTPButton.addEventListener('click', function (e) {
        e.preventDefault();

        if (!otpSent) {
            // Generate a random OTP (you may use a library for better security)
            const generatedOTP = Math.floor(1000 + Math.random() * 9000);

            // Simulate sending OTP via email (in a real application, you would send it via email)
            console.log(`OTP sent to ${emailInput.value}: ${generatedOTP}`);

            otpSent = true;
            otpContainer.style.display = 'block';
        }
    });

    verifyButton.addEventListener('click', function (e) {
        e.preventDefault();

        if (otpInput.value === '') {
            message.textContent = 'Please enter the OTP.';
            return;
        }

        const enteredOTP = parseInt(otpInput.value);

        // Replace this with your logic to verify the OTP
        if (enteredOTP === generatedOTP) {
            message.textContent = 'Email verified successfully!';
            // You can redirect the user to another page or perform further actions here.
        } else {
            message.textContent = 'Invalid OTP. Please try again.';
        }
    });
});
