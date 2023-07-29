export const handleMenuParams = (id = '')=>{
    let preId = 0
    let subId = 0

    if(id !== ''){
        if(id.indexOf('-') !== -1){
            const idArr = id.split('-')
            preId = parseInt(idArr?.[0], 10)
            subId = parseInt(idArr?.[1], 10)
        } else {
            preId = parseInt(id, 10)
        }
    }

    return {
        preId,
        subId
    }
}