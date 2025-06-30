import React from 'react';
import service from '../appwrite/config';
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
  const previewUrl = service.getFilePreview(featuredImage);
  const view = previewUrl.replace(/\/preview(?=\?)/, '/view') + '&mode=admin';
  const placeholder = "https://placehold.co/600x400/1E3A8A/ffffff?text=Image+Loading";

  return (
    <Link to={`/post/${$id}`} className="block h-full"> {/* Added height control */}
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex flex-col"> {/* Flex column layout */}
        <div className="aspect-video overflow-hidden"> {/* Fixed aspect ratio */}
          <img
            src={view || placeholder}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.onerror = null; // prevent loops
              e.currentTarget.src = placeholder;
            }}
          />

        </div>
        <div className="p-4 md:p-6 flex-grow flex flex-col"> {/* Responsive padding */}
          <h3 className="text-lg md:text-xl font-semibold text-[#1C1C1C] mb-2 line-clamp-2">{title}</h3> {/* Text clamping */}
          <div className="mt-auto"> {/* Pushes link to bottom */}
            <span className="text-[#164A41] hover:text-gray-600 font-medium flex items-center">
              Read More
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;