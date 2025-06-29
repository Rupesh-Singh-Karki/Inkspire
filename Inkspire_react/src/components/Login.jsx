import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { login as authLogin } from '../store/authSlice'
import authService from '../appwrite/auth'
import { Button, Input, Logo } from './index'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")

    const login = async (data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(authLogin(userData))
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#e0f7fa] to-[#b2ebf2] px-4">
            <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 sm:p-10 border border-gray-200">
                <div className="flex justify-center mb-2">
                    <span className="inline-block w-full max-w-[80px]">
                        <Logo width="100%" />
                    </span>
                </div>

                <h2 className="text-center text-3xl font-extrabold text-gray-800 mb-2">Welcome Back</h2>
                <p className="text-center text-sm text-gray-500 mb-6">
                    Don&apos;t have an account?{" "}
                    <Link
                        to="/signup"
                        className="text-[#0C6ABD] font-semibold hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>

                {error && (
                    <p className="text-center text-red-500 font-medium text-sm mb-4">
                        {error}
                    </p>
                )}

                <form onSubmit={handleSubmit(login)} className="space-y-5">
                    <Input
                        label="Email"
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPattern: (value) =>
                                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                    "Email address must be valid",
                            },
                        })}
                    />

                    <Input
                        label="Password"
                        placeholder="Enter your password"
                        type="password"
                        {...register("password", {
                            required: true,
                        })}
                    />

                    <Button
                        type="submit"
                        className="w-full bg-[#0C6ABD] hover:bg-[#094e8a] text-white py-2 rounded-lg font-semibold text-lg transition duration-200"
                    >
                        Sign In
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Login
