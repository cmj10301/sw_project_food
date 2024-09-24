export default function Write() {
    return (
        <div className="p-20">
            <h4>글작성</h4>
            <form action="/api/new" method="POST">
                <input name="title" placeholder="글 제목을 입력해주세요."></input>
                <input name="content" placeholder="글 내용을 입력해주세요."></input>
                <button type="submit">버튼</button>
            </form>
        </div>
    )
}