import BlogDetails from "@/components/blogs/blog-details";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
  title: "$BOOKY - Be The Booky",
};
const index = () => {
  return (
    <Wrapper>
      <BlogDetails />
    </Wrapper>
  );
};

export default index;
