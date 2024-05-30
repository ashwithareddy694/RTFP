import React from "react";

const App = () => {
  const [user, setUser] = useState([])
  const getUser() => {
    fetch("/api/user")
      .then(res => res.json())
      .then(json => set(json))
  }
  useEffect(() => {
    getUser()
  }, [])
  return (
    <div>
      {user.map(data)=>{
        <h1>{data.name</h1>
      }}
    </div>
  )
}

export default App