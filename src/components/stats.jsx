import { Box } from "@chakra-ui/react"
import AOS from 'aos';
import 'aos/dist/aos.css';


export const Stats=()=>{
    AOS.init();
    return(
        <Box display={{base:"block", md:"block",lg:"flex"}} gap={10} p='20px' width={{base:"90%", md:"70%",lg:"70%"}} margin='auto' data-aos='flip-right' data-aos-duration="2000" data-aos-easing="ease-in-out" >
            <Box>
                <a href="https://github.com/kartikkunwar">
                    <img src="https://github-readme-stats.vercel.app/api?username=kartikkunwar&show_icons=true&locale=en&theme=synthwave" alt="kartikkunwar" />
                </a>
            </Box>
            <Box>
                <a href="https://github.com/kartikkunwar">
                    <img src="https://github-readme-streak-stats.herokuapp.com/?user=kartikkunwar&theme=synthwave" alt="kartikkunwar" />
                </a>
            </Box>
        </Box>
    )
}