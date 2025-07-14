function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    const id = Utilities.getUuid().substring(0, 8); // Generate 8-char unique ID
    const timestamp = new Date();

    // Save to Google Sheet
    sheet.appendRow([
      id,
      data.name,
      data.number,
      data.email,
      data.collegeName,
      data.department,
      data.currentYear,
      data.meassage || '', // optional
      timestamp,
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true, id }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader("Access-Control-Allow-Origin", "*")
      .setHeader("Access-Control-Allow-Methods", "POST")
      .setHeader("Access-Control-Allow-Headers", "Content-Type");
  } catch (error) 
  {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader("Access-Control-Allow-Origin", "*")
      .setHeader("Access-Control-Allow-Methods", "POST")
      .setHeader("Access-Control-Allow-Headers", "Content-Type");
  }
}