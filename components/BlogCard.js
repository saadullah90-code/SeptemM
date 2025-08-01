  // import React from "react"
  // import { Card } from "./common/Card"
  // import { blogdata } from "@/assets/data/dummydata"
  // import Link from "next/link";

  // const BlogCard = () => {
  //   return (
  //     <>
  //           <div className='container blog-card grid-2 py'>
  //         {blogdata.map((item) => (
  //           <div key={item.id} className="blog-item">
  //             <Card data={item} path='blogs' />

  //             {/* Button with unique link */}
  //             <Link href={item.customLink} passHref>
  //               <button className="animated-btn">
  //                 <span>View Project</span>
  //               </button>
  //             </Link>
  //           </div>
  //         ))}
  //       </div>

  //       {/* Button CSS */}
  //       <style jsx>{`
  //         // .blog-item {
  //         //   display: flex;
  //         //   flex-direction: column;
  //         //   align-items: center;
  //         //   text-align: center;
  //         // }

  //         .animated-btn {
  //           background-color: #000;
  //           color: white;
  //           padding: 12px 20px;
  //           border: 2px solid darkblue;
  //           font-size: 16px;
  //           cursor: pointer;
  //           border-radius: 15px;
  //           margin-top: 10px;
  //           transition: all 0.3s ease-in-out;
  //           position: relative;
  //           overflow: hidden;
  //           animation: borderColorChange 3s infinite alternate;
  //         }

  //         .animated-btn:hover {
  //           background-color: #f2ae1c;
  //           border-color: cyan;
  //           color:black
  //         }

  //         /* Animated Border */
  //         @keyframes borderColorChange {
  //           0% {
  //             border-color: #ffde59;
  //           }
  //           50% {
  //             border-color: cyan;
  //           }
  //           100% {
  //             border-color: #f2ae1c;
  //           }
  //         }

  //         /* Wave Animation for Text */
  //         .animated-btn span {
  //           display: inline-block;
  //           animation: waveText 2s infinite linear;
  //         }

  //         @keyframes waveText {
  //           0% { transform: translateY(0px); }
  //           25% { transform: translateY(-3px); }
  //           50% { transform: translateY(0px); }
  //           75% { transform: translateY(3px); }
  //           100% { transform: translateY(0px); }
  //         }
  //       `}</style>
  //     </>
  //   );
  // };


  // export default BlogCard
  // import React from "react";
  // import { Card } from "./common/Card";
  // import { blogdata } from "@/assets/data/dummydata";
  // import Link from "next/link";

  // const BlogCard = () => {
  //   return (
  //     <>
  //       <div className="container blog-grid">
  //         {blogdata.map((item) => (
  //           <div key={item.id} className="blog-card">
  //             <Card data={item} path="blogs" />

  //             <div className="button-wrapper mt-4">
  //               {item.customLink ? (
  //                 <button
  //                   className="view-btn px-4 py-2 bg-black text-white rounded"
  //                   onClick={() =>
  //                     window.open(
  //                       item.customLink.startsWith("http")
  //                         ? item.customLink
  //                         : `https://${item.customLink}`,
  //                       "_blank",
  //                       "noopener,noreferrer"
  //                     )
  //                   }
  //                 >
  //                   <span>View Project</span>
  //                 </button>
  //               ) : (
  //                 <Link href={`/blogs/${item.id}`}>
  //                   <button className="view-btn px-4 py-2 bg-black text-white rounded">
  //                     <span>View Project</span>
  //                   </button>
  //                 </Link>
  //               )}
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //       <style jsx>{`
  //         .blog-grid {
  //           display: grid;
  //           grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  //           gap: 30px;
  //           padding: 50px 20px;
  //         }

  //         .blog-card {
  //           background: rgba(255, 255, 255, 0.1);
  //           backdrop-filter: blur(10px);
  //           border: 1px solid rgba(255, 255, 255, 0.2);
  //           padding: 20px;
  //           border-radius: 20px;
  //           transition: transform 0.3s, box-shadow 0.3s;
  //           display: flex;
  //           flex-direction: column;
  //           justify-content: space-between;
  //           height: 100%;
  //         }

  //         .blog-card:hover {
  //           transform: scale(1.05);
  //           box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  //         }

  //         .button-wrapper {
  //           margin-top: auto;
  //         }

  //         .view-btn {
  //           background: linear-gradient(90deg, #ffde59, #f2ae1c);
  //           color: black;
  //           padding: 12px 20px;
  //           border: none;
  //           font-size: 16px;
  //           cursor: pointer;
  //           border-radius: 50px;
  //           width: 100%;
  //           transition: all 0.4s ease;
  //         }

  //         .view-btn:hover {
  //           background: linear-gradient(90deg, #f2ae1c, #ffde59);
  //           transform: scale(1.05);
  //           box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  //         }

  //         .view-btn span {
  //           display: inline-block;
  //           animation: waveText 2s infinite linear;
  //         }

  //         @keyframes waveText {
  //           0% {
  //             transform: translateY(0px);
  //           }
  //           25% {
  //             transform: translateY(-3px);
  //           }
  //           50% {
  //             transform: translateY(0px);
  //           }
  //           75% {
  //             transform: translateY(3px);
  //           }
  //           100% {
  //             transform: translateY(0px);
  //           }
  //         }
  //       `}</style>
  //     </>
  //   );
  // };

  // export default BlogCard;

  import React from "react";
import { Card } from "./common/Card";
import { blogdata } from "@/assets/data/dummydata";
import Link from "next/link";

const BlogCard = () => {
  return (
    <>
      <div className="container blog-grid">
        {blogdata.map((item) => (
          <div key={item.id} className="blog-card">
            <div className="card-content">
              <Card data={item} path="blogs" />
            </div>

            <div className="button-wrapper">
              {item.customLink ? (
                <button
                  className="view-btn"
                  onClick={() =>
                    window.open(
                      item.customLink.startsWith("http")
                        ? item.customLink
                        : `https://${item.customLink}`,
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  <span>View Project</span>
                </button>
              ) : (
                <Link href={`/blogs/${item.id}`}>
                  <button className="view-btn">
                    <span>View Project</span>
                  </button>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          padding: 50px 20px;
        }

        .blog-card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 20px;
          border-radius: 20px;
          transition: transform 0.3s, box-shadow 0.3s;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .card-content {
          flex: 1;
        }

        .blog-card:hover {
          transform: scale(1.03);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
        }

        .button-wrapper {
          margin-top: 20px;
        }

        .view-btn {
          background: linear-gradient(90deg, #ffde59, #f2ae1c);
          color: black;
          padding: 12px 20px;
          border: none;
          font-size: 16px;
          cursor: pointer;
          border-radius: 50px;
          width: 100%;
          transition: all 0.4s ease;
        }

        .view-btn:hover {
          background: linear-gradient(90deg, #f2ae1c, #ffde59);
          transform: scale(1.05);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        .view-btn span {
          display: inline-block;
          animation: waveText 2s infinite linear;
        }

        @keyframes waveText {
          0% {
            transform: translateY(0px);
          }
          25% {
            transform: translateY(-3px);
          }
          50% {
            transform: translateY(0px);
          }
          75% {
            transform: translateY(3px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </>
  );
};

export default BlogCard;

