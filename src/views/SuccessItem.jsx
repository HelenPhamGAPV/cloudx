import React, { useState, useEffect } from "react";
import { successCaseDetail } from "../particles/DataLists";
import Introduction2 from "../organs/Introduction2";
import HorizontalList from "../atoms/HorizontalList";
import Reason from "../organs/Reason";
import HorizontalList2 from "../atoms/HorizontalList2";
import Solution from "../organs/Solution";
import Remarker from "../organs/Remarker";
import Aspect from "../organs/Aspect";

const SuccessItem = () => {
  const [caseData, setCaseData] = useState();

  useEffect(() => {
    const data = window.location.href.split("/")[4];
    setCaseData(successCaseDetail[data]);
  }, []);
  return (
    <>
      {caseData ? (
        <>
          <Introduction2 intro={caseData?.intro} />
          <HorizontalList project={caseData?.nutshell} />
          <Reason
            reason={caseData?.challenge}
            kind={1}
            img={caseData?.challenge.img}
          />
          <HorizontalList2 project={caseData?.tech} />
          <Solution data={caseData?.solution} theme="white" />
          <Remarker data={caseData?.mid} />
          <Aspect data={caseData?.aspect} style="small"/>
          <div class="hidden flex-col items-center bg-white lg:flex">
            <img
              alt="Screenshot from Karvi's website"
              loading="lazy"
              width="2160"
              height="740"
              decoding="async"
              data-nimg="1"
              className="rounded object-cover"
              style={{ color: "transparent" }}
              src={caseData?.projectImg}
            />
          </div>
          <Solution data={caseData?.result} theme="white" />
          <HorizontalList2 project={caseData?.impacted} style="large"/>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default SuccessItem;
