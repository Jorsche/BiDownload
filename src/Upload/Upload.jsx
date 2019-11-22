import React,{useState} from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';


const Upload=()=>{
let [fileState, setFileState] = useState();
let [urlState, seturlState]= useState();
let urlDataName;

 const handleFile=(e)=> {
     fileState= e.target.files[0];
     setFileState(fileState);
     //console.log(e.target.files, "$$$$");
    // console.log(e.target.files[0], "$$$$");
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
    method: "POST",
    data: formdata
    }).then((res)=>{
       console.log(res);
       console.log("abc",'http://localhost:3001/'+res.data.filename);
       urlDataName= res.data.filename;
    }).finally(()=>{
      seturlState(urlDataName);
       });
}
 const urlDownload=()=>{
      let urllink= "http://localhost:3001/"+urlState;
    let link=<a href={urllink}>DOWNLOAD</a>
      return(
                  <div>
                     {link}
                  </div>
            );
         };

 return(
<div>
<h1>The form</h1>
<form>
<div className="">
<label>Select file</label>
<input type="file" name="file" onChange={(e)=>{handleFile(e)}}/>
</div>
{console.log("urlDataState", urlState)}
<button type="button" onClick={(e)=>{handleUpload(e)}}>Upload</button>
</form>
{urlDownload()}
</div>
);
}
export default Upload;