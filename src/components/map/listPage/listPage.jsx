import { ListData } from "../../data/Data";
import "./listPage.scss";
import Filter from "../filter/Filter"
import Card from "../card/Card"
import Map from "../map/Map";

function ListPage() {
  const data = ListData;

  return <div className="listPage">
    <div className="listContainer">
      <div className="wrapper">
        <Filter/>
        {data.map(item=>(
          <Card key={item.id} item={item}/>
        ))}
      </div>
    </div>
    <div className="mapContainer">
      <Map items={data}/>
    </div>
  </div>;
}

export default ListPage;
