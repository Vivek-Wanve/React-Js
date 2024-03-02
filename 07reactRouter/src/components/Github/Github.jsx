import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


function Github(){

    const data = useLoaderData();

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch("https://api.github.com/users/Vivek-Wanve")
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])

    return (
        <div className="text-center bg-gray-600 text-white p-4 m-4 text-3xl">
            Github Followers: {data.followers} 
            <img src={data.avatar_url} alt="Github Image" width={300} className="my-4 mx-auto"/>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/Vivek-Wanve")
    return response.json()
}
