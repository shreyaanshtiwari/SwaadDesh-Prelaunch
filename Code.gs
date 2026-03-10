/**
 * SwaadDesh Waitlist Handler v2.3
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var contents = e.postData.contents;
    var data = JSON.parse(contents);
    
    var email = data.email.toLowerCase().trim();
    var name = data.name.trim();
    var phone = (data.phone || '').toString().trim();
    var timestamp = data.timestamp || new Date().toISOString();

    // 1. Duplicates check (robust)
    var lastRow = sheet.getLastRow();
    if (lastRow > 0) {
      var existingData = sheet.getRange(1, 3, lastRow, 1).getValues(); // Column C is Email
      for (var i = 0; i < existingData.length; i++) {
        if (existingData[i][0].toString().toLowerCase() === email) {
          return ContentService.createTextOutput(JSON.stringify({ 
            "status": "error", 
            "message": "already exists" 
          })).setMimeType(ContentService.MimeType.JSON);
        }
      }
    }

    // 2. Save Data First
    // Columns: A=Timestamp, B=Name, C=Email, D=Phone
    sheet.appendRow([timestamp, name, email, phone]);

    // 3. Try to Send Email
    var emailStatus = "sent";
    try {
      sendWelcomeEmail(email, name);
    } catch (err) {
      emailStatus = "failed: " + err.toString();
      // Optional: Log failure in a new column
      sheet.getRange(sheet.getLastRow(), 5).setValue(emailStatus); // Column E for email status
    }

    return ContentService.createTextOutput(JSON.stringify({ 
      "status": "success", 
      "message": "Added successfully",
      "email_status": emailStatus
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ 
      "status": "error", 
      "message": error.toString() 
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function sendWelcomeEmail(recipientEmail, recipientName) {
  var subject = "Pranaam! Welcome to SwaadDesh"; // Subject updated
  
  var htmlBody = `
    <div style="font-family: 'Georgia', serif; background-color: #fdfbf7; color: #4a0404; padding: 40px 20px; max-width: 600px; margin: 0 auto; border: 1px solid #d4af37; border-radius: 16px;">
        <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="font-size: 32px; font-weight: 900; color: #8f0f0d; margin: 0; letter-spacing: 1px;">SwaadDesh</h1>
            <div style="height: 1px; width: 100px; background: #d4af37; margin: 10px auto;"></div>
        </div>
        <h2 style="font-size: 24px; margin-bottom: 20px;">Pranaam, ${recipientName}!</h2>
        <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Thank you for joining the SwaadDesh inner circle. We are thrilled to have you with us on this journey to rediscover the authentic, heritage flavors of Bharat.
        </p>
        <div style="background-color: #ffffff; padding: 25px; border-radius: 12px; border-left: 4px solid #d4af37; margin-bottom: 30px;">
            <h3 style="margin: 0 0 10px 0; font-size: 18px; color: #8b6914;">✨ Your Exclusive Privilege</h3>
            <p style="margin: 0; font-size: 15px;">
                As an early access member, you are now eligible for a <strong>20% discount</strong> on your first order.
            </p>
        </div>
        <div style="text-align: center;">
            <a href="https://swaaddesh.com" style="background-color: #8f0f0d; color: #ffffff; padding: 12px 30px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;"> Explore SwaadDesh </a>
        </div>
        <hr style="border: none; border-top: 1px solid #d4af3733; margin: 40px 0;" />
        <div style="text-align: center; font-size: 12px; color: #8b6914; opacity: 0.8;">
            <p>© 2026 SwaadDesh Delicacies</p>
        </div>
    </div>
  `;

  GmailApp.sendEmail(recipientEmail, subject, "", {
    name: "SwaadDesh",
    htmlBody: htmlBody
  });
}