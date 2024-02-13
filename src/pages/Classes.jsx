import { Button } from "@/components/ui/button";
import { LucideTrash } from "lucide-react";
import { LucideEdit } from "lucide-react";
import { LucidePlus } from "lucide-react";
import { Link } from "react-router-dom";

export default function Classes() {
  const dummyClasses = [
    { id: 1, name: "Grade 1A Math" },
    { id: 2, name: "Grade 1B Math" },
    { id: 3, name: "Grade 2A Math" },
    { id: 4, name: "Grade 2B Math" },
    { id: 5, name: "Grade 3A Math" },
    { id: 6, name: "Grade 3B Math" },
    { id: 7, name: "Grade 4A Math" },
    { id: 8, name: "Grade 4B Math" },
    { id: 9, name: "Grade 5A Math" },
    { id: 10, name: "Grade 5B Math" },
  ];

  return (
    <div className="flex flex-col px-20 my-3">
      <div>
        <div className="flex justify-between mb-4">
          <h4>Your Classes: </h4>
          <Button>
            Create New Class <LucidePlus className="ml-2" />
          </Button>
        </div>

        {dummyClasses.map((item, index) => (
          <div key={index} className="border-b-2 py-2 flex justify-between">
            <Link to={`/dashboard/class/${item.id}`}>
              <Button variant="ghost">{item.name}</Button>
            </Link>

            <div className="flex gap-10">
              <Button>
                Edit <LucideEdit className="ml-3" size="15" />
              </Button>
              <Button className="bg-red-700">
                Delete <LucideTrash className="ml-3" size="15" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
