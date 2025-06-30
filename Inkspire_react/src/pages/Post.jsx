import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        service.deletePost(post.$id).then((status) => {
            if (status) {
                service.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };



    return post ? (
        <div className="py-8 bg-[#BAEFF4] min-h-screen flex flex-column">
            <Container>
                <div className="bg-amber-50 w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img
                        src={service.getFilePreview(post.featuredImage).replace(/\/preview(?=\?)/, '/view') + '&mode=admin'? service.getFilePreview(post.featuredImage).replace(/\/preview(?=\?)/, '/view') + '&mode=admin':"https://placehold.co/600x400/1E3A8A/ffffff?text=Image+Loading"}
                        alt={post.title}
                        className="rounded-xl"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3 hover:bg-green-900">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" className="mr-3 hover:bg-red-950" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="bg-amber-50 rounded-4xl px-6 py-6">
                    <div className="w-full mb-6">
                        <h1 className="text-5xl md:text-6xl font-bold text-[#1C1C1C] leading-tight mb-4 tracking-tight">{post.title}</h1>
                    </div>
                    <div className="browser-css">
                        {parse(post.content)}
                    </div>
                </div>
            </Container>
        </div>
    ) : null;
}
