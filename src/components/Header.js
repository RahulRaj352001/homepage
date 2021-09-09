// import React from "react";
// import logo from "../logo.svg";
// import { FaAlignRight } from "react-icons/fa";
// export default function Header() {
//     let isopen=false
//     function  HandleToggle(){
//          return isopen=!isopen
//       };
//   return (
//     <div>
//       <div id="header" >
//         <div className="navbar">
//           <div className="logo">
//             <a href="/" alt="Homepage" class="logo-1">
//               <img className="logo-img" src={logo} width="100%" height="120px"  alt="" />
//             </a>

//             <a href="/" className="logo-2">
//               A DIGITAL DESIGN AGENCY
//             </a>
//           </div>
//           <nav role="navigation" className="menu-items">
//           <button type="button" onClick={HandleToggle} className="nav-btn">
//               <FaAlignRight className="nav-icon" />
//             </button>
//             <ul id="menu-items" className={isopen?"toogleitems":"notoogleitems"}>
              
//               <li >
//                 <a  href="j"    >
//                   <div>WORK</div>
//                   <div class="bar--red link__bar"></div>
//                 </a>
//               </li>
//               <li >
//                 <a
                  
//                   data-ix="link-line-hover"
//                   href="/company"
//                 >
//                   <div>COMPANY</div>
//                   <div class="bar--purple link__bar"></div>
//                 </a>
//               </li>
//               <li >
//                 <a
                 
//                   data-ix="link-line-hover"
//                   href="/process"
//                 >
//                   <div>PROCESS</div>
//                   <div class="bar--yellow link__bar"></div>
//                 </a>
//               </li>
//               <li className="nav-item4 btn">
//                 <a
//                   className="bhover"
//                   data-ix="link-line-hover"
//                   href="/contact"
//                 >
//                   <div>CONTACT US</div>
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//        </div>

//     </div>
//   );
// }
import React, { Component } from "react";
import logo from "../logo.svg";
import { FaAlignRight } from "react-icons/fa";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  HandleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <a href=" " to="/">
              <img className="logo" src={logo} alt="resort" width="150px" height="120px" />

            </a>
            <a href="/" className="logo2">A DIGITAL DESIGN AGENCY</a>
            <button type="button" onClick={this.HandleToggle} className="nav-btn">
              <FaAlignRight className="nav-icon" />
            </button>

          </div>
        <div className="shift">
        <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
              <li><a href=" " to="/">work</a></li>
              <li><a href=" " to="/rooms"> company</a></li>
              <li><a href=" " to="/">process</a></li>
              <li className="contact"><a href=" " to="/rooms"> contact </a></li>
          </ul>
        </div>
        </div>
      </nav>
    );
  }
}
