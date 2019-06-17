const getDate = () =>{
    const date = new Date();
    const formatted = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    return formatted
}
export default getDate()