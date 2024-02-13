import { PDFDocument } from "pdf-lib";
import { useState } from "react";
import { Button } from "./ui/button";

export const ReportCardGenerator = ({ values }) => {
  const [filledPDF, setFilledPDF] = useState(null);

  const fillPDF = async () => {
    const existingPdfBytes = await fetch("/reportCardGr1-6.pdf").then((res) => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const form = pdfDoc.getForm();

    // fill in the form fields
    Object.keys(values).forEach((key) => {
      const field = form.getTextField(key);
      field.setFontSize(10);
      field.enableMultiline();
      field.setText(String(values[key]));
    });

    form.flatten();
    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const filledPDFUrl = URL.createObjectURL(blob);

    setFilledPDF(filledPDFUrl);
  };

  return (
    <>
      <div className="flex justify-center">
        <Button onClick={fillPDF} className="my-3">
          Generate Report Card
        </Button>
      </div>
      {filledPDF && <iframe src={filledPDF} width="100%" height="600px" />}
    </>
  );
};
