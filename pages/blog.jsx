import { useEffect } from "react"


function Blog() {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
    .then((data)=> console.log(data))
  })
  
  return (
    <div>
      <h1>blog</h1>
    </div>
  )
}

export default Blog