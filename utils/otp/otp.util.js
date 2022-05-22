//generate otp
const generate = (timestamp = 0) => {
    let output = timestamp.toString()
    output = output.substring(output.length-1,output.length-7)
    return output
}

module.exports = {
    generate
}