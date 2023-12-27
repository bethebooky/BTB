import Register from "@/components/register";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
  title: "$BOOKY - Be The Booky",
};
const index = () => {
  return (
    <Wrapper>
      <Register />
    </Wrapper>
  );
};

export default index;
