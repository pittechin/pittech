function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);

  const id = Utilities.getUuid().substring(0, 8); // Unique 8-char ID
  const timestamp = new Date();

  // Save to sheet
  sheet.appendRow([
    id,
    data.name,
    data.number,
    data.email,
    data.collegeName,
    data.department,
    data.currentYear,
    timestamp
  ]);

  // // Send email to admin
  // MailApp.sendEmail({
  //   to: "admin@example.com", // 🔁 Replace with your email
  //   subject: "New Student Registration",
  //   body: `New registration received:\n\nID: ${id}\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.number}\nCollege: ${data.collegeName}\nDepartment: ${data.department}\nYear: ${data.currentYear}`
  // });

  // // Send email to user
  // MailApp.sendEmail({
  //   to: data.email,
  //   subject: "Your Registration was Successful",
  //   body: `Hello ${data.name},\n\nThank you for registering.\nYour reference ID is: ${id}.\nWe will contact you soon.\n\nRegards,\nTeam`
  // });

  return ContentService.createTextOutput(
    JSON.stringify({ success: true, id })
  ).setMimeType(ContentService.MimeType.JSON);
}
