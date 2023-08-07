import frappe


def get_context(context):
    email = {
        'receiver': 'ssmutua@gmail.com',
        'sender': 'aarysaul@gmail.com',
        'msg': 'This is a TEST email'
    }
    
    return email