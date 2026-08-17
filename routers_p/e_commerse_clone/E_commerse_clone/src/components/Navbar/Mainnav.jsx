import React from 'react'
import Navbar_1 from './Navbar_1'
import Navbar_small from './Navbar_small'
import Navigate from './navigate'
function Mainnav() {
  return (
    <div>
      <Navbar_small />
      <Navbar_1 />
      <Navigate />
    </div>
  )
}
export default Mainnav