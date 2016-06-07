# Send As a Shared Mailbox

##### Written by Charlie King - Microsoft Consulting - March 2016

----

### Description:
 
User has access to 'Send As' a shared mailbox, but gets an undeliverable message in response from the server when they attempt to send a message. 
 
>![Undeliverable message when trying to send as a Shared Mailbox (SendAsUndeliverable.png)](../images/SendAsShared/SendAsUndeliverable.png "Undeliverable message when trying to send as a Shared Mailbox (SendAsUndeliverable.png)")
 
### Solution:
 
Follow the steps below to ensure proper sending as a Shared Mailbox
 
##### 1. Make sure the Shared Mailbox exists in the Admin Center

>![Make sure the Mailbox exists in the Admin Center (ExchangeAdmin1.png)](../images/SendAsShared/ExchangeAdmin1.png "Make sure the Mailbox exists in the Admin Center (ExchangeAdmin1.png)")
<br>

**NOTE:** If you don't find it under 'Shared' Make sure you check under 'Resources' and 'Users' and 'Groups' to make sure the user isn't mistaken about it being a Shared Mailbox. If it still isn't there, inform the user the mailbox doesn't exist and either ask for more information about the mailbox, or inform them they can submit a request to have one provisioned.
 
##### 2. Make sure the User is listed under Send As

>![Make sure the is listed under "Send As" in the Admin Center (ExchangeAdmin2.png)](../images/SendAsShared/ExchangeAdmin2.png "Make sure the is listed under "Send As" in the Admin Center (ExchangeAdmin2.png)")
<br>
 
**NOTE:** If the user is not listed, Add them and instruct them to wait at least an hour before trying again, as it takes time for permission to sync through the environment. You should also inform the user that this will work from OWA if you log in to the Shared mailbox directly (If they are also listed as having Full Access - See the 'Full Access' listing to confirm). 
 
##### 3. Walk the User through sending as a shared mailbox, starting with the New Email window
 
###### 3a.  If you do not see a "From" box, select the "From" in the "Options" tab

>![Select the 'From' box under 'Options' (Outlook1.png)](../images/SendAsShared/Outlook1.png "Select the 'From' box under 'Options' (Outlook1.png)")
<br>

###### 3b. Now you should see the 'From' option. Select 'From' and remove any existing entries.
 
>![Remove any existing Entries (Outlook2.png)](../images/SendAsShared/Outlook2.png "Remove any existing Entries (Outlook2.png)")
<br>
 
###### 3c.  Now that there are no entries. Select "Other E-mail Address…" and "From" 

>![Select "Other E-mail Address..." (Outlook3.png)](../images/SendAsShared/Outlook3.png "Select "Other E-mail Address..." (Outlook3.png)")
<br>
>![Use 'From' to search for the Shared Mailbox Address (Outlook4.png)](../images/SendAsShared/Outlook4.png "Use 'From' to search for the Shared Mailbox Address (Outlook4.png)")
<br>

**NOTE:** *You can type in part of the address in the box above, and hit **ctrl+k** to search the directory, as an alternative to searching for it manually. __YOU CANNOT JUST TYPE IN THE ADDRESS WITHOUT DOING A SEARCH.__*
 
###### 3d.  You should see the email address listed in the box as the DisplayName (not the email address). Then click 'OK'
 
>![Make sure the DisplayName is listed correctly (Outlook5.png)](../images/SendAsShared/Outlook5.png "Make sure the DisplayName is listed correctly (Outlook5.png)")
<br>
 
 
**NOTE:** Keep in mind that the account that is being used to Send As the shared mailbox MUST be a licenses user account. This will not be a concern as long as the user is logged into Outlook under their own account (or as a colleague if that applies)
 
##### 4.  The "From" address should now be listed as the address of the Shared Mailbox (i.e. gs-sharedmailbox@bjc.org) 
 
>![The Shared Mailbox Address should now appear in "From" (Outlook6.png)](../images/SendAsShared/Outlook6.png "Shared Mailbox Address should now appear in "From" (Outlook6.png)")
<br>
 
##### 5.  Send the message as normal
 
### Cause:
 
Most email addresses Users are used to in GroupWise are no longer the PrimarySMTPAddress for the accounts in Outlook, so if they type in the address and try to send as that address, it's not going to work. That's why they need to search for the account and send as it that way.
 
Additionally, the credentials stuck in the "From" listing may be incorrect, and can lead to confusion. 
 
### Tags:
 
Send As, Undeliverable, Can't Send As Shared Mailbox, Shared Mailbox Rights, Send As Rights
