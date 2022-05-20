# Utility: OTP (One-Time Password)
## Generate
This utility module is used to generate OTP from timestamp input.
### Usage Example

```js
const otp = require('./otp')

const timestamp = 1650128025

console.log(otp(timestamp))
//output: 128025
```