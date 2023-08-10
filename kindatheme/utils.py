import frappe
import os
import smtplib, ssl

from dotenv import load_dotenv
from email.message import EmailMessage

email_from = ''
email_password = ''
email_to = ['ssmutua@gmail.com', 'smutua@signifide.group']
# email_to = ['kindatech@signifide.group', 'joseno@signifide.group', 'smutua@signifide.group']

def convert(val):
    if type(val) != str:
        return val
    if val.isnumeric():
        return int(val)
    elif val == 'True':
        return True
    elif val == 'False':
        return False
    else:
        return val
    
def configure():
    load_dotenv()

    
def sendemail(recipient, content, title, attachment=None):
    email_args = {
        'recipients': recipient,
        'message': content,
        'subject': title
    }
    
    frappe.enque(method=frappe.sendmail, queue='short', timeout=300, **email_args)
    
def send_demo_request(sender):   
    configure()
    
    email_sender = convert(os.getenv('EMAIL_SENDER'))
    email_pass = os.getenv('EMAIL_PASSWORD')
    receiver = convert(os.getenv('EMAIL_RECEIVER')) 

    subject = 'Kinda Demo Request'
    body = f""" You have a demo request.\n Request e-mail address : {sender}
    """

    em = EmailMessage()
    em['From'] = email_sender
    em['To'] = email_to #receiver
    em['Subject'] = subject
    em.set_content(body)

    context = ssl.create_default_context()

    with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
        server.login(email_sender, email_pass)
        print(f'Login successful....')
        server.sendmail(email_sender, email_to, em.as_string())
        
def subscribe_request(sender):  
    configure() 
    subject = 'Kinda Subscription Request'
    body = f"""Online subscription request details \n
    Company  : {sender.comp_name} 
    Email    : {sender.comp_email} 
    Phone    : {"".join([sender.country_code, sender.comp_phone])}
    Domain   : {"".join([sender.pref_domain, sender.pre_domain])}
    Country  : {sender.country}
    Industry : {sender.industry}
    Contact Person : {sender.contact_name} 
    Contact Email  : {sender.contact_email}
    Phone Number   : {sender.contact_phone} 
    Designation    : {sender.contact_designation}
    """
    
    email_from = convert(os.getenv('EMAIL_SENDER'))
    email_password = os.getenv('EMAIL_PASSWORD')
    receiver = convert(os.getenv('EMAIL_RECEIVER')) 

    em = EmailMessage()
    em['From'] = email_from
    em['To'] = email_to
    em['Subject'] = subject
    em.set_content(body)

    context = ssl.create_default_context()

    with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
        server.login(email_from, email_password)
        # print(f'Login successful....')
        server.sendmail(email_from, email_to, em.as_string())
        # print(f'Sending Email successful....')