import { Box,Text,Image,Button, Heading } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import Slider from "react-slick"
import GitHubCalendar from "react-github-calendar"
import { Stats } from "../components/stats"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons"

const dat=[
    {
        image:[
            {
                input:"https://i.im.ge/2022/09/20/1sJ2KS.a1.png"
            },
            {
                input:"https://user-images.githubusercontent.com/103635204/195377891-45ee7d09-7a47-4594-a1a9-1aa6ead1beec.png"
            },
            {
                input:"https://user-images.githubusercontent.com/103635204/195377999-32ac43ec-fa14-43d9-b48d-caa20e7f3fbc.png"
            }
        ],
        title:"Kimaye",
        des:"Clone of site selling fruits and delivering them in Mumbai. Here you can find variety of fresh fruits and packs to choose from. Fruits will be delievered on desired time.",
        techno:"Tech used : HTML | CSS | JAVASCRIPT",
        git:"https://github.com/prayagp8/TEAM-ALPHA-KIMAYE",
        app:"https://kimayeio.netlify.app",
        anim:'zoom-in-up'
    },
    {
        image:[
            {
                input:"milaap.png"
            },
            {
                input:"sign_up.png"
            },
            {
                input:"dashboard.png"
            },
            {
                input:"edit_profile.png"
            },
            {
                input:"save_profile.png"
            }
        ],
        title:"Milaap",
        des:"Clone of site used for raising funds for any cause. Here you can donate as well as raise fund for your cause and track the funds as well. User can edit personal info.",
        techno:"Tech used : HTML | CSS | JAVASCRIPT",
        git:"https://github.com/Ag-shivani-codes/obscene-icicle-4134/tree/shivani_sat",
        app:"https://symphonious-salamander-f24fc3.netlify.app/index.html",
        anim:'flip-up'
    },
    {
        image:[
            {
                input:"zee5.png"
            },
            {
                input:"zee5.png"
            },
            {
                input:"zee5.png"
            }
        ],
        title:"Zee-5",
        des:"Clone of OTT platform Zee-5 used for streaming movies and tv shows. User can stream videos online within variety of videos. Authentication is required",
        techno:"Tech used : REACT JS | CHAKRA UI | REDUX",
        git:"https://github.com/kartikkunwar/humane-north-3042/tree/master",
        app:"https://my-app-navy-five.vercel.app",
        anim:'zoom-in-down'
    }
]
export const ProjectPage=()=>{
    AOS.init();

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 3000,
        pauseOnHover: true
      };

    const selectlastmonths=(contributions)=>{
         const currentYear=new Date().getFullYear();
         const currentMonth=new Date().getMonth();
         const showMonths=6;

         return contributions.filter((day)=>{
            const date=new Date(day.date);
            const monthofday=date.getMonth();

            return (
                date.getFullYear()===currentYear&&
                monthofday>currentMonth-showMonths&&
                monthofday<=currentMonth
            )
         })
    }

    return (
        <Box bgColor="#111111" id="project">
            <Text fontSize="50px" color="white" pt="120px">My Projects</Text>
                <Box w="80%" margin='auto' mt="80px"   color="white" display='grid' gap='60px' gridTemplateColumns='repeat(auto-fit,minmax(250px,1fr))' gridTemplateRows="auto" pb='100px'>
                      
                    {
                        dat.map((el,ind)=>{
                            return(
                                <Box key={ind} h='100%' className="singlep"  display='flex' flexDirection='column' gap='20px' border='1px solid #7DA2A9' borderBottom='none' borderTop='none' data-aos={el.anim} data-aos-duration="2000" data-aos-easing="ease-in-out" >
                                    <Box h={{base:'30%',md:'30%',lg:'40%'}} m='auto'  w='90%' ><Slider {...settings}>{el.image.map((elem)=><Box w='100%' h='100%'><Image src={elem.input} borderRadius='20px' h='100%' w="100%" alt={el.title} className="image" /></Box>)}</Slider></Box>
                                    <Box  height={{base:'15%',md:'15%',lg:'15%'}} display='flex' justifyContent='center' alignItems='center' ><Heading fontSize='20px'>{el.title}</Heading></Box>
                                    <Box alignItems='center' w='95%' m='auto' fontSize={{base:'14px',md:'15px',lg:'16px'}} ><Text>{el.des}</Text></Box>
                                    <Box  height={{base:'10%',md:'10%',lg:'10%'}} ><Text >{el.techno}</Text></Box>
                                    <Box></Box>
                                    <Box className="overlay" >
                                        <Box className="cont" display='flex' gap='30%'>
                                            <a href={el.app} target="_blank"><FontAwesomeIcon className="prbt" icon={faEye} color='#7DA2A9' fontSize={50}></FontAwesomeIcon></a>
                                            <a href={el.git} target="_blank"><FontAwesomeIcon className="prbt" icon={faGithub} color='#7DA2A9' fontSize={50}></FontAwesomeIcon></a>
                                        </Box>
                                    </Box>
                                </Box>
                            )
                        })
                    }
                    
                </Box>
                <Box border='1px solid #7DA2A9'borderRadius='20px' width={{base:"90%", md:"70%",lg:"60%"}} margin='auto' p='10px' mb={30} data-aos='flip-left' data-aos-duration="2000" data-aos-easing="ease-in-out" >
                    <GitHubCalendar style={{margin:"auto",color:"white"}} fontSize={16} username="kartikkunwar" blockSize={20}  transformData={selectlastmonths}/>
                </Box>
                <Stats/>

        </Box>
    )
}