import { Box,Text,Button } from "@chakra-ui/react";
import {HashLink as Link} from "react-router-hash-link"
import { Aboutme } from "../pages/about";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHandPointDown, faHandsPraying} from "@fortawesome/free-solid-svg-icons";


export const Navbar=()=>{
    const [navbar,setNavbar]=React.useState(false)

    const changeBg=()=>{
        if(window.scrollY>=60){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }
    window.addEventListener("scroll",changeBg)

     return[
        <Box className="top">
            <Box className={navbar?'navb active':'navb'} display='flex' flexDirection={{base:"column",md:"row",lg:"row"}} justifyContent="space-around" alignItems='center' gap={{base:"5%",md:"10%",lg:'20%'}} fontSize={{base:"12px",md:"18px",lg:'22px'}}>
                <Box width="10%" display="flex"  justifyContent="flex start" >
                    <Link className="navlink">Home</Link> 
                </Box>
                <Box width="35%" display="flex" flexDirection={{base:"column",md:"row",lg:"row"}} justifyContent="space-around" gap={{base:"5px",md:"10px",lg:"15px"}}>
                    <Link className="navlink" to="#abt" smooth>About</Link>
                    <Link className="navlink">Skills</Link>
                    <Link className="navlink">Project</Link>
                    <Link className="navlink">Contact</Link>
                    <Link className="navlink">Resume</Link>
                </Box>
            </Box>
            <Box  color='white' position="absolute" top='14%' left='9.5%' display='flex' flexDirection='column' gap='10px'>
                <Text fontSize='3xl' fontWeight='bold' textAlign='left'>Hello !! <FontAwesomeIcon icon={faHandsPraying} color='#c5aa6a' fontSize={30}></FontAwesomeIcon></Text>
                <Text textAlign='left' fontSize='2xl'>i'm Kartik kunwar</Text>
                <Text textAlign='left'>You can Find my resume down here <FontAwesomeIcon icon={faHandPointDown} color='#c5aa6a' fontSize={20}></FontAwesomeIcon></Text>
                <Button color='black' display='block' mt='70%'>Resume</Button>
            </Box>
        </Box>,
        <Aboutme/>
     ]
}