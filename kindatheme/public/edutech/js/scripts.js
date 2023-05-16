
        var next_click=document.querySelectorAll(".next_button");
        var main_form=document.querySelectorAll(".main");
        var step_list = document.querySelectorAll(".progress-bar li");
        var num = document.querySelector(".step-number");
        let formnumber=0;

        next_click.forEach(function(next_click_form){
            next_click_form.addEventListener('click',function(){
                if(!validateform()){
                    return false
                }
            formnumber++;

            updateform();
            progress_forward();
            contentchange();
            customer_details()
            });
        }); 

        var back_click=document.querySelectorAll(".back_button");
        back_click.forEach(function(back_click_form){
            back_click_form.addEventListener('click',function(){
            formnumber--;
            updateform();
            progress_backward();
            contentchange();
            });
        });

        // var username=document.querySelector("#user_name");
        // var shownname=document.querySelector(".shown_name");

        // console.log('User name...'+username)
        

        var submit_click=document.querySelectorAll(".submit_button");
        submit_click.forEach(function(submit_click_form){
            submit_click_form.addEventListener('click',function(){
            // shownname.innerHTML= username.value;
            if(!validateform()){
                return false
            }
            formnumber++;
            customer_details()
            updateform(); 


            });

                // const elements2 = document.querySelectorAll('input');
                // console.log(elements2);
        });

        // var heart=document.querySelector(".fa-heart");
        // heart.addEventListener('click',function(){
        // heart.classList.toggle('heart');
        // });


        // var share=document.querySelector(".fa-share-alt");
        // share.addEventListener('click',function(){
        // share.classList.toggle('share');
        // });       

        function updateform(){
            main_form.forEach(function(mainform_number){
                mainform_number.classList.remove('active');
            })
            main_form[formnumber].classList.add('active');
        } 
        
        function progress_forward(){
            // step_list.forEach(list => {
                
            //     list.classList.remove('active');
                
            // }); 
            
            
            num.innerHTML = formnumber+1;
            step_list[formnumber].classList.add('active');
        }  

        function progress_backward(){
            var form_num = formnumber+1;
            step_list[form_num].classList.remove('active');
            num.innerHTML = form_num;
        } 
        
        var step_num_content=document.querySelectorAll(".step-number-content");

        function contentchange(){
            step_num_content.forEach(function(content){
                content.classList.remove('active'); 
                content.classList.add('d-none');
            }); 
            step_num_content[formnumber].classList.add('active');
        }
        
        function validateform(){
            console.log('Validating ...')
            validate=true;
            var validate_inputs=document.querySelectorAll(".main.active input");
            validate_inputs.forEach(function(vaildate_input){
                vaildate_input.classList.remove('warning');
                if(vaildate_input.hasAttribute('require')){
                    if(vaildate_input.value.length==0){
                        validate=false;
                        vaildate_input.classList.add('warning');
                    }
                }
            });
            return validate;
            
        }

        
        function module_fee(){
            var total_entamt = 0
            var acc_amt = 0
            var hr_amt = 0
            var stock_amt = 0
            var loan_amt = 0
            var project_amt = 0
            var crm_amt = 0
            var entmonth_total = 0
            var entqt_total = 0
            var entyear_total = 0

            var entpay_intvl = document.getElementById("entertech-intervals").value;    
            var edutech_intvl = document.getElementById("eduusers-intervals").value;     
            var mantech_intvl = document.getElementById("manusers-intervals").value; 
            var healtech_intvl = document.getElementById("husers-intervals").value;

            var entacc = document.getElementById("enttech-account");
            var enthr = document.getElementById("enttech-hr");
            var entstock = document.getElementById("enttech-stock");
            var entloan = document.getElementById("enttech-loan");
            var entproject = document.getElementById("enttech-project");
            var entcrm = document.getElementById("enttech-crm");
            var entusers_no = document.getElementById("entertech-user").value;
            var edustuds_no = document.getElementById("edustud_no").value;

            var edutotal_amt = 0
            var mantotal_amt = 0
            var medtotal_amt = 0
            var enttotal_amt = 0
            var userfee_amt = 0
            var studfee_amt = 0
            var maxusers_fee = 5
            var checked_mod = 0

            var costper_stud = 0.5

            var start_fee = 'Starts at'
            var calc_fee = 'Estimate fee'

            checked_mod = document.querySelectorAll('input[type="checkbox"]:checked').length;

            if(entpay_intvl == 'Monthly') {
            if (entacc.checked == true){
                acc_amt = 30
            }
            if (enthr.checked == true){
                hr_amt = 50
            }
            if (entstock.checked == true){
                stock_amt = 50
            }
            if (entloan.checked == true){
                loan_amt = 100
            }
            if (entproject.checked == true){
                project_amt = 50
            }
            if (entcrm.checked == true){
                crm_amt = 30
            }

            if (entusers_no <= maxusers_fee){
                userfee_amt = 0
            }
            else {
                userfee_amt =  (entusers_no - maxusers_fee) * 1.5
            }
  
            entmonth_total = acc_amt+crm_amt+hr_amt+stock_amt+loan_amt+project_amt+userfee_amt
            if (entmonth_total == 0 || checked_mod == 0){
                entmonth_total = 30;
                document.getElementById("entfee_start").innerHTML = start_fee 
            }
            else {document.getElementById("entfee_start").innerHTML = calc_fee }

            document.getElementById("entamt").innerHTML = '$'+entmonth_total; 
            document.getElementById("entfee_per").innerHTML = 'per month for ' +entusers_no+' users';
        }
        else if(entpay_intvl == 'Quarterly') {
            if (entacc.checked == true){
                acc_amt = 80
            }
            if (entcrm.checked == true){
                crm_amt = 80;                  
            }
            if (enthr.checked == true){
                hr_amt = 120
            }
            if (entstock.checked == true){
                stock_amt = 120
            }
            if (entloan.checked == true){
                loan_amt = 280
            }
            if (entproject.checked == true){
                project_amt = 120                    
            }
            if (entqt_total == 0){
                entqt_total = 80;
                }
            
            if (entusers_no <= maxusers_fee) {
                userfee_amt = 0
            }
            else {
                userfee_amt =  (entusers_no - maxusers_fee) * 4.5
            }

            entqt_total = acc_amt+crm_amt+hr_amt+stock_amt+loan_amt+project_amt+userfee_amt

            if (entqt_total == 0  || checked_mod == 0){
                entqt_total = 80;
            }

            document.getElementById("entamt").innerHTML = '$'+entqt_total; 
            document.getElementById("entfee_per").innerHTML = 'per 3 months for ' +entusers_no+' users';
            document.getElementById("entfee_start").innerHTML = calc_fee ;
            }
        else if(entpay_intvl == 'Annually') {
            if (entacc.checked == true){
                acc_amt = 300
            }
            if (entcrm.checked == true){
                crm_amt = 300           
            }
            if (enthr.checked == true){
                hr_amt = 450
            }
            if (entstock.checked == true){
                stock_amt = 450
            }
            if (entloan.checked == true){
                loan_amt = 1000
            }
            if (entproject.checked == true){
                project_amt = 450
            }

            if (entusers_no <= maxusers_fee) {
                userfee_amt = 0
            }
            else {
                userfee_amt = (entusers_no - maxusers_fee) * 18
            }

            entyear_total = acc_amt+crm_amt+hr_amt+stock_amt+loan_amt+project_amt+userfee_amt
            if (entyear_total == 0  || checked_mod == 0){
                entyear_total = 300;
            }

            document.getElementById("entamt").innerHTML = '$'+entyear_total; 
            document.getElementById("entfee_per").innerHTML = 'per year for ' +entusers_no+' users';
            document.getElementById("entfee_start").innerHTML = calc_fee;
        }
            

            if(edutech_intvl == 'Monthly') {                
                studfee_amt =  edustuds_no * costper_stud
                edutotal_amt = 200 + studfee_amt
                    
                document.getElementById("edufee_per").innerHTML = 'per month for '+edustuds_no+' students';
                document.getElementById("edufee_start").innerHTML = "Starts at"
                //  document.getElementById("edufee_start").style.display = "none"
            }
            else if(edutech_intvl == 'Quarterly') {
                studfee_amt =  edustuds_no * costper_stud * 3
                edutotal_amt = 550 + studfee_amt

                document.getElementById("edufee_per").innerHTML = 'per 3 months for '+edustuds_no+' students';
                document.getElementById("edufee_start").innerHTML = "Estimate fee";
            }
            else if(edutech_intvl == 'Annually') {
                studfee_amt =  edustuds_no * costper_stud * 12
                edutotal_amt = 2100 + studfee_amt
                document.getElementById("edufee_per").innerHTML = 'per year for '+edustuds_no+' students';
                document.getElementById("edufee_start").innerHTML = "Estimate fee";
            }
            document.getElementById("edufee").innerHTML = '$'+edutotal_amt; 
            

            if(mantech_intvl == 'Monthly') {
                mantotal_amt = 200
                document.getElementById("manfee_per").innerHTML = 'per month';
                document.getElementById("manfee_start").innerHTML = "Starts at";
            }
            else if(mantech_intvl == 'Quarterly') {
                mantotal_amt = 550
                document.getElementById("manfee_per").innerHTML = 'per 3 months';
                document.getElementById("manfee_start").innerHTML = "Estimate fee";
            }
            else if(mantech_intvl == 'Annually') {
                mantotal_amt = 2100
                document.getElementById("manfee_per").innerHTML = 'per year';
                document.getElementById("manfee_start").innerHTML = "Estimate fee";
            }
                
            document.getElementById("manfee").innerHTML = '$'+mantotal_amt; 
            

            if(healtech_intvl == 'Monthly') {
                medtotal_amt = 200
                document.getElementById("medfee_per").innerHTML = 'per month';
                document.getElementById("medfee_start").innerHTML = "Starts at";
            }
            else if(healtech_intvl == 'Quarterly') {
                medtotal_amt = '550'
                document.getElementById("medfee_per").innerHTML = 'per 3 mothns';
                document.getElementById("medfee_start").innerHTML = "Estimate fee";
            }
            else if(healtech_intvl == 'Annually') {
                medtotal_amt = '2100'
                document.getElementById("medfee_per").innerHTML = 'per year';
                document.getElementById("medfee_start").innerHTML = "Estimate fee";
            }
            
            document.getElementById("healthfee").innerHTML = '$'+medtotal_amt; 
            
        }


        function customer_details(){
            var comp_name = document.getElementById("name").value
            var comp_email = document.getElementById("comp_email").value
            var comp_phone = document.getElementById("comp_phone").value
            var pref_domain = document.getElementById("domain").value
            var contact_name = document.getElementById("contact_person").value
            var contact_email = document.getElementById("contact_email").value
            var contact_phone = document.getElementById("contact_phone").value
            var contact_designation = document.getElementById("contact_design").value
            var demo_mail = document.getElementById("demo_email").value
            var demo_cmail = document.getElementById("demo_cemail").value

            console.log(comp_name+' Email: '+comp_email+'  Phone:'+comp_phone+' Domain:'+pref_domain)
            console.log(contact_name+' Contact Email: '+contact_email+' Phone: '+contact_phone+' Desgn:'+contact_designation)
            console.log('Mail1: '+demo_mail+' Email2 : '+demo_cmail)

        }

        function SendEmail() {
            Email.send({
                Host : "smtp.elasticemail.com",
                Username : "username",
                Password : "password",
                To : 'them@website.com',
                From : "you@isp.com",
                Subject : "This is the subject",
                Body : "And this is the body"
            }).then(
                message => alert(message)
            );
        }



            /**
             * Define a function to navigate betweens form steps.
             * It accepts one parameter. That is - step number.
             */
            const navigateToFormStep = (stepNumber) => {
                /**
                 * Hide all form steps.
                 */
                document.querySelectorAll(".form-step").forEach((formStepElement) => {
                    formStepElement.classList.add("d-none");
                });
                /**
                 * Mark all form steps as unfinished.
                 */
                document.querySelectorAll(".form-stepper-list").forEach((formStepHeader) => {
                    formStepHeader.classList.add("form-stepper-unfinished");
                    formStepHeader.classList.remove("form-stepper-active", "form-stepper-completed");
                });
                /**
                 * Show the current form step (as passed to the function).
                 */
                document.querySelector("#step-" + stepNumber).classList.remove("d-none");
                /**
                 * Select the form step circle (progress bar).
                 */
                const formStepCircle = document.querySelector('li[step="' + stepNumber + '"]');
                /**
                 * Mark the current form step as active.
                 */
                // formStepCircle.classList.remove("form-stepper-unfinished", "form-stepper-completed");
                // formStepCircle.classList.add("form-stepper-active");
                /**
                 * Loop through each form step circles.
                 * This loop will continue up to the current step number.
                 * Example: If the current step is 3,
                 * then the loop will perform operations for step 1 and 2.
                 */
                for (let index = 0; index < stepNumber; index++) {
                    /**
                     * Select the form step circle (progress bar).
                     */
                    const formStepCircle = document.querySelector('li[step="' + index + '"]');
                    /**
                     * Check if the element exist. If yes, then proceed.
                     */
                    if (formStepCircle) {
                        /**
                         * Mark the form step as completed.
                         */
                        formStepCircle.classList.remove("form-stepper-unfinished", "form-stepper-active");
                        formStepCircle.classList.add("form-stepper-completed");
                    }
                }
            };
            /**
             * Select all form navigation buttons, and loop through them.
             */
            document.querySelectorAll(".btn-navigate-form-step").forEach((formNavigationBtn) => {
                /**
                 * Add a click event listener to the button.
                 */
                formNavigationBtn.addEventListener("click", () => {
                    /**
                     * Get the value of the step.
                     */
                    const stepNumber = parseInt(formNavigationBtn.getAttribute("step_number"));
                    /**
                     * Call the function to navigate to the target form step.
                     */
                    navigateToFormStep(stepNumber);
                });
            })
