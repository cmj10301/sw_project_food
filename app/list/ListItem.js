'use client'

import Link from "next/link"

export default function ListItem({result}) { 
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
                        }}>삭제</span>
                        <p>1월 1일</p>
                    </div>
                )
            })
        }
      </div>
    )
}