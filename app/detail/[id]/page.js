import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { like } from "@/pages/api/like";
import Link from "next/link";
import Delete_btn from "./delete_btn";

export default async function Detail(props) {
    console.log(props.params.id)
    let db = (await connectDB).db('forum');
    let result = await db.collection('post').findOne({_id : new ObjectId(props.params.id)})

    let _id = props.params.id.toString()

    async function like_(formData) {
        'use server'
        like(_id,result.like)
        revalidatePath(`/detail/${props.params.id}`)
    }
    
    return (
        <div className="detail_page">
            <h2>{result.title}</h2>
            <p>{result.content}</p>
            <h4>재료</h4>
            {
                result.재료.map((a,i) => {
                    return (
                        <div key={i}>
                            <span style={{display:"inline-block"}}>{a}</span>
                            <span>{result.재료갯수[i]}</span>
                        </div>
                    )
                })
            }

            <form action={like_}>
                <button>좋아요</button>
                <span>{result.like}</span>
            </form>
            <br/>

            <Link href={'/edit/' + props.params.id}>수정</Link><br/>
            <Delete_btn id={props.params.id}></Delete_btn>
        </div>
    )
}