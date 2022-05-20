# User Forgot Apply
This feature is used to check the user's email. If the user's email has been registered, an OTP will be sent to the user's email. The OTP serves to verify that the email really belongs to the user.

## Usage
- method: ```POST```
- path: ```/api/user/forgot/apply```
- body: 
```json
{
    "email": "insert email here",
    "password": "insert password here"
}
```