# User Change Verify
This feature is used to verify that the change password request is actually made by the account owner.

## Usage
- method: ```POST```
- path: ```/api/user/change/verify```
- body: 
```json
{
    "otp": "insert otp here"
}
```