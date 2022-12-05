import { Box,Heading,Text,Image } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import img1 from "../image/kartik.jpg"


export const Aboutme=()=>{
    return(
        <Box backgroundImage="https://i.pinimg.com/originals/0c/f7/c6/0cf7c64476fb686ab1635863e43f0f95.jpg" height='100vh' id="abt">
           <Box>
            <Heading textDecoration='underline' pt='100px'>About me</Heading>
           </Box>
           <Box  width={{base:"90%",md:"90%",lg:"70%"}} margin='auto' mt='60px' display={{base:"block",md:"block",lg:"flex"}}  gap='10%'>
            <Box  width="30%" display='flex' alignItems='center' justifyContent='center' margin='auto'>
                <Image
                    borderRadius='full'
                    width={{base:'200px',md:'150px',lg:'300px'}}
                    height={{base:"100px",md:"200px",lg:'300px'}}
                    src={img1}
                    alt='kartik kunwar'
                />
            </Box>
            <Box  width={{base:"100%",md:"70%",lg:"60%"}} textAlign="start" display='flex' margin='auto'  flexDirection='column' gap="10px">
                <Box  mt='10%'><Text fontSize='2xl'>Hi,</Text></Box>
                <Box  display='flex' gap="10px">
                    <Text fontSize={{base:'16px',md:'17px',lg:'20px'}} fontWeight='bold'>I am Kartik and </Text>
                    <Text className="typwrt" fontSize={{base:'16px',md:'17px',lg:'20px'}}>
                        <Typewriter  options={{
                                autoStart:true,
                                loop:true,
                                delay:40,
                                strings:[
                                    "I'm a Full Stack Web Developer",
                                    "I'm a Problem Solver",
                                    "I'm a Coder"
                                ]
                            }}/>
                    </Text>
                    
                </Box>
                <Box w='100%' ><Text fontSize={{base:'18px',md:'22px',lg:'22px'}}>
                Aspiring full Stack MERN Developer. I love to make projects which are helpful for masses and serve as a great helpful entity.</Text></Box>
                </Box>
           </Box>
        </Box>
    )
}


// boxSize={{base:"130px",md:"200px",lg:"300px"}}