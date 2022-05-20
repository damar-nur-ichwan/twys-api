# User Forgot Verify
This feature is used to verify that the password reset request is actually made by the account owner.

## Usage
- method: ```POST```
- path: ```/api/user/forgot/verify```
- body: 
```json
{
    "otp": "insert otp here"
}
```