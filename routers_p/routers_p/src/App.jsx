import { Route,Routes } from "react-router-dom"
import {Home,About,Contect,Login} from "./pages"
import Nevbar from "./components/Nevbar"
import Layout from "./components/Layout"
import Details from "./components/nas_route/Details"
import DefaultErrorPage from "./components/nas_route/DefaultErrorPage"
function App(){
  

  return (
    <>
    {/* <div className="text-2xl bg-amber-500 block text-blue-700 mx-10 h-[200px] capitalize text-[100px]
    font-bold text-justify  absolute top-[500px] flex justify-center items-center p-5">navbar</div> */}
   
    <Routes >
      <Route path="/" element={<Layout/>} >
      <Route index element={<Home />}/>
      <Route path="/about" element={<About/>}>
         <Route  path="details" element={<Details />}/> 
      </Route>
      <Route  path="/contact" element={<Contect/>}/>
      <Route path="/login/:id" element={<Login />}/> 
      <Route path="*"   element={<DefaultErrorPage />} />

      </Route>
    </Routes>
    </>
  )
}
export default App