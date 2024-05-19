import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { ReportCardGenerator } from "@/components/ReportCardGenerator";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, LucideWand } from "lucide-react";
import { useState, useEffect } from "react";

export const ReportCard = () => {
  const [isLoading, setIsLoading] = useState(false);

  async function getStrengthsAndNextStepsForTraits() {
    setIsLoading(true);
    setTimeout(() => {
      form.setValue(
        "strengthsNextStepsLSWH",
        `1. Despite being absent for 5 days, the student excels in taking responsibility for their actions. They consistently complete their assignments and come prepared to class.\n2. Although the student has been late 3 times, they demonstrate excellent organizational skills in managing their belongings and keeping their work area tidy.\n3. The student showcases satisfactory levels of independence. They are able to complete tasks on their own but may benefit from additional guidance when faced with more complex assignments.\n4. The student demonstrates a need for improvement in collaboration. While they work well individually, they struggle to effectively contribute and cooperate within group activities.\n5. On the other hand, the student's initiative is truly commendable. They actively seek out opportunities to learn and engage in class discussions.\n6. It is evident that the student possesses great strengths in math and English. They consistently display a strong understanding of these subjects and consistently achieve good scores.\n7. The student also excels in memory. They are able to retain information and recall it accurately during assessments.\n8. However, there is a need for improvement in science. The student may benefit from additional support and guidance in this subject to enhance their understanding and performance.\n9. The student should also continue working on developing their independence. Encouraging them to tackle more challenging tasks on their own will help foster a greater sense of confidence.\n10. Finally, the student should actively work on improving their collaboration skills. Encouraging them to actively listen to and value the ideas of their peers will enhance their ability to work effectively in a group setting.`
      );
      setIsLoading(false);
    }, 2000);
  }
  async function getStrengthsAndNextStepsForSubjects() {
    setIsLoading(true);
    setTimeout(() => {
      form.setValue(
        "strengthsNextStepsSubjects",
        `1. Despite being absent for 5 days, the student excels in taking responsibility for their actions. They consistently complete their assignments and come prepared to class.\n2. Although the student has been late 3 times, they demonstrate excellent organizational skills in managing their belongings and keeping their work area tidy.\n3. The student showcases satisfactory levels of independence. They are able to complete tasks on their own but may benefit from additional guidance when faced with more complex assignments.\n4. The student demonstrates a need for improvement in collaboration. While they work well individually, they struggle to effectively contribute and cooperate within group activities.\n5. On the other hand, the student's initiative is truly commendable. They actively seek out opportunities to learn and engage in class discussions.\n6. It is evident that the student possesses great strengths in math and English. They consistently display a strong understanding of these subjects and consistently achieve good scores.\n7. The student also excels in memory. They are able to retain information and recall it accurately during assessments.\n8. However, there is a need for improvement in science. The student may benefit from additional support and guidance in this subject to enhance their understanding and performance.\n9. The student should also continue working on developing their independence. Encouraging them to tackle more challenging tasks on their own will help foster a greater sense of confidence.\n10. Finally, the student should actively work on improving their collaboration skills. Encouraging them to actively listen to and value the ideas of their peers will enhance their ability to work effectively in a group setting.`
      );
      setIsLoading(false);
    }, 2000);
  }

  useEffect(() => {
    let formValues = localStorage.getItem("formValues");
    if (formValues) {
      formValues = JSON.parse(formValues);
      Object.keys(formValues).forEach((key) => form.setValue(key, formValues[key]));
    }
  });

  const { id, studentId } = useParams();

  const threePlans = [
    { value: "ESLELD", label: "ESL/ELD" },
    { value: "IEP", label: "IEP" },
    { value: "NA", label: "N/A" },
  ];
  const fourPlans = [
    { value: "ESLELD", label: "ESL/ELD" },
    { value: "IEP", label: "IEP" },
    { value: "French", label: "French" },
    { value: "NA", label: "N/A" },
  ];
  const sixPlans = [
    { value: "ESLELD", label: "ESL/ELD" },
    { value: "IEP", label: "IEP" },
    { value: "Core", label: "Core" },
    { value: "Immersion", label: "Immersion" },
    { value: "Extended", label: "Extended" },
    { value: "NA", label: "N/A" },
  ];
  const threeResults = [
    { value: "1", label: "Progressing With Difficulty" },
    { value: "2", label: "Progressing Well" },
    { value: "3", label: "Progressing Very Well" },
  ];
  const selectItems = [
    { value: "E", label: "E - Excellent" },
    { value: "G", label: "G - Good" },
    { value: "S", label: "S - Satisfactory" },
    { value: "N", label: "N - Needs improvement" },
  ];

  const formSchema = z.object({
    studentName: z.string(),
    oen: z.string(),
    daysAbsent: z.string(),
    totalDaysAbsent: z.string(),
    grade: z.string(),
    teacher: z.string(),
    timesLate: z.string(),
    totalTimesLate: z.string(),
    board: z.string(),
    school: z.string(),
    address: z.string(),
    address2: z.string(),
    principal: z.string(),
    telephone: z.string(),
    responsibility: z.string(),
    organization: z.string(),
    independentWork: z.string(),
    collaboration: z.string(),
    initiative: z.string(),
    selfRegulation: z.string(),
    strengthsNextStepsLSWH: z.string(),
    // second page
    languagePlan: z.string(),
    languageResult: z.string(),

    frenchPlan: z.string(),
    frenchResult: z.string(),

    nativeLanguagePlan: z.string(),
    nativeLanguageResult: z.string(),

    mathPlan: z.string(),
    mathResult: z.string(),

    scienceAndTechnologyPlan: z.string(),
    scienceAndTechnologyResult: z.string(),

    socialStudiesPlan: z.string(),
    socialStudiesResult: z.string(),

    healthPlan: z.string(),
    healthResult: z.string(),

    physicalEducationPlan: z.string(),
    physicalEducationResult: z.string(),

    dancePlan: z.string(),
    danceResult: z.string(),

    dramaPlan: z.string(),
    dramaResult: z.string(),

    musicPlan: z.string(),
    musicResult: z.string(),

    visualArtsPlan: z.string(),
    visualArtsResult: z.string(),

    otherPlan: z.string(),
    otherResult: z.string(),

    strengthsNextStepsSubjects: z.string(),
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
      strengthsNextStepsLSWH: "",
      languagePlan: "",
      languageResult: "",
      frenchPlan: "",
      frenchResult: "",
      nativeLanguagePlan: "",
      nativeLanguageResult: "",
      mathPlan: "",
      mathResult: "",
      scienceAndTechnologyPlan: "",
      scienceAndTechnologyResult: "",
      socialStudiesPlan: "",
      socialStudiesResult: "",
      healthPlan: "",
      healthResult: "",
      physicalEducationPlan: "",
      physicalEducationResult: "",
      dancePlan: "",
      danceResult: "",
      dramaPlan: "",
      dramaResult: "",
      musicPlan: "",
      musicResult: "",
      visualArtsPlan: "",
      visualArtsResult: "",
      otherPlan: "",
      otherResult: "",
      strengthsNextStepsSubjects: "",
    },
  });

  function onSubmit(values) {
    const formValues = JSON.stringify(values);
    localStorage.setItem("formValues", formValues);
  }

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
              name="strengthsNextStepsLSWH"
              render={({ field }) => (
                <FormItem className="w-5/6">
                  <FormControl>
                    <div className="flex items-end gap-3">
                      <Textarea placeholder="Strengths and Next Steps" {...field} />
                      <Button
                        disabled={isLoading ? true : false}
                        type="button"
                        onClick={() => {
                          getStrengthsAndNextStepsForTraits();
                        }}
                      >
                        {(isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />) || <LucideWand />}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-evenly gap-4">
            <FormField
              control={form.control}
              name="languagePlan"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Language</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                      {threePlans.map((item, index) => (
                        <FormItem className="flex items-center space-x-3 space-y-0" key={index}>
                          <FormControl>
                            <RadioGroupItem value={item.value} />
                          </FormControl>
                          <FormLabel>{item.label}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="languageResult"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Result</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                      {threeResults.map((item, index) => (
                        <FormItem className="flex items-center space-x-3 space-y-0" key={index}>
                          <FormControl>
                            <RadioGroupItem value={item.value} />
                          </FormControl>
                          <FormLabel>{item.label}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-evenly gap-4">
            <FormField
              control={form.control}
              name="frenchPlan"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>French</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                      {sixPlans.map((item, index) => (
                        <FormItem className="flex items-center space-x-3 space-y-0" key={index}>
                          <FormControl>
                            <RadioGroupItem value={item.value} />
                          </FormControl>
                          <FormLabel>{item.label}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="frenchResult"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Result</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                      {threeResults.map((item, index) => (
                        <FormItem className="flex items-center space-x-3 space-y-0" key={index}>
                          <FormControl>
                            <RadioGroupItem value={item.value} />
                          </FormControl>
                          <FormLabel>{item.label}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-evenly gap-4">
            <FormField
              control={form.control}
              name="nativeLanguagePlan"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Native Language</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                      {threePlans.map((item, index) => (
                        <FormItem className="flex items-center space-x-3 space-y-0" key={index}>
                          <FormControl>
                            <RadioGroupItem value={item.value} />
                          </FormControl>
                          <FormLabel>{item.label}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nativeLanguageResult"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Result</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                      {threeResults.map((item, index) => (
                        <FormItem className="flex items-center space-x-3 space-y-0" key={index}>
                          <FormControl>
                            <RadioGroupItem value={item.value} />
                          </FormControl>
                          <FormLabel>{item.label}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-evenly gap-4">
            <FormField
              control={form.control}
              name="mathPlan"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Math</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                      {threePlans.map((item, index) => (
                        <FormItem className="flex items-center space-x-3 space-y-0" key={index}>
                          <FormControl>
                            <RadioGroupItem value={item.value} />
                          </FormControl>
                          <FormLabel>{item.label}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mathResult"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Result</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                      {threeResults.map((item, index) => (
                        <FormItem className="flex items-center space-x-3 space-y-0" key={index}>
                          <FormControl>
                            <RadioGroupItem value={item.value} />
                          </FormControl>
                          <FormLabel>{item.label}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-evenly gap-4">
            <FormField
              control={form.control}
              name="scienceAndTechnologyPlan"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Science and Technology</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                      {threePlans.map((item, index) => (
                        <FormItem className="flex items-center space-x-3 space-y-0" key={index}>
                          <FormControl>
                            <RadioGroupItem value={item.value} />
                          </FormControl>
                          <FormLabel>{item.label}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="scienceAndTechnologyResult"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Result</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                      {threeResults.map((item, index) => (
                        <FormItem className="flex items-center space-x-3 space-y-0" key={index}>
                          <FormControl>
                            <RadioGroupItem value={item.value} />
                          </FormControl>
                          <FormLabel>{item.label}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-evenly gap-4">
            <FormField
              control={form.control}
              name="socialStudiesPlan"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Social Studies</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                      {threePlans.map((item, index) => (
                        <FormItem className="flex items-center space-x-3 space-y-0" key={index}>
                          <FormControl>
                            <RadioGroupItem value={item.value} />
                          </FormControl>
                          <FormLabel>{item.label}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="socialStudiesResult"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Result</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                      {threeResults.map((item, index) => (
                        <FormItem className="flex items-center space-x-3 space-y-0" key={index}>
                          <FormControl>
                            <RadioGroupItem value={item.value} />
                          </FormControl>
                          <FormLabel>{item.label}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-evenly gap-4">
            <FormField
              control={form.control}
              name="healthPlan"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Health</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                      {threePlans.map((item, index) => (
                        <FormItem className="flex items-center space-x-3 space-y-0" key={index}>
                          <FormControl>
                            <RadioGroupItem value={item.value} />
                          </FormControl>
                          <FormLabel>{item.label}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="healthResult"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Result</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                      {threeResults.map((item, index) => (
                        <FormItem className="flex items-center space-x-3 space-y-0" key={index}>
                          <FormControl>
                            <RadioGroupItem value={item.value} />
                          </FormControl>
                          <FormLabel>{item.label}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-evenly gap-4">
            <FormField
              control={form.control}
              name="physicalEducationPlan"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Physical Education</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                      {threePlans.map((item, index) => (
                        <FormItem className="flex items-center space-x-3 space-y-0" key={index}>
                          <FormControl>
                            <RadioGroupItem value={item.value} />
                          </FormControl>
                          <FormLabel>{item.label}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="physicalEducationResult"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Result</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                      {threeResults.map((item, index) => (
                        <FormItem className="flex items-center space-x-3 space-y-0" key={index}>
                          <FormControl>
                            <RadioGroupItem value={item.value} />
                          </FormControl>
                          <FormLabel>{item.label}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-evenly gap-4">
            <FormField
              control={form.control}
              name="dancePlan"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Dance</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                      {fourPlans.map((item, index) => (
                        <FormItem className="flex items-center space-x-3 space-y-0" key={index}>
                          <FormControl>
                            <RadioGroupItem value={item.value} />
                          </FormControl>
                          <FormLabel>{item.label}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="danceResult"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Result</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                      {threeResults.map((item, index) => (
                        <FormItem className="flex items-center space-x-3 space-y-0" key={index}>
                          <FormControl>
                            <RadioGroupItem value={item.value} />
                          </FormControl>
                          <FormLabel>{item.label}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-evenly gap-4">
            <FormField
              control={form.control}
              name="dramaPlan"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Drama</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                      {fourPlans.map((item, index) => (
                        <FormItem className="flex items-center space-x-3 space-y-0" key={index}>
                          <FormControl>
                            <RadioGroupItem value={item.value} />
                          </FormControl>
                          <FormLabel>{item.label}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dramaResult"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Result</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                      {threeResults.map((item, index) => (
                        <FormItem className="flex items-center space-x-3 space-y-0" key={index}>
                          <FormControl>
                            <RadioGroupItem value={item.value} />
                          </FormControl>
                          <FormLabel>{item.label}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-evenly gap-4">
            <FormField
              control={form.control}
              name="musicPlan"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Music</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                      {fourPlans.map((item, index) => (
                        <FormItem className="flex items-center space-x-3 space-y-0" key={index}>
                          <FormControl>
                            <RadioGroupItem value={item.value} />
                          </FormControl>
                          <FormLabel>{item.label}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="musicResult"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Result</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                      {threeResults.map((item, index) => (
                        <FormItem className="flex items-center space-x-3 space-y-0" key={index}>
                          <FormControl>
                            <RadioGroupItem value={item.value} />
                          </FormControl>
                          <FormLabel>{item.label}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-evenly gap-4">
            <FormField
              control={form.control}
              name="visualArtsPlan"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Visual Arts</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                      {fourPlans.map((item, index) => (
                        <FormItem className="flex items-center space-x-3 space-y-0" key={index}>
                          <FormControl>
                            <RadioGroupItem value={item.value} />
                          </FormControl>
                          <FormLabel>{item.label}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="visualArtsResult"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Result</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                      {threeResults.map((item, index) => (
                        <FormItem className="flex items-center space-x-3 space-y-0" key={index}>
                          <FormControl>
                            <RadioGroupItem value={item.value} />
                          </FormControl>
                          <FormLabel>{item.label}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-evenly gap-4">
            <FormField
              control={form.control}
              name="otherPlan"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Other</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                      {fourPlans.map((item, index) => (
                        <FormItem className="flex items-center space-x-3 space-y-0" key={index}>
                          <FormControl>
                            <RadioGroupItem value={item.value} />
                          </FormControl>
                          <FormLabel>{item.label}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="otherResult"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Result</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                      {threeResults.map((item, index) => (
                        <FormItem className="flex items-center space-x-3 space-y-0" key={index}>
                          <FormControl>
                            <RadioGroupItem value={item.value} />
                          </FormControl>
                          <FormLabel>{item.label}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-evenly w-full">
            <FormField
              control={form.control}
              name="strengthsNextStepsSubjects"
              render={({ field }) => (
                <FormItem className="w-5/6">
                  <FormControl>
                    <div className="flex items-end gap-3">
                      <Textarea placeholder="Strengths and Next Steps for Subjects" {...field} />
                      <Button
                        type="button"
                        onClick={() => {
                          getStrengthsAndNextStepsForSubjects();
                        }}
                      >
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

      {/* THIS GENERATES THE REPORT CARD */}
      <ReportCardGenerator formObject={form.getValues()} />
    </div>
  );
};
