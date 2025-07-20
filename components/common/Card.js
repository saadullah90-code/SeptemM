import Link from "next/link";
import { TitleSm } from "./Title";
import { HiOutlineArrowRight } from "react-icons/hi";

export const Card = ({ data, caption, show, path }) => {
  // Check if custom link exists, otherwise use default blog path
  const blogPath = data.customLink ? data.customLink : `${path}/${data.id}`;

  return (
    <div className="card">
      <div className="card-img">
        <img src={data.cover} alt={data.title} />
      </div>
      <div className="card-details">
        {/* Dynamic Redirect */}
        <Link href={blogPath} className="title-link">
          <TitleSm title={data.title} />
        </Link>

        {caption && (
          <Link href={blogPath} className="caption-link">
            {caption} <HiOutlineArrowRight className="link-icon" />
          </Link>
        )}

        <div className="flex">
          <span>{data.category}</span> {data.date && <span> / {data.date}</span>}
        </div>

        {show && (
          <ul>
            {data.desc.map((text, i) => (
              <li key={i}> - {text.text}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
