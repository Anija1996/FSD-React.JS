import { useParams } from "react-router-dom";

export default function Students(){
    const {id} = useParams();

    const students = [
        {id:1,name:"Anija",course:"React"},
        {id:2,name:"Sarath", course:"Full stack"},
        {id:3,name:"Sathwik", course:"SQL"}
    ];

    const student = students.find((item)=>item.id===Number(id));
    if(!student){
        return(<p>No such student exists</p>)
    }

    return(
        <>
        <h3>Student Name : {student.name}</h3>
        <p>Course : {student.course}</p>
        </>
    )
}