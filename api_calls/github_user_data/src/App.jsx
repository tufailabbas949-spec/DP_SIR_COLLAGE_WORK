import { useEffect, useState } from "react"
import Usercard from "./components/Usercard"

function App() {
  const [users, setusers] = useState([])
  useEffect(() => {
    async function api_data() {
      const res = await fetch('https://api.github.com/users')
      const data = await res.json()
      setusers(data)
    
    }
    api_data()
  }, [])
  return (
    <>
      <div style={{display:'flex',
        flexWrap:'wrap',gap:'30px',padding:"20px"
      }}>
        {
          users.map((users) => {
            return (
             <Usercard username={users.login}
                 github_url={users.html_url}
                 pic_url={users.avatar_url}
                />
            )
          })
        }
      </div>
    </>
  )
}


export default App