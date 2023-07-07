import NewApi from "../../Api";
import Header from "../Header";
import Pages from "../Reusable/Pages";

export default function Women({ totalItems }) {
  return (
    <div>
      <Header women="fw-semibold" totalItems={totalItems} />
      <Pages
        ApiProduct={NewApi}
        sortedSliceFirst="49"
        sortedSliceSecond="58"
        title="Casualwear for Women"
        description="Discover inspiring stories, fashion trends, and a supportive community. Join us in embracing strength, elegance, and limitless potential!"
      />
    </div>
  );
}
