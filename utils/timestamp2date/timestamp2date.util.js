const timestamp2date = (timestamp = 0) => {
    const d = new Date(timestamp)
    const year = d.getFullYear()
    const month = addZero(d.getMonth() + 1)
    const date = addZero(d.getDate())
    return `${year}-${month}-${date}`
}

module.exports = timestamp2date

const addZero = (number) => {
    number < 10 ? number = `0${number}`: number;
    return number
}

