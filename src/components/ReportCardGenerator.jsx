import { PDFDocument, PDFRadioGroup, PDFTextField } from "pdf-lib";
import { useState } from "react";
import { Button } from "./ui/button";

export const ReportCardGenerator = ({ formObject }) => {
  const [filledPDF, setFilledPDF] = useState(null);

  const fillPDF = async () => {
    // load pdf
    const existingPdfBytes = await fetch("/rc1-6.pdf").then((res) => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const pdfForm = pdfDoc.getForm();

    // go through each form value and fill in the appropriate pdf form field
    // pdf field names match the form field names in the frontend
    Object.keys(formObject).forEach((fieldName) => {
      const f = pdfForm.getField(fieldName);

      if (f instanceof PDFTextField) {
        f.setFontSize(10);
        f.enableMultiline();
        f.setText(String(formObject[fieldName]));
      }
      // else if (f instanceof PDFRadioGroup) {
      //   f.clear();
      //   f.select(String(formObject[fieldName])); // ! this is giving error, just need to set up the pdf radio buttons with custom export values for each option
      // }
    });

    pdfForm.flatten();
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
