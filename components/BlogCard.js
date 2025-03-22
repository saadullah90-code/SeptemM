import React from "react"
import { Card } from "./common/Card"
import { blogdata } from "@/assets/data/dummydata"
import Link from "next/link";

const BlogCard = () => {
  return (
    <>
          <div className='container blog-card grid-2 py'>
        {blogdata.map((item) => (
          <div key={item.id} className="blog-item">
            <Card data={item} path='blogs' />

            {/* Button with unique link */}
            <Link href={item.customLink} passHref>
              <button className="animated-btn">
                <span>View Project</span>
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Button CSS */}
      <style jsx>{`
        // .blog-item {
        //   display: flex;
        //   flex-direction: column;
        //   align-items: center;
        //   text-align: center;
        // }

        .animated-btn {
          background-color: #000;
          color: white;
          padding: 12px 20px;
          border: 2px solid darkblue;
          font-size: 16px;
          cursor: pointer;
          border-radius: 15px;
          margin-top: 10px;
          transition: all 0.3s ease-in-out;
          position: relative;
          overflow: hidden;
          animation: borderColorChange 3s infinite alternate;
        }

        .animated-btn:hover {
          background-color: navy;
          border-color: cyan;
        }

        /* Animated Border */
        @keyframes borderColorChange {
          0% {
            border-color: darkblue;
          }
          50% {
            border-color: cyan;
          }
          100% {
            border-color: lightblue;
          }
        }

        /* Wave Animation for Text */
        .animated-btn span {
          display: inline-block;
          animation: waveText 2s infinite linear;
        }

        @keyframes waveText {
          0% { transform: translateY(0px); }
          25% { transform: translateY(-3px); }
          50% { transform: translateY(0px); }
          75% { transform: translateY(3px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </>
  );
};


export default BlogCard
