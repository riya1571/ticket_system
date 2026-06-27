import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import vector1 from './assets/vector1.png';
import vector2 from './assets/vector2.png';
import cal from './assets/calender.png';
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

function App() {

  const [data, setData] = useState([]);
  const[taskSelected, setTaskSelected] = useState([]);
  const [taskResolved, setTaskResolved] = useState([]);
  
  // FETCHING DATA
  useEffect(() => {
    const fetchData = async () => {
        const res = await fetch('/RawData.json');
        const result = await res.json();
        setData(result);
    };
    fetchData();
  }, []);

  const handleTicket = (ID) => {
 
  const updateItem = data.find(item => item.id === ID);
  
  if (updateItem && updateItem.status === "Open") {
    setData(prev => prev.map(item => {
      if (item.id === ID) {
        return { ...item, status: "In-Progress" };
      }
      return item;
    }));

    const clicked = { ...updateItem, status: "In-Progress" };
    setTaskSelected(prevClicked => [...prevClicked, clicked]);
    
    toast("✅ Task In Progress!");
  }
}

const handleComplete = (Id) =>{

  // Remove from taskSelected
  toast("✅ Task Completed!");
  setTaskSelected(prev => prev.filter(task => task.id !== Id));

  // Remove from data
  setData(prev => prev.filter(item => item.id !== Id));

  // Add in resolved
  const resolved = data.find(item => item.id === Id);
  setTaskResolved(prev => [...prev, resolved]);
   
}

  return (
    <>
    <div>
      <Navbar/>

      {/* PROGRESS BAR */}
      <div className='mx-20 max-sm:mx-4 flex gap-10 max-sm:gap-4 justify-center max-sm:flex-col py-20 max-sm:py-6'>
         <div className="w-178 max-sm:w-100 h-62.5 rounded-xl text-white flex items-center justify-center shadow-lg overflow-hidden text-center"
         style={{background: 'linear-gradient(125.07deg, rgba(99, 46, 227, 1), rgba(159, 98, 242, 1) 100%)',}}>

           <img src={vector1} className="z-2  pr-10 object-cover" />

           <div className="z-10">
             <p className="text-2xl whitespace-nowrap">In-Progress</p>
             <p className="text-6xl font-semibold mt-4">{taskSelected.length}</p>
           </div>

           <img src={vector2} className="z-2 pl-10 object-cover" />
         </div>
          <div className="w-178 max-sm:w-100 h-62.5 rounded-xl text-white flex items-center justify-center shadow-lg overflow-hidden text-center"
          style={{background: 'linear-gradient(90.00deg, rgba(84, 207, 103.68001556396484, 1),rgba(0, 130, 122.20001220703125, 1) 100%)',}}>

           <img src={vector1} className="z-2 pr-10" />

           <div className="z-10">
             <p className="text-2xl">Resolved</p>
             <p className="text-6xl font-semibold mt-4">{taskResolved.length}</p>
           </div>

           <img src={vector2} className="z-2 pl-10" />
         </div>
 
      </div>

      {/* MAIN PART */}
      <div className='px-20 max-sm:px-4 mb-10 flex max-sm:flex-col gap-8 justify-center'>

        <div>
           <p className='text-2xl text-[#34485a] font-semibold mb-4'>Customer Tickets</p>
           {/* ALL CARDS */}
           <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-4 gap-x-4'>
              
              {
               data.map(item => (
               // Single Card
                 <div key={item.id} 
                      className='w-130 max-sm:w-100 mb-4 p-4 rounded-md shadow-2xl hover:bg-green-100 hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-200 ease-in-out'
                      onClick={() => item.status === "Open" && handleTicket(item.id)}>
                   <div className='flex justify-between items-center'>
                     <p className='textarea-lg font-medium'>{item.title}</p>
                     <p className={`${item.status === "Open" ? "bg-[#b9f8cf]" : "bg-[#f8f3b9]"}  rounded-3xl flex items-center gap-1 p-2`}>
                      <span className={`w-4 h-4 ml-1 ${item.status === "Open" ? "bg-[#02a53b]" : "bg-[#febb0c]"} rounded-full inline-block`}></span>
                      <span className={`font-medium mr-2 ${item.status === "Open" ? "text-[#0b5e06]" : "text-[#9c7700]"} whitespace-nowrap`}>{item.status === "Open" ? "Open" : "In-Progress"}</span>
                     </p>
                   </div>
                   <p className='text-[#627382] mb-4 mt-3'>{item.description}</p>
                   <div className='flex justify-between'>
                      <div className='flex gap-4'>
                        <p className='text-[#627382]'>#<span>{item.id}</span></p>
                        <p className={`${item.priority === "High Priority" ? "text-[#ee2626]" : item.priority === "Medium Priority" ? "text-[#febb0c]" : "text-[#02a53b]"} font-medium`}>{item.priority}</p>
                      </div>
                      <div className='flex gap-4'>
                        <p className='text-[#627382]'>{item.customer}</p>
                        <p className='text-[#627382] flex'>
                          <img src={cal} alt="calendar" className='h-6'/>
                          <span>{item.createdAt}</span>
                        </p>
                      </div>
                   </div>
                 </div>))}
  
           </div>
        </div>

        {/* STATUS */}
        <div className='w-90 max-sm:w-full'>
          <div className='mb-10'>
             <p className='text-2xl text-[#34485a] font-semibold mb-4'>Task Status</p>
             {
              taskSelected.length === 0 ? 
              <p className='text-[#627382]'> Select a ticket to add to Task Status</p> : (taskSelected.map(task => {
                return (
                <div key={task.id} className='p-4 shadow-2xl w-90 max-sm:w-full rounded-xl mb-4'>
              <p className='font-medium text-lg'>{task.title}</p>
              <button 
              className='text-white bg-[#02A53B] w-full h-10 rounded-md hover:bg-[#088130] active:scale-95 transition duration-200 ease-in-out mt-4'
              onClick={() => handleComplete(task.id)}>Complete</button>
             </div>);
              }))
             }
          </div>

          <div className='grid grid-cols-1'>
             <p className='text-2xl text-[#34485a] font-semibold mb-4'>Resolved Task</p>
             {
              taskResolved.length === 0 ? <p className='text-[#627382]'>No resolved tasks yet.</p> : (taskResolved.map( task => {
                return (
                  <button key={task.id} className='bg-[#E0E7FF] w-90 max-sm:w-full font-medium text-lg px-5 py-4 rounded-xl text-start mb-4'>{task.title}</button>);
              }))
             }
          </div>
          
        </div>

      </div>
      
      <Footer/>
      <ToastContainer />
    </div>
    </>
  )
}

export default App
