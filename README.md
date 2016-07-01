# cryptolog
Simple Webtask for saving encrypted log (with IFTTT) to a gdrive spreasheet. 

#Create crypto webtask:
 
    wt create cryptolog.js --secret CRYPTO_PWD=<password> --secret IFTTT_HOOKS=https://maker.ifttt.com/trigger/cryptolog/with/key/<ifftkey>

Configure ifttt recipe:
  https://ifttt.com/recipes/436103-log-to-spreadsheet
  
Invoke (POST) it with any type of json body.  

#Create decrypt webtask:

    wt create decrypt.js --secret CRYPTO_PWD=<password>
    
Invoke (POST) it with body:

    {cypher : [text_to_decrypt]}
  
Et Voilà. Done!

Powered by WebTask!
  https://webtask.io/

