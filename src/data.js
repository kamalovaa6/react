import React from "react";
import { useEffect, useState } from "react";

function dataProducts() {

    const [products, setUsers] = useState([])

    useEffect(()=>{
        fetch("https://646bafb47d3c1cae4ce42749.mockapi.io/products")
        .then(res => res.json())
        .then((data) => {
            setUsers(data)
            console.log(data)
        })
    }, [])

    return products

}

export default dataProducts