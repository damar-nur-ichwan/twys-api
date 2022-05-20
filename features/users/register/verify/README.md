# User Registration Verify
This feature is used to verify the account, by entering the code that has been sent to the registrant's email.

## Usage
- method: ```POST```
- path: ```/api/user/register/verify```
- body: 
```json
{
    "otp": "insert otp here"
}
```