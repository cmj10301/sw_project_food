import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]"

export default async function Write() {
    let session = await getServerSession(authOptions)
    return (
        <div className="p-20">
            <h4>글작성</h4>
            <form action="/api/new" method="POST">
                <input type="text" defaultValue={""} name="title" placeholder="글 제목을 입력해주세요."></input>
                <input type="text" defaultValue={""} className="content_input" name="content" placeholder="글 내용을 입력해주세요."></input>
                <div className="재료_입력">
                    <input type="text" defaultValue={""} name="재료" placeholder="재료명을 입력하세요."/>
                    <input type="text" defaultValue={""} name="재료갯수" placeholder="재료 갯수를 입력하세요."/> <br/>
                    <input type="text" defaultValue={""} name="재료" placeholder="재료명을 입력하세요."/>
                    <input type="text" defaultValue={""} name="재료갯수" placeholder="재료 갯수를 입력하세요."/> <br/>
                </div>
                {
                    !session ? <input name="password" placeholder="비밀번호를 입력해주세요."/> : null
                }
                <button type="submit">글쓰기</button>
            </form>
        </div>
    )
}
