
$(document).ready(function() {
    document.querySelector("#btndemo").addEventListener('click', 
    (e)=> {
        let demo_email = document.querySelector("#demo_email").value;

        demoRequest(demo_email).then(data => {
            console.log(data);
        });

    });

})

$(document).ready(function() {
    document.querySelector("#btnkindasub").addEventListener('click', 
    (e)=> {
        console.log('Kinda Subscribe Clicked.')

        var comp_name = document.getElementById("name").value
        var comp_email = document.getElementById("comp_email").value
        var comp_phone = document.getElementById("comp_phone").value
        var pre_domain = document.getElementById("subdomain").value
        var pref_domain = document.getElementById("domain").value
        var country = document.getElementById("country").value
        var industry = document.getElementById("industry").value
        var contact_name = document.getElementById("contact_person").value
        var contact_email = document.getElementById("contact_email").value
        var contact_phone = document.getElementById("contact_phone").value
        var contact_designation = document.getElementById("contact_design").value
        var country_code = document.getElementById("country_code").value

        console.log(comp_name+' Email: '+comp_email+'  Phone:'+comp_phone+' Domain:'+pref_domain+' Person:'+contact_name+' mobile:'+contact_email)
        // console.log(contact_name+' Contact Email: '+contact_email+' Phone: '+contact_phone+' Desgn:'+contact_designation)

        subscriber = {
            comp_name, comp_email, comp_phone, pref_domain, contact_name, contact_email, contact_phone, contact_designation, country, industry, pre_domain, country_code
        }
        

        if ((comp_name) && (country_code) && (comp_phone) && (pref_domain) && (contact_name) && (contact_email)) {
            // alert('Required fields OK ')
            subscribeRequest(subscriber).then(data => {
                console.log(data);
            });
        }
        else {
            alert('Provide required field')
        }
        

    });

})


async function demoRequest(demo_email) {
    var data = ''
    let url = 'https://demo.kindatech.group/api/method/kindatheme.api.demo_email';
    data = {'sender': demo_email };

    console.log('Demo data...'+data)

    let res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token 14672c1a817c63a:92671d223c5c1de'  
            
        },
        body: JSON.stringify(data),
    });

        console.log('Demo result json...'+res.json())
        console.log('Demo result txt...'+res.text())

    if (res.ok) {

        // let text = await res.text();
        // return text;

        let ret = await res.json();
        return JSON.parse(ret.data);

    } else {
        return `HTTP error: ${res.status}`;
    }
}


async function subscribeRequest(subscriber) {
    var data = ''
    let url = 'https://demo.kindatech.group/api/method/kindatheme.api.subscribe_email';

    console.log('Subscriber Req: ... '+subscriber)

    data = subscriber


    console.log('Demo data...'+data)

    let res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token 14672c1a817c63a:92671d223c5c1de',            
        },
        body: JSON.stringify(data),
    });

        // console.log('Demo result json...'+res.json())
        // console.log('Demo result txt...'+res.text())

    if (res.ok) {

        // let text = await res.text();
        // return text;

        let ret = await res.json();
        return JSON.parse(ret.data);

    } else {
        return `HTTP error: ${res.status}`;
    }
}