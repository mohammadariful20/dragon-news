import { Link,useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";


export default function Register() {
    const { registerUser } = useContext(AuthContext)
    const [errorpassword, setErrorPassword] = useState(null)
    const [checkbox, setCheckboox] = useState(null)
    const [weekPassword, setWeekPassword] = useState(null)
    const [showPassword, setShowPassword] = useState(true)
    const navigate=useNavigate()

    const handleShowPassWord = () => {
        setShowPassword(!showPassword)
    }


    const handleRegister = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        const confirmpassword = form.get('confirmpassword')
        const checked = e.target.checked.checked;

        if (password !== confirmpassword) {
            setErrorPassword(`Confirm Password don't match`)
            return
        }

        if (!checked) {
            setCheckboox(`Please acceptd our 
            Accept Term & Conditions`)
            return
        }

        //reset errors
        setErrorPassword('')
        setCheckboox('')

        registerUser(email, password)
            .then(result => {
                const usr = result.user
                e.target.reset()
                navigate('/')
            })
            .catch((err) => console.log(err))
    }

    // function generateStrongPassword(length) {
    //     const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    //     const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //     const numbers = '0123456789';
    //     const symbols = '!@#$%^&*()-_+=<>?';

    //     const allCharacters = lowercase + uppercase + numbers + symbols;

    //     let password = '';
    //     for (let i = 0; i < length; i++) {
    //         const randomIndex = Math.floor(Math.random() * allCharacters.length);
    //         password += allCharacters[randomIndex];
    //     }

    //     return password;
    // }

    // Example usage: generate a strong password with length 12
    // const strongPassword = generateStrongPassword(8);
    // console.log("Strong Password:", strongPassword);

    //password type chenk strong
    const strongPasswordck = (event) => {
        const password = event.target.value
        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;

        if (!regex.test(password)) {
            setWeekPassword(`You Password so week`)
            return
        } else {
            setWeekPassword('')
        }
    }



    return (
        <>
            <Navbar></Navbar>
            <div className="max-h-svh  relative">
                <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-base-100  absolute top-20 left-1/4">
                    <h1 className="text-center text-5xl font-bold">Register your account</h1>

                    <form className="card-body" onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name="photo" type="file" placeholder="Photo URL" className="input-bordered  file-input file-input-ghost w-full" />
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">{weekPassword ? <small className="text-red-500 italic">{weekPassword}</small>:'Password'}</span>
                            </label>
                            {
                                
                            }
                            <input onChange={strongPasswordck} name="password" type={!showPassword ? "text" : "password"} placeholder="password" className="input input-bordered" required />
                            <div className="absolute right-2 top-1/4">
                                {showPassword ? <span onClick={handleShowPassWord}><FaRegEye /></span> : <span onClick={handleShowPassWord}><FaRegEyeSlash /></span>
                                }
                            </div>
                            <label className="label relative">
                                <span className="label-text">{errorpassword ? <small className="text-red-500 italic">{errorpassword}</small>:'Confirm Password'}</span>
                            </label>
                           
                            <input name="confirmpassword" type={!showPassword ? "text" : "password"} placeholder="Confirm password" className="input input-bordered relative" required />
                            <div className="absolute right-2 top-32">
                                {showPassword ? <span onClick={handleShowPassWord}><FaRegEye /></span> : <span onClick={handleShowPassWord}><FaRegEyeSlash /></span>
                                }
                            </div>


                            <div className="flex gap-4 mt-3 items-center">
                                <input name="checked" type="checkbox" className="checkbox checkbox-success" />
                                <a className="label-text hover:underline">Accept Term & Conditions</a>
                                {
                                    checkbox && <small className="text-red-500 italic">{checkbox}</small>
                                }
                            </div>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p>Already Have An Account ?<Link to="/login" className="text-[#F75B5F]"> Login</Link></p>
                    </form>
                </div>
            </div>
        </>
    )
}
