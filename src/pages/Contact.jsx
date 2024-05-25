import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(`${import.meta.env.VITE_BACKEND_URL}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          name: name,
          message: message,
        }),
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="flex flex-col gap-10 items-center">
      <h1>Contact Us</h1>
      <p className="mx-3">
        Shoot us an email to get a demo and early access to the tool for your feedback. If you have any features that you&apos;d like us to build, let us know!
      </p>

      {submitted ? (
        <p>Thank you for your message. We&apos;ll get back to you soon!</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 ">
          <Label htmlFor="Name">Name</Label>
          <Input label="Name" value={name} onChange={(e) => setName(e.target.value)} required className="min-w-80 pt-0" />
          <Label htmlFor="Email">Email</Label>
          <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" required className="min-w-80 pt-0" />
          <Label htmlFor="Message">Message</Label>
          <Textarea label="Message" value={message} onChange={(e) => setMessage(e.target.value)} multiline rows={4} required className="min-w-80 pt-0" />
          <Button type="submit">Submit</Button>
        </form>
      )}
    </div>
  );
}
