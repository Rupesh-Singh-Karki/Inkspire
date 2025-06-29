import React from 'react'
import service from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {

  const previewUrl = service.getFilePreview(featuredImage)
  const view = previewUrl.replace(/\/preview(?=\?)/, '/view') + '&mode=admin'

  return (
    <Link to={`/post/${$id}`}>
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        <img
          src={view}
          alt={title}
          className="w-full object-contain rounded-t-xl"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-[#1C1C1C] mb-2">{title}</h3>
          <a
            href="#"
            className="text-[#164A41] hover:text-gray-600 font-medium flex items-center"
          >
            Read More
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </Link>
  )
}

export default PostCard
