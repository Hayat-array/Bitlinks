"use client"
import Link from 'next/link'
import React, {useState} from 'react'
const Shorten = () => {
const [url, setUrl] = useState("")
const [shorturl, setshorturl] = useState("")
const [generated, setGenerated] = useState("")
const handleChange = (first)=>{second}
// const handleChange = (e) => {
//     setUrl(e.target.value);
//   };
const generate = () =>{
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "url": url,
  "shorturl": shorturl
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("/api/generate", requestOptions)
  .then((response) => response.json())
  .then((result) =>{ 
    
    setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
    setUrl("")
    setshorturl("")
    console.log(result)
    alert(result.message)
  })
  .catch((error) => console.error(error));    
}
return (
    <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
        <h1 className='font-bold text-2xl'>Generate your short URLs</h1>
        <div className='flex flex-col gap-2'>
            <input type="text" 
            placeholder='Enter Your URL'
            className='px-4 py-2 bg-white focus:outline-purple-600 rounded-md'
            value={url}
            onChange={e=>{setUrl(e.target.value)}}/>

            <input type="text" 
            className='px-4 py-2 bg-white focus:outline-purple-600 rounded-md'
            placeholder='Enter Your Preferred Short URL text' 
            value={shorturl}
            onChange={e=>{setshorturl(e.target.value)}}/>
            <button onClick={generate} className='p-3 py-1 text-white cursor-pointer my-3 bg-purple-600 rounded-lg'>Generate</button>
        </div>
        {generated &&<>
         <span className="font-bold">Your Link</span> <code> <Link href={generated} target='_blank'>{generated}</Link>
      </code></>}
    </div>
  )
}

export default Shorten
