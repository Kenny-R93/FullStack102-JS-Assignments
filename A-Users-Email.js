// For each bullet in your outline, decide if it is a primitive, array, or object. 
// Create a JavaScript file and use this information to create an object literal that models the application's data. 
let AppData = {
    Name: "Gmail",
    Mailboxes: ["Inbox", "Starred","Sent", "Drafts", "Categories","Trash"],
    Inbox: [
        {From: "Full Stack 102", Subject: "Assignment Graded..."},
        {From:"Vatsal Singhal", Subject:"Heels Engage"},
        {From: "Stiegler EdTech Can.", Subject: "Course Invitation"},
        {From: "Jeremy Garcia", Subject: "JIRA"},
    ],
    Starred: [
        {From: "canvas-admin@stiegleredtech.org", Subject: "Assignment Graded: Checking Store Hours, Full Stack 102"},
        {From: "roderick.lewis@unc.edu ", Subject: "Kenny, Join the HEELSENGAGE Network!"},
        {From: "eticket@amadeus.com", Subject: "Your Electronic Receipt" },
    ],
    Sent: [
        {Recepient: "Richard", Subject: "Taxes", Recepient: "Nunu", Subject: "Lecture Notes" }
    ],
    Drafts: [
        {Subject: "Enrique Rangel's Resume", Subject: "(no subject)"}
    ],
    Catergories: [
        {Social: ["Linked In","Youtube", "Twitter"]},
        {Updates: ["CNN", "Reddit","Bank of America", "The New York Times", "Amazon Web Services", "American Airlines"]},
        {Promotions: ["Best Buy", "Banana Republic", "Overstock","Uniqlo USA", "Calvin Klein", "The Home Depot"]},
    ]
}

// Get a list of mailbox names
console.log(AppData.Mailboxes)
// Get a list of emails
console.log(AppData.Inbox)
// Get the text of the second email in the visible list
console.log(AppData.Inbox[1])
// Mark an email as sent
AppData.Drafts[0].status="Marked Sent";
console.log("This email is marked sent:", AppData.Drafts[0]);
// Add a draft email to the drafts mailbox
AppData.Drafts.push(DraftEmail.AppData.Drafts);
console.log("A email was drafted to the drafts mailbox", AppData.Draft.DraftEmail);