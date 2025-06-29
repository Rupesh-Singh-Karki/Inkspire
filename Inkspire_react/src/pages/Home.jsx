import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            <div>
                <div className="w-full min-h-screen py-8  text-center bg-[#E0F7FA] flex flex-col items-center justify-center">
                    <div className="flex flex-wrap ">
                        <div className="p-2 w-full ">
                            <h1 className="text-5xl md:text-6xl font-extrabold text-[#1C1C1C] leading-tight mb-4 tracking-tight">
                                Welcome to <span className="text-[#0C6ABD]">Inkspire</span>
                            </h1>
                            <h2 className='text-3xl md:text-4xl font-bold text-[#1C1C1C] leading-tight mb-4 tracking-tight'>
                                Login to read Articles
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="bg-[#B2EBF2] flex justify-center py-12 px-4 sm:px-6">
                    <section className="bg-indigo-50 rounded-xl p-6 sm:p-8 shadow-inner w-full sm:w-10/12 md:w-8/12 lg:w-6/12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center">
                        About INKSPIRE
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg text-center">
                        InkSpire is dedicated to providing high-quality, insightful articles on a wide range of topics. Our mission is to inform,
                        inspire, and engage our readers with fresh perspectives and compelling content. Join our community and embark on a journey of
                        continuous learning!
                        </p>
                    </section>
                </div>

            </div>

            

            

            
        )
    }
    return (
        <div className='w-full bg-[#E0F7FA]'>
            {/* <Container> */}
                <div className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <section className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-[#1C1C1C] leading-tight mb-4 tracking-tight">
                            Welcome to <span className="text-[#0C6ABD]">Inkspire</span>
                        </h1>
                        <p className="text-xl text-black max-w-2xl mx-auto">
                            Your daily dose of insights, stories, and inspiration. Explore our latest articles below.
                        </p>
                    </section>


                </div>

                <div className='w-full bg-[#B2EBF2] py-10'>
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                        <h1 className="text-5xl md:text-6xl font-bold text-[#1C1C1C] leading-tight mb-4 tracking-tight text-center">
                            Featured Articles
                        </h1>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {posts.map((post) => (
                            <PostCard key={post.$id} {...post} />
                        ))}
                        </div>
                    </div>
                </div>

                <div className='mt-15'>
                    {/* Categories */}
                    <section >
                    <h1 className="text-5xl md:text-6xl font-bold text-[#1C1C1C] leading-tight mb-7 tracking-tight text-center">Explore Categories</h1>
                    <div className="flex flex-wrap justify-center gap-4 pb-12">
                        {["Technology", "Lifestyle", "Travel", "Food", "Health", "Productivity"].map((cat, i) => (
                        <a
                            key={cat}
                            href="#"
                            className={`px-6 py-3 rounded-full font-medium hover:bg-opacity-70 transition-colors duration-200 shadow-md ${
                            ["bg-indigo-100 text-indigo-700", "bg-green-100 text-green-700", "bg-purple-100 text-purple-700", "bg-pink-100 text-pink-700", "bg-yellow-100 text-yellow-700", "bg-blue-100 text-blue-700"][i]
                            }`}
                        >
                            {cat}
                        </a>
                        ))}
                    </div>
                    </section>
                </div>

                <div className="bg-[#B2EBF2] flex justify-center py-12 px-4 sm:px-6">
                    <section className="bg-indigo-50 rounded-xl p-6 sm:p-8 shadow-inner w-full sm:w-10/12 md:w-8/12 lg:w-6/12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center">
                        About INKSPIRE
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg text-center">
                        InkSpire is dedicated to providing high-quality, insightful articles on a wide range of topics. Our mission is to inform,
                        inspire, and engage our readers with fresh perspectives and compelling content. Join our community and embark on a journey of
                        continuous learning!
                        </p>
                    </section>
                </div>


            {/* </Container> */}

        </div>
    )
}

export default Home