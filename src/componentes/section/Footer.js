import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer(){
    return(
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/vagner.bio/'><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/VagRodr'><FaGithub size={30}/></a></li>
                <li><a href='http://www.linkedin.com/in/vagnerlrg'><FaLinkedin size={30}/></a></li>
            </ul>
            <p>vagnerlrg@gmail.com</p>
            <p>Vagner Rodrigues © 2024</p>
        </div>
    )
}

export default Footer