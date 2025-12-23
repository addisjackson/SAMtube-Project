export default function CommentsList({comment}){
    return(
        <>
            <strong>{comment.author}</strong> comment:{comment.comment}
        </>
    )
}