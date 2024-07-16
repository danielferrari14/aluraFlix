import { BsLinkedin, BsGithub, } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className='text-white px-8 md:px-10 lg:px-12 2xl:px-[68px] py-8 mt-6'>
            <div className='flex flex-wrap justify-between opacity-80'>
                <ul className='flex gap-6'>
                    <li>
                        <a href="https://www.linkedin.com/in/daniel-ferrari-9991872b0/" target="_blank" >
                            <BsLinkedin size={16} />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/danielferrari14/aluraFlix" target="_blank">
                            <BsGithub size={16} />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
