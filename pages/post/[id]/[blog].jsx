import Home from "@/pages"
import { useRouter } from "next/router"

function Blog() {
  const router = useRouter()
  const { id , blog} = router.query
  return (
    <div>
      <h1>Post: {id }</h1>
      <h1>Blog: {blog }</h1>
    </div>
  )
}

export default Blog