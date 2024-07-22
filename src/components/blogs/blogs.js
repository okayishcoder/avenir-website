import Slider from "react-slick";

import BLOGS_DATA from "./blogsData";
import BlogAndModal from "./blogAndModal";

const Blogs = () => {
  var settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <section id="blogs" className="blogs-section">
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
