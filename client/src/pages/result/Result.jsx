import PreviewQuestion from "./PreviewQuestion";
import ShowResponses from "./ShowResponses";
import {fetchData} from "../../services/api"
import { useState , useEffect} from "react";
import { useLocation, useParams } from "react-router-dom";
function Result() {
  const [toggle , setToggle] = useState(true);
  const location = useLocation();
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const load = async () => {
      if (location.state === null) {
        const fetchedData = await fetchData(id);
        console.log(fetchedData);
        
        setData(fetchedData);
      } else {
        setData(location.state);
      }
    };
    
    load();
  }, [location.state, id]);

  return (
      <div>
        <button onClick={()=>setToggle(true)}>Preveiw</button>
        <button onClick={()=>setToggle(false)}>Response</button>
        {toggle ? <PreviewQuestion data={data}/> : <ShowResponses />}
      </div>
  );
}

export default Result;
