import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";


export const Navbar = () => {
  return (
    <div className="navbar">
      {/*Sidebar*/}
      <Sidebar />
      <div className="wrapper">
        <motion.span
        initial={{ opacity: 0, scale: 0.5}}
        animate={{ opacity: 1, scale: 1}}
        transition={{ duration: 0.5}}
        >Anshika Bhatt</motion.span>
        <div className="social">
         <a href="#"><img src="/github.png" alt="" /></a>
         <a href="#"><img src="/linkdin.png" alt="" /></a>
         <a href="#"><img src="/blog.jpg" alt="" /></a>
         <a href="#"><img src="/instagram.png" alt="" /></a>
        </div>
      </div>
    </div>
  )
}
export default Navbar;
