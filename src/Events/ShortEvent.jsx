
import EventShortCard from "./EventShortCard";
import eventDetails from "./eventDetails";


const ShortEvent = () => {
  
  return ( 
    <div className="eventCard" >
       <div className="wrapper">
       <ul className=" carousel">
          {
            eventDetails.map((event) => {
              return(
                <li key={event.title}>
                  <EventShortCard title={event.title} url={event.url2} />
                </li>
              )
            })
          }
       </ul>
         
       </div>
      </div>
   );
}
 
export default ShortEvent;
