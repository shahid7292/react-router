import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css';
import {useHistory, useParams,useRouteMatch} from 'react-router-dom'

function Product() {
    const [post, setPost] = useState({})
    const [loading, setLoading] = useState(true)


    const params=useParams();
    console.log(params);

    const history=useHistory();

    const match=useRouteMatch("/products/2");
    console.log(match)
    const showbutton= match && match.isExact;


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            .then(response => {
                setPost(response.data)
                setTimeout(() => {
                    setLoading(false)
                }, 300)
            })
            .catch(error => {
                console.log(error)
            })
    }, [params.id]) 

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
                    {
                        showbutton && <h2>This is the post you are looking for</h2>
                    }
                </div>}
        </div>
    )
}

export default Product
