import ResetPassWord from "@/components/reset-password";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
  title: "$BOOKY - Be The Booky",
};
const index = () => {
  return (
    <Wrapper>
      <ResetPassWord />
    </Wrapper>
  );
};

export default index;
