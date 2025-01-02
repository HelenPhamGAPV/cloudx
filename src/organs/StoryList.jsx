import Card2 from "../atoms/Card2";
const StoryList = ({ storyList }) => {
  return (
    <div className="w-full bg-white100 px-5 pb-8 pt-16 lg:pb-16 lg:pt-20">
      <div className="mx-auto grid w-full max-w-6xl gap-x-12 gap-y-20 sm:justify-center xl:grid-cols-3">
        {storyList.length > 0 && storyList.map((item, index) => (
            <Card2 content={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default StoryList;
