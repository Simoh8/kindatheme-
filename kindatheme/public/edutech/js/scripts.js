
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

        var username=document.querySelector("#user_name");
        var shownname=document.querySelector(".shown_name");
        

        var submit_click=document.querySelectorAll(".submit_button");
        submit_click.forEach(function(submit_click_form){
            submit_click_form.addEventListener('click',function(){
            shownname.innerHTML= username.value;
            formnumber++;
            updateform(); 
            });
        });

        var heart=document.querySelector(".fa-heart");
        heart.addEventListener('click',function(){
        heart.classList.toggle('heart');
        });


        var share=document.querySelector(".fa-share-alt");
        share.addEventListener('click',function(){
        share.classList.toggle('share');
        });

        

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

       
        
            function geek() { 
                var x = document.getElementById("entamt").innerHTML; 
                var y = '393'
                
                document.getElementById("entamt").innerHTML = y; 
                
                document.getElementById("entamt").style.color = "green"; 
                document.getElementById("p").innerHTML = y; 
                
                document.getElementById("p").style.color = "green"; 
            } 
        

            function module_fee(){
                var total_entamt = 0
                var acc_amt = 0
                var hr_amt = 0
                var stock_amt = 0
                var loan_amt = 0
                var project_amt = 0
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
                var entsproject = document.getElementById("enttech-project");

                var edutotal_amt = 0
                var mantotal_amt = 0
                var medtotal_amt = 0
                var enttotal_amt = 0

                var start_fee = 'Starts at'
                var calc_fee = 'Estimate fee'


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
                if (entsproject.checked == true){
                    project_amt = 50
                }

                entmonth_total = acc_amt+hr_amt+stock_amt+loan_amt+project_amt
                if (entmonth_total == 0){
                    entmonth_total = 30;
                    document.getElementById("entfee_start").innerHTML = start_fee
                }
                else {document.getElementById("entfee_start").innerHTML = calc_fee}

                document.getElementById("entamt").innerHTML = '$'+entmonth_total; 
                document.getElementById("entfee_per").innerHTML = 'per month';
            }
            else if(entpay_intvl == 'Quarterly') {
                if (entacc.checked == true){
                    acc_amt = 80
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
                if (entsproject.checked == true){
                    project_amt = 120
                    
                }

                entqt_total = acc_amt+hr_amt+stock_amt+loan_amt+project_amt

                if (entqt_total == 0){
                    entqt_total = 80;
                }

                document.getElementById("entamt").innerHTML = '$'+entqt_total; 
                document.getElementById("entfee_per").innerHTML = 'per 3 months';
                document.getElementById("entfee_start").innerHTML = calc_fee;
            }
            else if(entpay_intvl == 'Annually') {
                if (entacc.checked == true){
                    acc_amt = 300
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
                if (entsproject.checked == true){
                    project_amt = 450
                }

                entyear_total = acc_amt+hr_amt+stock_amt+loan_amt+project_amt
                if (entyear_total == 0){
                    entyear_total = 300;
                }

                document.getElementById("entamt").innerHTML = '$'+entyear_total; 
                document.getElementById("entfee_per").innerHTML = 'per year';
                document.getElementById("entfee_start").innerHTML = calc_fee;
            }
                

                if(edutech_intvl == 'Monthly') {
                    edutotal_amt = 200
                     document.getElementById("edufee_per").innerHTML = 'per month';
                     document.getElementById("edufee_start").innerHTML = "Starts at"
                    //  document.getElementById("edufee_start").style.display = "none"

                }
                else if(edutech_intvl == 'Quarterly') {
                    edutotal_amt = '550'
                     document.getElementById("edufee_per").innerHTML = 'per 3 months';
                      document.getElementById("edufee_start").innerHTML = "Estimate fee";
                }
                else if(edutech_intvl == 'Annually') {
                    edutotal_amt = '2100'
                     document.getElementById("edufee_per").innerHTML = 'per year';
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
                    // console.log('Edu QT')
                    medtotal_amt = '550'
                    document.getElementById("medfee_per").innerHTML = 'per 3 mothns';
                    document.getElementById("medfee_start").innerHTML = "Estimate fee";
                }
                else if(healtech_intvl == 'Annually') {
                    // console.log('Edu Annual')
                    medtotal_amt = '2100'
                    document.getElementById("medfee_per").innerHTML = 'per year';
                    document.getElementById("medfee_start").innerHTML = "Estimate fee";
                }
                
                document.getElementById("healthfee").innerHTML = '$'+medtotal_amt; 
                
            }

            function myFunction() {
            // Get the checkbox
            var checkBox = document.getElementById("myCheck");
            // Get the output text
            var text = document.getElementById("text");

            // If the checkbox is checked, display the output text
            if (checkBox.checked == true){
                text.style.display = "block";
            } else {
                text.style.display = "none";
            }
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
                formStepCircle.classList.remove("form-stepper-unfinished", "form-stepper-completed");
                formStepCircle.classList.add("form-stepper-active");
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
