import { UsIntro, OpenWorld, UsDesc, WorkReason } from "../particles/DataLists"
import Introduction from "../organs/Introduction";
import Value from "../organs/Value";
import Description from "../organs/Description"
import DetailValue from "../organs/DetailValue"


const AboutUs = () => {
  return (
    <>
      <Introduction intro={UsIntro}/>
      <Value value={OpenWorld}/>
      <Description desc={UsDesc} theme="dark"/>
      <DetailValue />
      <Description desc={WorkReason} theme="gray"/>
    </>
  );
};

export default AboutUs;
