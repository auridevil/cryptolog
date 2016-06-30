# cryptolog
Webtask for saving encrypted log (with IFTTT) to a gdrive spreasheet

Create webtask:
 
    wt create cryptolog.js --secret CRYPTO_PWD=<password> --secret IFTTT_HOOKS=https://maker.ifttt.com/trigger/cryptolog/with/key/<ifftkey>

Configure ifttt recipe:
  https://ifttt.com/recipes/436103-log-to-spreadsheet
  
Done!

Powered by WebTask!
  https://webtask.io/
