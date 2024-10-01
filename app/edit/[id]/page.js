import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function Edit(props) {

    const db = (await connectDB).db("forum")
    let result = await db.collection('post').findOne({_id: new ObjectId(props.params.id)})

    return (
        <div className="p-20">
            <h4>수정페이지</h4>
            <form action="/api/edit" method="POST">
                <input name="title" defaultValue={result.title}></input>
                <input name="content" defaultValue={result.content}></input>
                <input style={{display:'None'}}name="_id" value={result._id.toString()}></input>
                <button type="submit">버튼</button>
            </form>
        </div>
    )
}