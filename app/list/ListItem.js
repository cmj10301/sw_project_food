'use client'

import Link from "next/link"
import { useState } from "react"

export default function ListItem({result}) { 
    console.log(JSON.parse(result).length)
    let [좋아요, 좋아요변경] = useState(new Array(result.length).fill(0))
    console.log(result)
    return (
    <div className="list-bg">
        {
            JSON.parse(result).map((a, i) => {
                console.log(a)
                return (
                    <div className="list-item" key={i}>
                        <Link href={'/detail/' + a._id}>
                          <h4>{a.title}</h4>
                        </Link>
                        <Link href={'/edit/' + a._id}>수정</Link><br></br>
                        <span onClick={(e) =>{
                            fetch('/api/delete', {method : 'DELETE', body : a._id})
                            .then((r) => r.json())
                        }}>삭제</span> <br></br>
                        <span onClick={() => {
                            let copy =  [...좋아요]
                            copy[i]++
                            좋아요변경(copy)
                        }}>좋아요 : {좋아요[i]}</span>
                    </div>
                )
            })
        }
      </div>
    )
}