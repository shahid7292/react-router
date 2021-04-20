import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../App.css'

function Products() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPosts(response.data)
                setTimeout(() => {
                    setLoading(false)
                }, 360)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const postlist = posts.map(post => <Link to={`/products/${post.id}`} className="linkpost" key={post.id}> <li><h4>{post.title}</h4></li></Link>)

    return (
        <div className="shah2">
            <h1>Products</h1>

            {loading ? <h3 className="red">Loading...</h3> :
                <div className="prodback">
                    <ul>
                        {postlist}
                    </ul>
                </div>}


        </div>
    )
}

export default Products
