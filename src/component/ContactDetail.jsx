import React, { useState } from "react";
import { MdDelete} from "react-icons/md";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { createContact, deleteContact, updateContact } from "../redux/slice/ContactSlice";
const ContactDetail = ({ data }) => {
    const [isSave,setIsSave] = useState(false);
    const [isName, setName] = useState("");
    const [islName, setlName] = useState("");
    const [isStatus, setStatus] = useState('');
    const {lastName,firstName,id,isActive} = data;
    
    const dispatch = useDispatch()
    const handleSaveBtn=(id,e)=>{
        e.preventDefault()
        dispatch(updateContact({
            id,
            firstName:isName,
            lastName:islName,
            isActive:isStatus
        }))
        toast.success('Contact Updated')
        setIsSave(false)    
  }
  
  const handleEditBtn=()=>{
    setIsSave(true)
  }
 
  // delete contact-----------
  const handleDeleteBtn=(id)=>{
    dispatch(deleteContact(id))
    toast.success('Contact Deleted')
    console.log("from",data);
  }
  return (
      
      <>
     
   {
       isSave ?  <div className="flex w-fit flex-col border shadow-md py-2 justify-center items-center">  <form className="md:p-4 p-1 flex flex-col gap-2 justify-center items-center">
    <div className="flex gap-2">
      <label
        className="text-gray-600 md:text-base text-xs font-semibold"
        htmlFor="firstName"
        >
        First Name :{" "}
      </label>
      <input
        value={isName}
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        name="first"
        id="firstName"
        className="outline-none bg-white ps-2 py-[2px]"
        required
      />
    </div>
    <div className="flex gap-2">
      <label className="text-gray-600 md:text-base text-xs font-semibold" htmlFor="lastName">
        Last Name :{" "}
      </label>
      <input
        value={islName}
        onChange={(e) => {
          setlName(e.target.value);
        }}
        type="text"
        name="last"
        id="lastName"
        className="outline-none bg-white ps-2 py-[2px]"
        required
      />
    </div>
    <div className="flex  justify-between items-center w-full px-4">
      <p className="text-gray-600 md:text-base text-xs font-semibold">Status : </p>
      <div className="flex gap-2">
        <input
          value={isStatus}
          onChange={(e) => {
            setStatus(true);
        }}
          type="radio"
          name="radio"
          id="active"
          required
        />
        <label
          className="text-black font-semibold text-sm"
          htmlFor="active"
        >
          Active
        </label>
      </div>
      <div className="flex gap-2">
        <input
          value={isStatus}
          onChange={(e) => {
              setStatus(false);
            }}
            type="radio"
          name="radio"
          id="inactive"
          required
          />
        <label
          className="text-black font-semibold text-sm"
          htmlFor="inactive"
          >
          Inactive
        </label>
      
      </div>
    </div>
  </form> 
    <button onClick={(e)=>{handleSaveBtn(id,e)}} className=" text-lg px-4 py-1 hover:bg-green-400 rounded-sm bg-green-500">
    <span className="text-sm grid place-content-center font-bold">Save</span>
</button>
  </div>
  :   <div className="contact-detail shadow-md shadow-gray-500 bg-white w-fit  rounded-sm p-4 flex flex-col justify-center items-center">
      <div>
        <div className="flex gap-2">
          <p className="text-slate-500 font-semibold">Full Name : </p>
          <p className="font-semibold"> {`${firstName} ${lastName}`} </p>
        </div>
        <div className="flex gap-2">
          <span className="text-slate-500 font-semibold">Status : </span>
          <span className="font-semibold">{`${
            isActive
          }`}</span>
        </div>
      </div>
      <div className="flex justify-evenly mt-4 w-full gap-5">  <button onClick={()=>{handleEditBtn(id)}} className=" text-lg px-4 py-1 hover:bg-cyan-700 rounded-sm bg-cyan-500">
          <span className="text-sm grid place-content-center font-bold">
            Edit
          </span>
        </button>

        <button onClick={()=>{handleDeleteBtn(id)}} className="px-4 py-1 hover:bg-red-800 rounded-sm bg-red-500 text-xl">
          <span>
            <MdDelete />
          </span>
        </button>
      </div>
    </div>
   }
   </>
 
  );
};

export default ContactDetail;
