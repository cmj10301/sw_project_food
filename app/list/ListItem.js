'use client'

import Link from "next/link"

export default function ListItem({result}) { 
    return (
    <div className="list-bg">
        {
            JSON.parse(result).map((a, i) => {
                return (
                    <div className="list-item" key={i}>
                        <Link href={'/detail/' + a._id}>
                          <h4>{a.title}</h4>
                        </Link>
                        <Link href={'/edit/' + a._id}>수정</Link><br></br>
                        <span onClick={(e) =>
                            fetch('/api/delete', {method : 'DELETE', body : a._id})
                            .then((r) => r.json())
                            .then(() => {
                                e.target.closest('.list-item').classList.add('hidden');
                            })
                        }>삭제</span>
                        <br></br>
                        
                        <span>좋아요 : {a.like?a.like:0}</span>
                    </div>
                )
            })
        }
      </div>
    )
}