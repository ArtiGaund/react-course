// these hooks purely return the js that's why its extension is js
import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [ data, setData ] = useState({})
    useEffect(() => {
        // API call and convert the string data into json 
        let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data)
    },[currency])
    console.log(data)
    return data
}

export default useCurrencyInfo;