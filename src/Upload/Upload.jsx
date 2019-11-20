import React,{useState} from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
const Upload=()=>{
 
let [fileState, setFileState] = useState();

 const handleFile=(e)=> {
     fileState= e.target.files[0];
     setFileState(fileState);
     
     console.log(e.target.files, "$$$$");
     console.log(e.target.files[0], "$$$$");
 };

 const handleUpload=(e)=>{
    //  e.preventDefault();
    console.log(fileState, "$$$$fileState");
    
    let file=fileState;
    let formdata= new FormData()
    formdata.append('image',file)
    formdata.append('name',"jorsche")
    console.log("das"+formdata);
 axios({
    url:`http://localhost:8000/upload`,
    // url:`http://localhost:8000/upload`,
    method: "POST",
    // headers:{
    //     authorization: `your token`
    // },
    // headers: {
    //     'Content-Type': 'multipart/form-data'
    //   },
    data: formdata
    }).then((res)=>{
 });


 }
 return(
<div>
<h1>The form</h1>
<form>
<div className="">
<label>Select file</label>
<input type="file" name="file" onChange={(e)=>{handleFile(e)}}/>
</div>

<button type="button" onClick={(e)=>{handleUpload(e)}}>Upload</button>
</form>
</div>
);
}
export default Upload;