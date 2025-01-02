import { summuryCase } from "../particles/DataLists"
import Introduction from "../organs/Introduction"
import StoryList from "../organs/StoryList"
import Remarker from "../organs/Remarker"

const SuccessCase = () => {
    return (
        <>
            <Introduction intro={summuryCase?.intro} />
            <StoryList storyList={summuryCase?.story} />
            <Remarker /> 
        </>
    )
}

export default SuccessCase