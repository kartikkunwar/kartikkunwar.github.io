import { Box,Heading,Image,Text } from "@chakra-ui/react"
import AOS from 'aos';
import 'aos/dist/aos.css';


export const Skills=()=>{
    AOS.init();

    const skilldata=[
        {
            img:"https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg",
            title:"HTML 5",
            anim:'zoom-out-down'
        },
        {
            img:"https://chiranjeev-thapliyal.vercel.app/svg/css3.svg",
            title:"CSS 3",
            anim:'zoom-out-down'
        },
        {
            img:"https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg",
            title:"Javascript",
            anim:'zoom-out-down'
        },
        {
            img:"https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg",
            title:"React.Js",
            anim:'zoom-out-down'
        },
        {
            img:"https://chiranjeev-thapliyal.vercel.app/svg/redux.svg",
            title:"Redux",
            anim:'zoom-out-up'
        },
        {
            img:"https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg",
            title:"Node.Js",
            anim:'zoom-out-up'
        },
        {
            img:"https://chiranjeev-thapliyal.vercel.app/svg/git.svg",
            title:"Git",
            anim:'zoom-out-up'
        },
        {
            img:"https://chiranjeev-thapliyal.vercel.app/svg/mongodb.svg",
            title:"MongoDB",
            anim:'zoom-out-up'
        }
    ]
    return(
        <Box backgroundImage="https://i.pinimg.com/originals/0c/f7/c6/0cf7c64476fb686ab1635863e43f0f95.jpg" id='skill' >
           <Box>
            <Heading textDecoration='underline' pt='100px'>SKILLS</Heading>
           </Box>
           <Box width="60%" margin='auto'  mt='50px' display='grid' gridTemplateColumns={{base:'repeat(2,1fr)',md:'repeat(3,1fr)',lg:'repeat(4,1fr)'}} gap='10px' pb='100px'>
            {
                skilldata.map((el,ind)=>{
                    return(
                    <Box  display='flex' flexDirection='column' alignItems="center"  borderRadius='50%' p='20px' data-aos={el.anim} data-aos-duration="2000" data-aos-easing="ease-in-out">
                        <Image src={el.img} width='80%' height='80%'/>
                        <Text fontSize='20px' fontWeight='bold'>{el.title}</Text>
                    </Box>
                    )
                })
            }
           </Box>
        </Box>
    )
}
