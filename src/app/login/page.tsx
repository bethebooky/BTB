import Login from "@/components/login";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
  title: "$BOOKY - Be The Booky",
};
const index = () => {
  return (
    <Wrapper>
      <Login />
    </Wrapper>
  );
};

export default index;
