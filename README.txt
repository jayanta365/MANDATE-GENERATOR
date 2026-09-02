NACH MANDATE GENERATOR — CORRECTED VERSION

GitHub Pages files required:
- index.html
- template.png

The Excel workbook is NOT required by the web application. The corrected Excel workbook is included separately only as a reference/source file.

CORRECTIONS IN THIS VERSION
1. The template was reviewed against the supplied Excel workbook.
2. CREATE / MODIFY / CANCEL radio markers are true circles, correctly proportioned and positioned.
3. Sponsor bank code PUNB0RRBAGB and ASSAM GRAMIN BANK use a bolder Arial treatment to match the visual weight of generated input data.
4. Existing generated-input coordinates were not changed.
5. EMI End Date is calculated automatically from EMI Start From + Loan Period (months).
6. The user enters EMI Start From and Loan Period only; EMI End Date is not manually entered.
7. Filled Excel download has been removed from the web application.
8. The generated PDF is A4 portrait with balanced page margins.
9. The original instructions and sample section remain part of the template.

GITHUB DEPLOYMENT
Upload/replace only:
- index.html
- template.png

Do not rename either file.

TESTING
1. Select Date.
2. Enter Bank A/C Number, Bank Name, IFSC, EMI amount, loan account, EMI Start From, Loan Period, phone and name.
3. Confirm EMI End Date is calculated automatically.
4. Generate the form.
5. Check that generated values remain in their existing positions.
6. Download the A4 PDF and print at 100% / Actual Size for final verification against the original bank form.
