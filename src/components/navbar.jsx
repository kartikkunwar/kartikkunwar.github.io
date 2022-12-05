import { Box,Text,Button, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider } from "@chakra-ui/react";
import {HashLink as Link} from "react-router-hash-link"
import { Aboutme } from "../pages/about";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHandPointDown, faHandsPraying,faBars,faHome,faFileDownload} from "@fortawesome/free-solid-svg-icons";
import { ProjectPage } from "../pages/Project";
import { Skills } from "../pages/skills";
import { Contact } from "../pages/contact";



export const Navbar=()=>{
    const [navbar,setNavbar]=React.useState(false)
    const [screen,setScreen]=React.useState(false)
    const [size,setSize]=React.useState(window.innerWidth)
    
    

    const changeBg=()=>{
        if(window.scrollY>=60){
            setNavbar(true)
            setScreen(true)
        }else{
            setNavbar(false)
            setScreen(false)
        }
    }
    window.addEventListener("scroll",changeBg)

     return[
        <Box className="top" id="frst">
            <Box className={navbar?'navb active':'navb'}  flexDirection={{md:"row",lg:"row"}} justifyContent="space-around" alignItems='center' gap={{base:"5%",md:"10%",lg:'20%'}} fontSize={{base:"12px",md:"18px",lg:'22px'}}>
                <Box width="10%" display="flex"  justifyContent="flex start" >
                    <Link className="navlink" to="#frst" smooth>Home</Link> 
                </Box>
                <Box width="35%" display="flex" flexDirection={{md:"row",lg:"row"}} justifyContent="space-around" gap={{base:"5px",md:"10px",lg:"15px"}}>
                    <Link className="navlink" to="#abt" smooth>About</Link>
                    <Link className="navlink" to='#skill' smooth>Skills</Link>
                    <Link className="navlink" to="#project" smooth>Project</Link>
                    <Link className="navlink" to="#contact" smooth>Contact</Link>
                    <a href="kartik_kunwar_resume.pdf" className="navlink" download>Resume <FontAwesomeIcon icon={faFileDownload} color='white' fontSize={20}></FontAwesomeIcon></a>

                </Box>
            </Box>
            
            
            <Box className={screen?'navba active':'navba'}  flexDirection={{base:"row",md:"row",lg:"row"}} justifyContent="space-around" alignItems='center' gap={{base:"1%",md:"10%",lg:'20%'}} fontSize={{base:"18px",md:"18px",lg:'22px'}}>
                    <Menu >
                        <MenuButton as={Button} bgColor='black' >
                            <FontAwesomeIcon icon={faBars} color='white' fontSize={30}></FontAwesomeIcon>
                        </MenuButton>
                        <MenuList bgColor="white" color="black">
                            <a className="navlink" href="#abt" smooth><MenuItem>About</MenuItem></a>
                            <a className="navlink" href='#skill' smooth><MenuItem>Skills</MenuItem></a>
                            <a className="navlink" href="#project" smooth><MenuItem>Project</MenuItem></a>
                            <a className="navlink" href="#contact" smooth><MenuItem>Contact</MenuItem></a>
                        </MenuList>
                    </Menu>
                    <Box width="10%" display="flex"  justifyContent="flex start" >
                        <Link className="navlink" to="#frst" smooth><FontAwesomeIcon icon={faHome} color='white' fontSize={30}></FontAwesomeIcon></Link> 
                    </Box>
                </Box>
            
            <Box  color='white' position="absolute" top={{base:'60vh',md:'60vh',lg:'30vh'}} left='9.5%' display='flex' flexDirection='column' gap={{base:'5px',md:'7px',lg:'10px'}}>
                <Text fontSize='3xl' fontWeight='bold' textAlign='left'>Hello !! <FontAwesomeIcon icon={faHandsPraying} color='#7DA2A9' fontSize={30}></FontAwesomeIcon></Text>
                <Text textAlign='left' fontSize='2xl' fontWeight='bold'>i'm Kartik kunwar</Text>
                <Text textAlign='left'>You can Find my resume down here <FontAwesomeIcon icon={faHandPointDown} color='#7DA2A9' fontSize={20}></FontAwesomeIcon></Text>
                <a href="kartik_kunwar_resume.pdf" download><Button color='black' display='block' mt={{base:'10%', md:'15%',lg:'20%'}}>Resume</Button></a>
            </Box>
        </Box>,
        <Aboutme/>,
        <ProjectPage/>,
        <Skills/>,
        <Contact/>
     ]
}

// React.useEffect(()=>{
//     const variation=()=>{
//         setSize(window.innerWidth)
//         if(size<770){
//             setScreen(true)
//         }else if(size>=770){
//             setScreen(false)
//         }
//     }
//     window.addEventListener("resize",variation)
//     return()=>{
//         window.removeEventListener("resize",variation)
//     }
// },[size])
