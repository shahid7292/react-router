import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css';
import {useHistory} from 'react-router-dom'

function Product({match}) {
    const [post, setPost] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
            .then(response => {
                setPost(response.data)
                setTimeout(() => {
                    setLoading(false)
                }, 300)
            })
            .catch(error => {
                console.log(error)
            })
    }, [match.params.id])

    const history=useHistory();

    const handleClick=()=>{
        console.log("clicked")
        history.push("/products")
    }

    return (
        <div className="shah2">
            {loading ? <h3 className="red">Loading...</h3> :
                <div className="postcontainer">
                    <button onClick={handleClick}>{"Go back to products >>>"}</button>
                    <h3 className="posttitle">{post.title}</h3>
                    <h3 className="postbody">{post.body}</h3>
                </div>}
        </div>
    )
}

export default Product
