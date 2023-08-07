import frappe
import json
import requests

from kindatheme.utils import *

@frappe.whitelist(allow_guest=True)
def demo_email(sender):
    send_demo_request(sender)

    
@frappe.whitelist(allow_guest=True)
def subscribe_email(**args):
    subscriber = frappe._dict(args)
    
    try:    
        subscribe_request(subscriber)
        pass
    except Exception as e:
        print(f'\nSubscribe Email Fail, {e}')