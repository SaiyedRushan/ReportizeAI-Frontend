import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Download } from "lucide-react";

export default function LessonPlan() {
  const [lessonPlan, setLessonPlan] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  const getLessonPlan = () => {
    setLessonPlan(null);
    setIsFetching(true);
    console.log("fetching lesson plan");
    setTimeout(() => {
      setLessonPlan(`
        Explore Our Latest Artificial Intelligence (AI) Tools Created by and for Educators.
        These educational tools assist educators create more interactive, thoughtful, and meaningful learning opportunities for students. By fusing Artificial Intelligence and human creativity, Auto Classmate seeks to help educators become leaders in the ethical implementation of AI in the classroom.
      `);
      setIsFetching(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col gap-3 items-center">
      <h2> Lesson Plan Generator</h2>

      <Label htmlFor="grade">Grade</Label>
      <Input id="grade" className="max-w-80 pt-0" placeholder="Example: Grade 12, KG-1" />

      <Label htmlFor="goal">Goals/Topics</Label>
      <Input id="goal" className="max-w-80 pt-0" placeholder="Example: Basic probability principles, Help students identify, create, and extend patterns. " />

      <Label htmlFor="subject">Subject</Label>
      <Input id="subject" className="max-w-80 pt-0" placeholder="Example: Physics, Maths, English" />

      <Button onClick={getLessonPlan}>
        {isFetching && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Generate Lesson Plan
      </Button>

      {(!lessonPlan && (
        <div className="flex flex-col space-y-3 p-5 border-1 bg-white opacity-50 rounded-xl">
          <Skeleton className="min-h-[200px] min-w-[350px]" />
          <div className="space-y-2">
            <Skeleton className="h-10 w-5/6" />
            <Skeleton className="h-10 w-5/6" />
          </div>
        </div>
      )) || (
        <>
          <Label htmlFor="lessonplan">Lesson Plan</Label>
          <Textarea id="lessonplan" className="w-5/6 min-h-[300px]" value={lessonPlan} onChange={(e) => setLessonPlan(e.target.value)}></Textarea>
          <Button>
            Download
            <Download className="mx-2" />
          </Button>
        </>
      )}
    </div>
  );
}
