# User Registration Apply
This feature is used to check the registrant's email. If the registrant's email has never been registered, an OTP will be sent to the registrant's email. The OTP serves to verify that the email really belongs to the registrant.

## Usage
- method: ```POST```
- path: ```/api/user/register/apply```
- body: 
```json
{
    "email": "insert email here",
    "password": "insert password here"
}
```