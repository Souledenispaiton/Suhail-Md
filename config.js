const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237652145256";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_55_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0LFxuICAgICAgICAyMixcbiAgICAgICAgNDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDkyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDg5LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDM5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTMzLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI5LFxuICAgICAgICA1NyxcbiAgICAgICAgODAsXG4gICAgICAgIDQ0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzksXG4gICAgICAgIDc4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTksXG4gICAgICAgIDExNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODUsXG4gICAgICAgIDM4LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDQwLFxuICAgICAgICAzMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjAyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTY2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTI5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjM3LFxuICAgICAgICA1NixcbiAgICAgICAgODIsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTkzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjAzLFxuICAgICAgICA2OSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgOTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNSxcbiAgICAgICAgMjMwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMixcbiAgICAgICAgOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAzLFxuICAgICAgICA4LFxuICAgICAgICAxODksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDMwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDM1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYwLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICA1OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDgsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg3LFxuICAgICAgICA3MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjksXG4gICAgICAgIDgsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgODcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUzLFxuICAgICAgICA3NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDg5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDg4LFxuICAgICAgICAxODksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjU0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDY5LFxuICAgICAgICA2MCxcbiAgICAgICAgMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI5L2Nybk1oejY0OEIzQkJJdXdKU0I1dnBvaXVUQ3pGQmVWcXVwVDVjVmhNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNzY1MjE0NTI1NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRUM3QjM5NUU3NDk4MzcxMTQ1OTI4OTk1NzZGM0JCNEJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMzA3MzA5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkhrSWkxX2tnVFZ1NmU0di1TekdXX2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjA1NDE2NjMtNjA5My00MDA5LWE1YzQtMWY4ZjE1Mzg2YzZiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc0LFxuICAgICAgMjA5LFxuICAgICAgMjEwLFxuICAgICAgMTY2LFxuICAgICAgNDAsXG4gICAgICAxOTAsXG4gICAgICAxMTAsXG4gICAgICA3MixcbiAgICAgIDExMCxcbiAgICAgIDE1LFxuICAgICAgODYsXG4gICAgICAzNyxcbiAgICAgIDEyOCxcbiAgICAgIDEwMixcbiAgICAgIDc5LFxuICAgICAgMzEsXG4gICAgICAxMDYsXG4gICAgICA5LFxuICAgICAgMTE1LFxuICAgICAgMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU0LFxuICAgICAgMjE3LFxuICAgICAgMTM0LFxuICAgICAgMTUxLFxuICAgICAgODMsXG4gICAgICAxNDQsXG4gICAgICAyMzksXG4gICAgICAyMDUsXG4gICAgICA3LFxuICAgICAgMjQ1LFxuICAgICAgNzUsXG4gICAgICAyMjQsXG4gICAgICAxMzAsXG4gICAgICA5NCxcbiAgICAgIDc0LFxuICAgICAgMjgsXG4gICAgICAxNTQsXG4gICAgICAyMjUsXG4gICAgICAyNTMsXG4gICAgICAxMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFVkVOMjREVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM3NjUyMTQ1MjU2OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM5ODIyOTg3MTM3MjM5OjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHFydHBnREVLT2g1TFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJReHA3ZzVsVmtCQ09nS01lbmpvY0hFUkFOVjhlZkE0SGtSWDlzbExPNTFvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjF1b3FzR2NvMnpXVjVpcGdQVzJNOHl0YlkxMm9ubkg3YmlHZ0NlUlFHWGlsRjlXMDE3QzJiWk1MUFpNMXNKc29ramlkUnllbm9Fa2s2czN0aE1IVURBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImVucEk5cFBxb1pDQysvcWxrdjNveitLRjVMSXcrdDNTWTZSNmQrRUNNWENEL1pHU0tnZzFHVzdJWDVlTEFQcWUzWnpKYmNiOEdRNmdEMFRNSGNNWUN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzY1MjE0NTI1Njo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEzMDczMDMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHeEtcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUd4Sy5qc29uIjogIntcImtleURhdGFcIjpcInpXTnJkbDNNTmNPWHkrb2VBWTNNbDJ2ODZzbDRjSGVGbER1QkdBRWlRS2s9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODU2NTI4MzEyLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
