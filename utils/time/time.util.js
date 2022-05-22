const { default: axios } = require("axios")

async function time(url=''){
    try{
        //get time
        let res = await axios.get(url)
    
        //build output
        const datetime = res.data.datetime
        const newRes = datetime.substring(0,22).split('T')
        const date = newRes[0].split('-')
        const timestamp = (new Date(date[0],date[1]-1,date[2],newRes[1].split(':')[0],newRes[1].split(':')[1],newRes[1].split(':')[2].split('.')[0],newRes[1].split(':')[2].split('.')[1])).getTime()
        
        //return
        const output = {
            timestamp,
            date: `${date[0]}-${date[1]}-${date[2]}`,
            datetime
        }
        return output

    } catch (err){
        await time(url)
    }
}

module.exports=time