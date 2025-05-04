import {fetchTestResponses} from "../../services/api"
import {useParams} from "react-router-dom"
import { useEffect, useState } from "react";
function ShowResponses() {
    const {id} = useParams();
    const [responses , setResponses] = useState(null);
    useEffect(()=>{
        const load = async ()=>{
            try {
                const res = await fetchTestResponses(id);
                setResponses(res);
            } catch (error) {
                alert("Something went wrong " + error.message);
            }
        }
        load();
    } , [id])
    if(!responses){
        return (
            <div>
                
            </div>
        )
    }
  return (
    <div>here</div>
  )
}

export default ShowResponses