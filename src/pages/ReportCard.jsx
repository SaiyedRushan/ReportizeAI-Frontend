import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { ReportCardGenerator } from "@/components/ReportCardGenerator";
import { Textarea } from "@/components/ui/textarea";
import { LucideWand } from "lucide-react";

export const ReportCard = () => {
  async function getReportCardComments() {
    form.setValue(
      "strengthsNextSteps",
      `1. Despite being absent for 5 days, the student excels in taking responsibility for their actions. They consistently complete their assignments and come prepared to class.\n2. Although the student has been late 3 times, they demonstrate excellent organizational skills in managing their belongings and keeping their work area tidy.\n3. The student showcases satisfactory levels of independence. They are able to complete tasks on their own but may benefit from additional guidance when faced with more complex assignments.\n4. The student demonstrates a need for improvement in collaboration. While they work well individually, they struggle to effectively contribute and cooperate within group activities.\n5. On the other hand, the student's initiative is truly commendable. They actively seek out opportunities to learn and engage in class discussions.\n6. It is evident that the student possesses great strengths in math and English. They consistently display a strong understanding of these subjects and consistently achieve good scores.\n7. The student also excels in memory. They are able to retain information and recall it accurately during assessments.\n8. However, there is a need for improvement in science. The student may benefit from additional support and guidance in this subject to enhance their understanding and performance.\n9. The student should also continue working on developing their independence. Encouraging them to tackle more challenging tasks on their own will help foster a greater sense of confidence.\n10. Finally, the student should actively work on improving their collaboration skills. Encouraging them to actively listen to and value the ideas of their peers will enhance their ability to work effectively in a group setting.`
    );
  }

  const { id, studentId } = useParams();

  const formSchema = z.object({
    studentName: z.string().min(2, {
      message: "Student Name is mandatory.",
    }),
    oen: z.string(),
    daysAbsent: z.string(),
    totalDaysAbsent: z.string(),
    grade: z.string().max(2, {
      message: "Grade cannot be more than 2 characters.",
    }),
    teacher: z.string().min(2, {
      message: "Teacher Name is mandatory.",
    }),
    timesLate: z.string(),
    totalTimesLate: z.string(),
    board: z.string().min(2, {
      message: "Board Name is mandatory.",
    }),
    school: z.string().min(2, {
      message: "School Name is mandatory.",
    }),
    address: z.string().min(2, {
      message: "Address is mandatory.",
    }),
    address2: z.string().min(2, {
      message: "Address is mandatory.",
    }),
    principal: z.string().min(2, {
      message: "Principal Name is mandatory.",
    }),
    telephone: z.string().min(2, {
      message: "Telephone is mandatory.",
    }),
    responsibility: z.string().max(1, {
      message: "Responsibility cannot be more than 1 character.",
    }),
    organization: z.string().max(1, {
      message: "Organization cannot be more than 1 character.",
    }),
    independentWork: z.string().max(1, {
      message: "Independent Work cannot be more than 1 character.",
    }),
    collaboration: z.string().max(1, {
      message: "Collaboration cannot be more than 1 character.",
    }),
    initiative: z.string().max(1, {
      message: "Initiative cannot be more than 1 character.",
    }),
    selfRegulation: z.string().max(1, {
      message: "Self Regulation cannot be more than 1 character.",
    }),
    strengthsNextSteps: z.string().min(2, {
      message: "Strengths and Next Steps is mandatory.",
    }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentName: "",
      oen: "",
      daysAbsent: "",
      totalDaysAbsent: "",
      grade: "",
      teacher: "",
      timesLate: "",
      totalTimesLate: "",
      board: "",
      school: "",
      address: "",
      address2: "",
      principal: "",
      telephone: "",
      responsibility: "",
      organization: "",
      independentWork: "",
      collaboration: "",
      initiative: "",
      selfRegulation: "",
      strengthsNextSteps: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
    // console.log(form);
  }

  const selectItems = [
    { value: "E", label: "E - Excellent" },
    { value: "G", label: "G - Good" },
    { value: "S", label: "S - Satisfactory" },
    { value: "N", label: "N - Needs improvement" },
  ];

  return (
    <div className="flex flex-col mx-20 p-4 my-3  border-2">
      <div className="flex justify-between mb-4">
        <h4>Report Card for Student: {studentId} </h4>
        <Link to={`/dashboard/class/${id}`}>
          <Button>Back to Class</Button>
        </Link>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex gap-4 justify-evenly">
            <FormField
              control={form.control}
              name="studentName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Students Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="oen"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="OEN" type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="daysAbsent"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Days Absent" type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="totalDaysAbsent"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Total Days Absent" type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex gap-4 justify-evenly">
            <FormField
              control={form.control}
              name="grade"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Grade" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="teacher"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Teacher" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="timesLate"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Times Late" type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="totalTimesLate"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Total Times Late" type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex gap-4 justify-evenly">
            <FormField
              control={form.control}
              name="board"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Board" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="school"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="School" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address2"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Address2" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex gap-4 justify-evenly">
            <FormField
              control={form.control}
              name="principal"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Principal" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="telephone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Telephone" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex gap-4 justify-evenly flex-wrap">
            <FormField
              control={form.control}
              name="responsibility"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Responsibility" {...field} />
                      </SelectTrigger>
                      <SelectContent>
                        {selectItems.map((item, index) => (
                          <SelectItem key={index} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="organization"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Organization" {...field} />
                      </SelectTrigger>
                      <SelectContent>
                        {selectItems.map((item, index) => (
                          <SelectItem key={index} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="independentWork"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Independent Work" {...field} />
                      </SelectTrigger>
                      <SelectContent>
                        {selectItems.map((item, index) => (
                          <SelectItem key={index} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="collaboration"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Collaboration" {...field} />
                      </SelectTrigger>
                      <SelectContent>
                        {selectItems.map((item, index) => (
                          <SelectItem key={index} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="initiative"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Initiative" {...field} />
                      </SelectTrigger>
                      <SelectContent>
                        {selectItems.map((item, index) => (
                          <SelectItem key={index} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="selfRegulation"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Self Regulation" {...field} />
                      </SelectTrigger>
                      <SelectContent>
                        {selectItems.map((item, index) => (
                          <SelectItem key={index} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-evenly w-full">
            <FormField
              control={form.control}
              name="strengthsNextSteps"
              render={({ field }) => (
                <FormItem className="w-5/6">
                  <FormControl>
                    <div className="flex items-end gap-3">
                      <Textarea placeholder="Strengths and Next Steps" {...field} />
                      <Button
                        type="button"
                        onClick={() => {
                          getReportCardComments();
                        }}>
                        <LucideWand />
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-center items-center">
            <Button type="submit" className="mr-4">
              Save
            </Button>
          </div>
        </form>
      </Form>
      <ReportCardGenerator values={form.getValues()} />
    </div>
  );
};
