import Pages from "../Reusable/Pages";
import NewApi from "../../Api";
import Header from "../Header";

export default function Kid({ totalItems }) {
  return (
    <div>
      <Header totalItems={totalItems} kid="fw-semibold" />
      <Pages
        ApiProduct={NewApi}
        sortedSliceFirst="39"
        sortedSliceSecond="49"
        title="Adventures and Fun for Little Ones"
        description="Explore a World of Fun and Learning! Join us for exciting adventures, games, stories, and educational activities. Spark imagination, laughter, and joyful learning on our kids page. Let the adventure begin!"
      />
    </div>
  );
}
