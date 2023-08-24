import React, { useState } from "react";
import { toast } from "react-hot-toast";
import ContactDetail from "./ContactDetail";
import { useDispatch,useSelector } from "react-redux";
import { createContact} from '../redux/slice/ContactSlice'
import { nanoid } from "nanoid";


const Contact = () => {

  const dispatch = useDispatch();
  const [isDisplay, setIsDisplay] = useState(false);
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [isActive, setisActive] = useState('');

  const data = useSelector(state=>state?.ContactReducer.data)
  // contact creation--------
  const handleCreateContactBtn = () => {
    setIsDisplay(true);
  };

  const handleSaveContactBtn = (e) => {
    e.preventDefault();
    dispatch(createContact({
        id:nanoid(),
        firstName,
        lastName,
        isActive:isActive
      
    }))
    setIsDisplay(false);
    toast.success("Contact created successfully");
  };

  return (
    <div className=" md:px-10 md:m-0  md:p-0 py-2 px-2 bg-slate-200 md:h-[87.7vh] min-h-[100vh] w-full flex flex-col  gap-5 justify-center items-center">
      <button
        className=" bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-sm font-bold"
        onClick={handleCreateContactBtn}
      >
        Create Contact
      </button>
      {isDisplay && (
        <div className="create-contact flex flex-col justify-center items-center gap-2  shadow-gray-500 p-2  md:p-4 rounded-sm shadow-md">
      
          <form className="p-4 flex flex-col gap-2 justify-center items-center">
            <div className="flex gap-2">
              <label
                className="text-gray-600 md:text-base text-xs font-semibold"
                htmlFor="firstName"
              >
                First Name :{" "}
              </label>
              <input
                value={firstName}
                onChange={(e) => {
                  setfirstName(e.target.value);
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
                value={lastName}
                onChange={(e) => {
                  setlastName(e.target.value);
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
                  value={isActive}
                  onChange={(e) => {
                    setisActive(true);
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
                  value={isActive}
                  onChange={(e) => {
                    setisActive(false);
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
            <button
              className="mt-4 bg-green-500 hover:bg-green-800 px-4 py-2 rounded-sm font-bold"
              onClick={(e) => {
                handleSaveContactBtn(e);
              }}
            >
              Save Contact
            </button>
          </form>
        </div>
      )}
      <div className="flex w-full  flex-wrap justify-center items-center flex-col p-1 md:px-10 py-5 gap-2">
    <h2 className="border-b border-slate-800 text-2xl font-bold">Contact Details</h2>
    {
      data.length>0 ?  
      <div className="flex flex-wrap justify-center items-center flex-row px-4 w-full md:px-10 border rounded-sm border-slate-600 py-5 gap-5">  
      {data?.map((data, id) => { 
        return <ContactDetail key={id} data={data}  />;
      })}
      
    
  </div> 
  : <h2 className="text-2xl text-red-600">No Contact</h2>
    }
  
        </div>
    </div>
  );
};

export default Contact;
