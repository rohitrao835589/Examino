import {React , useState , useEffect} from 'react'

function AddQuestion() {
    const [question , setQuestion] = useState({
        title:"",
        optionType:"choice",
        options : ["null"]
    });

  return (
    <>
        <form >
            <input 
                type="text" 
                name="title" 
                value = {question.title} 
                onChange={ (event)=>(setQuestion((prev)=>({...prev , title:event.target.value})))}
                
            />
            <select
                name="optionType" 
                value ={question.optionType} 
                onChange={(event)=>setQuestion((prev)=>({...prev , optionType:event.target.value}))}
            >
                <option value="choice">Multiple Choice</option>
                <option value="textBox">Text Box</option>
            </select>
            {question.optionType == "choice" && 
                (
                    question.options.map((value)=>{
                        input
                    })
                )
            }
        </form>
    </>
  )
}

export default AddQuestion