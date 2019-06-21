const getDate = () =>{
    const date = new Date();
    const formatted = `${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2, "0")}-${(date.getDay().toString().padStart(2, "0"))} ${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`;
    return formatted
}
export default getDate()