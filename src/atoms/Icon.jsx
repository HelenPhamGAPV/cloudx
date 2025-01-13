import adobexd from "../assets/adobexd.svg"
import approval from "../assets/approval.svg"
import archive from "../assets/archive.svg"
import asana from "../assets/asana.svg"
import automation from "../assets/automation.svg"
import aws from "../assets/aws.svg"
import awsbedrock from "../assets/awsbedrock.svg"
import azureai from "../assets/azureai.svg"
import backend from "../assets/backend.svg"
import blockchain from "../assets/blockchain.svg"
import brainStorm from "../assets/brain-storm.svg" 
import brain from "../assets/brain.svg"
import calendar from "../assets/calendar.svg"
import certificate from "../assets/certificate.svg"
import challengeMotivated from "../assets/challenge-motivated.svg"
import chat from "../assets/chat.svg"
import circularArrows from "../assets/circular-arrows.svg"
import data from "../assets/data.svg"
import define from "../assets/define.svg"
import deliveryTime from "../assets/delivery-time.svg"
import development from "../assets/development.svg"
import earthCare from "../assets/earth-care.svg"
import eye from "../assets/eye.svg"
import facebook from "../assets/facebook.svg"
import figma from "../assets/figma.svg"
import figjam from "../assets/figjam.svg"
import golang from "../assets/golang.svg"
import googleanalytics from "../assets/googleanalytics.svg"
import handHoldingHear from "../assets/hand-holding-hear.svg"
import handshake from "../assets/handshake.svg"
import illustrator from "../assets/illustrator.svg"
import infor from "../assets/infor.svg"
import insta from "../assets/insta.svg"
import jira from "../assets/jira.svg"
import langchain from "../assets/langchain.svg"
import langfuse from "../assets/langfuse.svg"
import llama from "../assets/llama.svg"
import llamaindex from "../assets/llamaindex.svg"
import logo from "../assets/logo.svg"
import maintenance2 from "../assets/maintenance2.svg"
import marvel from "../assets/marvel.svg"
import minimumViableBureaucracy from "../assets/minimum-viable-bureaucracy.svg"
import miro from "../assets/miro.svg"
import mixtraljs from "../assets/mixtraljs.svg"
import mobile from "../assets/mobile.svg"
import mongdb from "../assets/mongdb.svg"
import mural from "../assets/mural.svg"
import mvp from "../assets/mvp.svg"
import nextjs from "../assets/nextjs.svg"
import nodejs from "../assets/nodejs.svg"
import openai from "../assets/openai.svg"
import optimizely from "../assets/optimizely.svg"
import partnershipBuilders from "../assets/partnership-builders.svg"
import peopleFirst from "../assets/people-first.svg"
import person from "../assets/person.svg"
import photoshop from "../assets/photoshop.svg"
import prototype from "../assets/prototype.svg"
import react from "../assets/react.svg"
import reactnative from "../assets/reactnative.svg"
import scaleUp from "../assets/scale-up.svg"
import sent from "../assets/sent.svg"
import star from "../assets/star.svg"
import target from "../assets/target.svg"
import testTube from "../assets/test-tube.svg"
import twitter from "../assets/twitter.svg"
import uxui from "../assets/uxui.svg"
import user from "../assets/user.svg"
import vertexai from "../assets/vertexai.svg"
import watch from "../assets/watch.svg"
import weaviate from "../assets/weaviate.svg"
import web from "../assets/web.svg"
import zeplin from "../assets/zeplin.svg"

const iconList = {
    adobexd: adobexd,
    approval: approval,
    archive: archive,
    asana: asana,
    automation: automation,
    aws: aws,
    awsbedrock: awsbedrock,
    azureai: azureai,
    backend: backend,
    blockchain: blockchain,
    brainStorm: brainStorm,
    brain: brain,
    calendar: calendar,
    certificate: certificate,
    challengeMotivated: challengeMotivated,
    chat: chat,
    circularArrows: circularArrows,
    data: data,
    define: define,
    deliveryTime: deliveryTime,
    development: development,
    earthCare: earthCare,
    eye: eye,
    facebook: facebook,
    figma: figma,
    figjam: figjam,
    golang: golang,
    googleanalytics: googleanalytics,
    handHoldingHear: handHoldingHear,
    handshake: handshake,
    illustrator: illustrator,
    infor: infor,
    insta: insta,
    jira: jira,
    langchain: langchain,
    langfuse: langfuse,
    llama: llama,
    llamaindex: llamaindex,
    logo: logo,
    maintenance2: maintenance2,
    marvel: marvel,
    minimumViableBureaucracy: minimumViableBureaucracy,
    miro: miro,
    mixtraljs: mixtraljs,
    mobile: mobile,
    mongdb: mongdb,
    mural: mural,
    mvp: mvp,
    nextjs: nextjs,
    nodejs: nodejs,
    openai: openai,
    optimizely: optimizely,
    partnershipBuilders: partnershipBuilders,
    peopleFirst: peopleFirst,
    person: person,
    photoshop: photoshop,
    prototype: prototype,
    react: react,
    reactnative: reactnative,
    scaleUp: scaleUp,
    sent: sent,
    star: star,
    target: target,
    testTube: testTube,
    twitter: twitter,
    uxui: uxui,
    user: user,
    vertexai: vertexai,
    watch: watch,
    weaviate: weaviate,
    web: web,
    zeplin: zeplin
}

const Icon = (props) => {
    
    return <img src={iconList[props.src]} alt={props.alt} className={props.className} />
}
    

export default Icon;