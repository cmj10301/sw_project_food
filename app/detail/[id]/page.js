import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { like } from "@/pages/api/like";
import HeartBtn from "./heartBtn";


export default async function Detail(props) {
    let db = (await connectDB).db('forum');
    let result = await db.collection('post').findOne({_id : new ObjectId(props.params.id)})
    
    let _id = result._id.toString();

    async function like_(formData) {
        'use server'
        like(_id,result.like)
        revalidatePath(`/detail/${props.params.id}`)
    }

    async function edit(formData) {
        
    }

    async function del(formData) {
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
                <HeartBtn count={result.like}></HeartBtn>
            </form>
            
            {/* <form action={edit}>
            </form>

            <form action={del}>
            </form> */}

            
        </div>
    )
}