import { useEffect, useState } from "react";

import Slider from "react-slick";

import BLOGS_DATA from "./blogsData";
import BlogAndModal from "./blogAndModal";

const Blogs = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  var slidesToShow = width > 767 ? 5 : 1;

  var settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  return (
    <section id="blogs" className="shaded-bg px-5">
      <Slider {...settings}>
        {BLOGS_DATA.map((blog, i) => {
          return (
            <BlogAndModal
              key={i}
              title={blog.title}
              shortDescription={blog.shortDescription}
              fullDescription={blog.fullDescription}
              imgPath={blog.imgPath}
            />
          );
        })}
      </Slider>
    </section>
  );
};

export default Blogs;
