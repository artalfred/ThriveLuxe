import NewApi from "../../Api";
import Header from "../Header";
import Pages from "../Reusable/Pages";

export default function NewArrivals({ totalItems }) {
  return (
    <div>
      <Header newArrival="fw-semibold" totalItems={totalItems} />
      <Pages
        ApiProduct={NewApi}
        sortedSliceFirst="8"
        sortedSliceSecond="20"
        title={`Unveiling the Latest Products`}
        description="Unveiling new arrivals! Explore and shop our latest curated
        collection, filled with fresh and captivating products. Stay ahead
        of trends with our handpicked selection. Discover now!"
      />
    </div>
  );
}
