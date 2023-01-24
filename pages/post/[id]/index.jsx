import Link from "next/link"
import Home from "@/pages"
import { useRouter } from "next/router"



function Post() {
  const router = useRouter()
  const { id } = router.query
  return (
    <div>
      <Home />
      <h1>Post: {id}</h1>

      <ul>
        <li>
          <Link href="/post/[id]/[blog]" as={`/post/${id}/1`}>1-block</Link>
        </li>
        <li>
          <Link href="/post/[id]/[blog]" as={`/post/${id}/2`}>2-block</Link>
        </li>
        <li>
          <Link href="/post/[id]/[blog]" as={`/post/${id}/3`}>3-block</Link>
        </li>
      </ul>
    </div>
  )
}

export default Post