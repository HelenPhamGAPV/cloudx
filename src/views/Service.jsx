import React, {useEffect, useState} from "react";

import { serviceDataList } from "../particles/DataLists";
import Introduction from "../organs/Introduction";
import DescForm2 from "../organs/DescForm2";
import Description from "../organs/Description"
import Solution from "../organs/Solution"
import Process from "../organs/Process"

const Service = () => {
    const [serviceData, setServiceData] = useState();

    useEffect(() => {
        const service = window.location.href.split("/")[4];
        setServiceData(serviceDataList[service])
    })
    
    return(
        <>
            <Introduction intro={serviceData?.intro} />
            <DescForm2 desc={serviceData?.detail} />
            <Description desc={serviceData?.aboutService} theme="dark"/>
            <Description desc={serviceData?.tech} theme="white"/>
            <Solution data={serviceData?.solution} theme="dark"/>
            <Process process={serviceData?.process} />
        </>
    )
}

export default Service;