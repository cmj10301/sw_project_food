import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Detail(props) {
    console.log(props)
    let db = (await connectDB).db('forum');
    let result = await db.collection('post').findOne({_id : new ObjectId(props.params.id)})
    return (
        <div className="detail_page">
            <h4>제목 : {result.title}</h4>
            <h4>내용 : {result.content}</h4>
        </div>
    )
}