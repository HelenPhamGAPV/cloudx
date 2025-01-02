// import BookingSteps from "../organs/BookingSteps";
import HeroSection from "../organs/HeroSection";
// import NewsLetter from "../organs/NewsLetter";
// import Partners from "../organs/Partners";
import Reason from "../organs/Reason";
// import Testimonials from "../organs/Testimonials";
import Value from "../organs/Value";
import Markable from "../organs/Markable";
import { ReasonText, ourValue } from "../particles/DataLists";
import reason1 from "../assets/reason1.png";
import reason2 from "../assets/reason2.png";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Reason reason={ReasonText[0]} kind={0} img={reason1} />
      <Markable />
      <Reason reason={ReasonText[1]} kind={1} img={reason2} />
      <Value value={ourValue}/>
      {/* <BookingSteps /> */}
      {/* <Testimonials /> */}
      {/* <Partners /> */}
      {/* <NewsLetter /> */}
    </>
  );
};

export default Home;
