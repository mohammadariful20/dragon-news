import Marquee from "react-fast-marquee";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa6";
import QZone from "../components/QZone";
import bg from '../assets/bg1.png'


export default function Home() {
    return (
        <div className="p-4">
            <Header></Header>
            <div className="flex">
                <button className="btn btn-active btn-secondary text-white px-8">Latest</button>
                <Marquee speed={100} className="text-black">
                    I can be a React component, multiple React components, or just some text.
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <Navbar></Navbar>
            <div className="grid grid-cols-4 gap-6 mt-9">
                <div className="">letf</div>
                <div className="col-span-2 border"> middle</div>
                <div className="">
                    <h3 className="text-xl font-bold my-4">Login With</h3>
                    <div className="flex flex-col gap-4">
                        <button className="btn text-green-700">
                            <FaGoogle />
                            Login with Google
                        </button>
                        <button className="btn">
                            <FaGithub />
                            Login with Github
                        </button>
                    </div>
                    <div className="my-8 font-semibold flex flex-col    ">
                        <h3 className="text-xl my-2">Find Us On</h3>
                        <a className="btn w-1/2 border border-[#E7E7E7]">
                            <FaFacebook />
                            Facebook
                        </a>
                        <a className="btn w-1/2 border border-x-[#E7E7E7]">
                            <FaTwitter />
                            Twitter
                        </a>
                        <a className="btn w-1/2 border border-[#E7E7E7]">
                            <FaInstagram />
                            Instagram
                        </a>
                    </div>
                    <QZone />
                    <div className="hero" style={{ backgroundImage: `url(${bg})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content p-10 py-32">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Create an Amazing Newspaper</h1>
                                <p className="mb-5">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                                <button className="btn btn-secondary">Learn More</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
