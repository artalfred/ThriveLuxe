import Pages from "../Reusable/Pages";
import NewApi from "../../Api";
import Header from "../Header";

export default function Latest({ totalItems }) {
  return (
    <div>
      <Header latest="fw-semibold" totalItems={totalItems} />
      <Pages
        ApiProduct={NewApi}
        sortedSliceFirst="20"
        sortedSliceSecond="30"
        title="Uncover the Hottest Releases"
        description="Don't miss your chance to score restocks and new editions of you favorite kicks, with colour-theme drops happening daily."
      />
    </div>
  );
}
