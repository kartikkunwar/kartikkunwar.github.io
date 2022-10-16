import { Box,Heading,Text,Image } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import img1 from "../image/kartik.jpg"


export const Aboutme=()=>{
    return(
        <Box backgroundImage="https://i.pinimg.com/originals/0c/f7/c6/0cf7c64476fb686ab1635863e43f0f95.jpg" height='100vh' id="abt">
           <Box>
            <Heading textDecoration='underline' pt='100px'>About me</Heading>
           </Box>
           <Box  width='70%' margin='auto' mt='100px' display='flex' gap='10%'>
            <Box  width="30%" display='flex' alignItems='center' justifyContent='center'>
            <Image
                borderRadius='full'
                boxSize='350px'
                src={img1}
                alt='Dan Abramov'
            />
            </Box>
            <Box  width="60%" textAlign="start" display='flex'  flexDirection='column' gap="10px">
                <Box  mt='10%'><Text fontSize='2xl'>Hi,</Text></Box>
                <Box  display='flex' gap="10px">
                    <Text fontSize='20px'>I am Kartik and  </Text>
                    <Text className="typwrt">
                        <Typewriter  options={{
                                autoStart:true,
                                loop:true,
                                delay:40,
                                strings:[
                                    "I'm a Front End Developer",
                                    "I'm a Problem Solver",
                                    "I'm a Coder"
                                ]
                            }}/>
                    </Text>
                    
                </Box>
                <Box ><Text>
                Aspiring full Stack MERN Developer. I love to make projects which are helpful for masses and serve as a great helpful entity.</Text></Box>
                </Box>
           </Box>
        </Box>
    )
}