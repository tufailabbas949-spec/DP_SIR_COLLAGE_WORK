import {  useState } from "react"


function Usercard(props) {

    return (
        <>
            <div style={{
                height: '350px', width: '300px',borderRadius:'30px',
                 padding: '20px', backgroundColor: '#e2d7d7',
                 textAlign:'center',

            }}>
                <img src={props.pic_url} alt="pic is not available"
                 height={'200px'}
                  width={"200px"}
                    style={{ borderRadius: '50%' }}
                />
                <p>username : {props.username}</p>
                <p></p>
                <a href={props.github_url} target={"_blank"}>github id</a>
            </div>
        </>
    )
}
export default Usercard