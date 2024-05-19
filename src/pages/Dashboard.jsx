import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { user } = useUser();

  const userExists = (user) => {
    // will check in db if user exists
    console.log("Checking if user exists", user);
  };
  const createUser = (user) => {
    // will create user in db
    console.log("Creating user", user);
  };

  // The code in here will run once when the component mounts
  useEffect(() => {
    if (!userExists(user)) {
      createUser(user);
    }
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      alert("Order placed! You will receive an email confirmation.");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dummyClasses = [
    { id: 1, name: "Grade 1A Math" },
    { id: 2, name: "Grade 1B Math" },
    { id: 3, name: "Grade 2A Math" },
    { id: 4, name: "Grade 2B Math" },
  ];

  const dummyStudents = [
    { id: 2, name: "Rushanshah Saiyed", classId: 1 },
    { id: 3, name: "Syed Ameen", classId: 1 },
    { id: 4, name: "Jane Smith", classId: 2 },
    { id: 5, name: "John Johnson", classId: 2 },
    { id: 6, name: "Jane Johnson", classId: 2 },
  ];
  return (
    <div className="flex flex-col justify-center items-center py-10">
      <div>
        <h1 className="text-3xl  mb-4">Welcome, {user?.fullName} </h1>
        <p className="text-lg text-center">Let&apos;s get started</p>
      </div>

      <div className="flex py-10 gap-20">
        <div className="flex flex-col">
          <p className="text-2xl text-center mb-6">Your Classes</p>
          <div className="border-2 rounded-lg p-3 h-80 overflow-scroll w-[200px]">
            {dummyClasses.map((item, index) => (
              <div key={index} className="border-b-2 py-2">
                <Link to={`/dashboard/class/${item.id}`}>
                  <Button variant="ghost">{item.name}</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col ">
          <p className="text-2xl text-center mb-6">Your Students</p>
          <div className="border-2 rounded-lg p-3 h-80 overflow-scroll w-[200px]">
            {dummyStudents.map((item, index) => (
              <div key={index} className="border-b-2 py-2">
                <Link to={`/dashboard/class/${item.classId}/${item.id}/report`}>
                  <Button variant="ghost">{item.name}</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
