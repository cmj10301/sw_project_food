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
                        <span>좋아요 : {a.like?a.like:0}</span>
                    </div>
                )
            })
        }
      </div>
    )
}