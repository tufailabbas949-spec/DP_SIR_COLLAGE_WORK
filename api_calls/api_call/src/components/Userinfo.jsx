

function Userinfo(props) {

    return (
        <>
            <div style={{
                height: "300px",
                width: "250px",
                backgroundColor: "#00a56b8e",
                padding:'5px'
            }}>
                <h1>user info </h1>
                <p>name : {props.name}</p>
                 <p>usernmae : {props.username}</p>
                <p>E-mail : {props.e_mail}</p>
                <p>address : {props.address}</p> 
            </div>
        </>
    )
}
export default Userinfo