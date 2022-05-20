# User Change Apply
This feature is used to check the user's email. If the user's email has been registered, an OTP will be sent to the user's email. The OTP serves to verify that the email really belongs to the user.

## Usage
- method: ```POST```
- path: ```/api/user/change/apply```
- body: 
```json
{
    "password": "insert password here"
}
```