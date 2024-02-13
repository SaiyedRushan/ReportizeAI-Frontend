import { Button } from "@/components/ui/button";
import { LucideTrash } from "lucide-react";
import { User } from "lucide-react";
import { LucidePlus } from "lucide-react";
import { LucideEdit } from "lucide-react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const Class = () => {
  const { id } = useParams();

  const dummyStudents = [
    { id: 1, name: "Fulwala" },
    { id: 2, name: "Rushanshah Saiyed" },
    { id: 3, name: "Syed Ameen" },
    { id: 4, name: "Jane Smith" },
    { id: 5, name: "John Johnson" },
    { id: 6, name: "Jane Johnson" },
  ];

  return (
    <div className="flex flex-col px-20 my-3">
      <div>
        <div className="flex justify-between mb-4">
          <h4>Your Students: </h4>
          <Button>
            Create New Student <LucidePlus className="ml-2" />
          </Button>
        </div>

        {dummyStudents.map((item, index) => (
          <div key={index} className="border-b-2 py-2 flex justify-between">
            <Link to={`/dashboard/class/${id}/${item.id}/report`}>
              <Button variant="ghost">
                <User className="mr-2" /> {item.name}
              </Button>
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
};
