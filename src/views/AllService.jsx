import { allServiceIntro, DefaultServiceList } from "../particles/DataLists";
import Introduction from "../organs/Introduction";
import ListItems from "../organs/ListItems";
import Remarker from "../organs/Remarker"

const AllService = () => {
  return (
    <>
      <Introduction intro={allServiceIntro} />
      <ListItems list={DefaultServiceList} />
      <Remarker />
    </>
  );
};

export default AllService;
