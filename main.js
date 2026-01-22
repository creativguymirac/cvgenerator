// Déclaration des elements du DOM pour le Formulaire
const nameInput = document.getElementById('nameInput');
const firstnameInput = document.getElementById('firstnameInput');
const mainTitle = document.getElementById('mainTitleInput');
const address = document.getElementById('addressInput');
const phone = document.getElementById('phoneInput');
const mail = document.getElementById('mailInput');
const descPerso = document.getElementById('descPersoInput');

const formationTitle = document.getElementById('titleFormInput');
const schoolName = document.getElementById('schoolInput');
const startDateSchool = document.getElementById('startDateSchoolInput');
const endDateSchool = document.getElementById('endDateSchoolInput');
const descSchool = document.getElementById('descSchoolInput');

const expTitle = document.getElementById('titleExpInput');
const companyName = document.getElementById('companyNameInput');
const startDateCompany = document.getElementById('startDateExpInput');
const endStartCompany = document.getElementById('endDateExpInput');
const descCompany = document.getElementById('descExpInput');

const competence = document.getElementById('competenceInput');
const level = document.getElementById('levelInput');
const manageComp = document.getElementById('manageComp');

const btnAddFormation = document.getElementById('addFormation');
const btnDelFormation = document.getElementById('delFormation');
const btnAddExperience = document.getElementById('addExperience');
const btnDelExperience = document.getElementById('delExperience');
const btnAddCompetence = document.getElementById('addCompetence');
const btnResetForm = document.getElementById('resetForm');
const btnExportCV = document.getElementById('downloadCV');


const formDiv = document.getElementById("formDiv");
const expDiv = document.getElementById("expDiv");




document.addEventListener('DOMContentLoaded', function() {

    const previewContainer = document.getElementById('previewContainer')
    
    fetch('./templates/default_cv.html')
    .then(response => response.text())
    .then(template => {
        previewContainer.innerHTML = template;
        
        // Importation des elements du DOM pour la prévisualisation
        const firstnamePre = document.getElementById('firstnamePre');
        const namePre = document.getElementById('namePre');
        const mainTitlePre = document.getElementById('mainTitlePre');
        const addressPre = document.getElementById('addressPre');
        const phonePre = document.getElementById('phonePre');
        const mailPre = document.getElementById('mailPre');

        const descPersoPre = document.getElementById('mainDescPre');

        const compPre = document.getElementById('compPre');

        const formationPre = document.getElementById('formPre');
        const experiencePre = document.getElementById('expPre');
        
        // Gestion d'ecoutes des inputs pour la prévisualisation
            // Informations générale
        
        firstnameInput.addEventListener('input', () => {
            firstnamePre.textContent = firstnameInput.value || "John";
        })
        
        nameInput.addEventListener('input', () => {
            namePre.textContent = nameInput.value || "Doe";
        });
        
        mainTitle.addEventListener('input', () => {
            mainTitlePre.textContent = mainTitle.value || "Développeur Full-Stack";
        })
        
        address.addEventListener('input', () => {
            addressPre.textContent = address.value || "7 rue du puit, 69001 Lyon";
        })
        
        phone.addEventListener('input', () => {
            phonePre.textContent = phone.value || "06 32 76 78 99";
        })
        
        mail.addEventListener('input', () => {
            mailPre.textContent = mail.value || "example@mail.com";
        })
        
        descPerso.addEventListener('input', () => {
            descPersoPre.textContent = descPerso.value || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, temporibus? Blanditiis, corrupti voluptas nobis dicta illo praesentium in non dolorem minima unde nam error illum vero reiciendis incidunt, exercitationem ipsa!";
        })



            // Formations 
        
        
        

        // Gestion des experiences et formations
        let countForm = 0;
        let countExp = 0;
        let countComp = 0;

        // EXPERIENCE

        btnAddExperience.addEventListener('click', () => {

            if(countExp === 0) {
                experiencePre.innerHTML = '';
            }

            countExp++;

            expDiv.insertAdjacentHTML('beforeend',`
                                        <h3 class="p-0 m-0 mb-2 h5">Expérience ${countExp}</h3>
                                        <label for="" class="p-0">Intitulé du poste</label>
                                        <input type="text" class="form-control mb-3" placeholder="Développeur Full-Stack" id="titleExpInput${countExp}">
                                        <label for="" class="p-0">Nom de l'entreprise</label>
                                        <input type="text" class="form-control mb-3" placeholder="Google" id="companyNameInput${countExp}">
                                        <label for="" class="p-0">Date de début</label>
                                        <input type="text" placeholder="01/01/2025" class="form-control mb-3" id="startDateExpInput${countExp}">
                                        <label for="" class="p-0">Date de fin (Facultatif)</label>
                                        <input type="text" placeholder="01/01/2026" class="form-control mb-3" id="endDateExpInput${countExp}">
                                        <label for="" class="p-0">Description des missions</label>
                                        <textarea name="" class="form-control mb-3" placeholder="Étude des droits.." id="descExpInput${countExp}"></textarea>
                                        `);
                                        
            experiencePre.insertAdjacentHTML('beforeend',`
                     <h3><span id="expTitlePre${countExp}">Développeur Full-Stack</span> - <span id="companyNamePre${countExp}">Google</span></h3>
                     <p><span id="startDateExpPre${countExp}">01/07/2025</span> - <span id="endDateExpPre${countExp}">01/09/2026</span></p>
                     <div class="missionsForm">
                         <p id="descExpPre${countExp}">Mission 1</p>
                     </div>
            `);
                                        
        });
                                    
        btnDelExperience.addEventListener('click', () => {
                countExp = countExp - countExp;
                expDiv.innerHTML = '';
                experiencePre.innerHTML = '';
                experiencePre.insertAdjacentHTML('beforeend',`
                                                 <h3><span id="expTitlePre">Développeur Full-Stack</span> - <span id="companyNamePre">Google</span></h3>
                                                 <p><span id="startDateExpPre">01/07/2025</span> - <span id="endDateExpPre">01/09/2026</span></p>
                                                 <div class="missionsForm" id="missionExpPre">
                                                     <p>Mission 1</p>
                                                 </div>
                `);
            });

            // FORMATION

        btnAddFormation.addEventListener('click', () => {

            if(countForm === 0) {
                formationPre.innerHTML = '';
            }

            countForm++;

            formDiv.insertAdjacentHTML('beforeend',`
                                        <h3 class="p-0 m-0 mb-2 h5">Formation ${countForm}</h3>
                                        <label class="p-0">Intitulé du diplôme ou formation</label>
                                        <input type="text" class="form-control mb-3" placeholder="Master" id="titleFormInput${countForm}">
                                        <label class="p-0">Établissement</label>
                                        <input type="text" class="form-control mb-3" placeholder="Université" id="schoolInput${countForm}">
                                        <label class="p-0">Date de début</label>
                                        <input type="text" placeholder="01/01/2025" class="form-control mb-3" id="startDateSchoolInput${countForm}">
                                        <label class="p-0">Date de fin (Facultatif)</label>
                                        <input type="text" placeholder="01/01/2025" class="form-control mb-3" id="endDateSchoolInput${countForm}">
                                        <label class="p-0">Description</label>
                                        <textarea name="" class="form-control mb-3" placeholder="Étude des droits.." id="descSchoolInput${countForm}"></textarea>
                                        `);

            formationPre.insertAdjacentHTML('beforeend', `
                                                <h3><span id="formTitlePre${countForm}">Formation Développeur Full-Stack</span> - <span id="schoolNamePre${countForm}">Epitech</span></h3>
                                                <p><span id="startDateFormPre${countForm}">01/02/2025</span> - <span id="endDateFormPre${countForm}">01/02/2026</span></p>
                                                <div class="missionsForm">
                                                    <p id="missionFormPre${countForm}" >Mission 1</p>
                                                </div>
            `);
            
        });
        
        btnDelFormation.addEventListener('click', () => {
            countForm = countForm - countForm;
            formDiv.innerHTML = '';
            formationPre.innerHTML = '';
            formationPre.insertAdjacentHTML('beforeend', `
                                                <h3><span id="formTitlePre">Formation Développeur Full-Stack</span> - <span id="schoolNamePre">Epitech</span></h3>
                                                 <p><span id="endDateFormPre">01/02/2025</span> - <span id="endDateFormPre">01/02/2026</span></p>
                                                 <div class="missionsForm" id="missionFormPre">
                                                     <p>Mission 1</p>
                                                 </div>
            `);
        });


        // COMPETENCE
            btnAddCompetence.addEventListener('click', () => {

                if(countComp === 0) {
                    compPre.innerHTML = '';
                }

                const levelSelect = document.getElementById('levelInput');
                const selectedOption = levelSelect.options[levelSelect.selectedIndex];
                const optionText = selectedOption.textContent;

                countComp++;

                compPre.insertAdjacentHTML('beforeend',`
                                            <p id="competenceP${countComp}"><span id="compPre${countComp}">${competence.value !== '' ? competence.value : "compétence vide" }</span> - <span id="lvlPre${countComp}">${optionText}</span></p>              
                `);

                manageComp.insertAdjacentHTML('beforeend', `
                    <button class="btn-del-content" type="button" id="btnDelComp${countComp}"><span class="p-1"><img src="assets/images/close-icon.svg" alt="close icon"></span>${competence.value !== '' ? competence.value : "compétence vide"}</button>
                    `);

                competence.value = '';
                levelSelect.selectedIndex = 0;
            });

            

        document.addEventListener('click', function(event) {

            const target = event.target;

            if(target.id && target.id.includes('btnDelComp')) {
                const num = target.id.replace('btnDelComp', '');
                const compPreToRemove = document.getElementById(`competenceP${num}`);
                const btnCompToRemove = document.getElementById(`btnDelComp${num}`);

                if (compPreToRemove) {
                    compPreToRemove.remove();
                    btnCompToRemove.remove();

                    countComp--;

                    event.stopPropagation();
                    return;
                }
            }


            if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA' || event.target.tagName === 'SELECT') {
                const clickedInput = event.target;
                const inputId = clickedInput.id;
                
                console.log("ID de l'input cliqué :", inputId);
                console.log("Valeur actuelle :", clickedInput.value);
                
                window.currentSelectedInputId = inputId;
                
                document.querySelectorAll('input, textarea').forEach(el => {
                    el.classList.remove('selected-input');
                });
                clickedInput.classList.add('selected-input');
            }
        });

        document.addEventListener('input', function(event) {
            const target = event.target;
            const inputId = target.id;
            const value = target.value;

            if (inputId.includes('titleExpInput')) {
                const num = inputId.replace('titleExpInput', '');
                const previewElement = document.getElementById(`expTitlePre${num}`);
                if (previewElement) previewElement.textContent = value || "Développeur Full-Stack";
            }

            else if (inputId.includes('companyNameInput')) {
                const num = inputId.replace('companyNameInput', '');
                const previewElement = document.getElementById(`companyNamePre${num}`);
                if (previewElement) previewElement.textContent = value || "Google";             
            }

            else if (inputId.includes('startDateExpInput')) {
                const num = inputId.replace('startDateExpInput', '');
                const previewElement = document.getElementById(`startDateExpPre${num}`);
                if (previewElement) previewElement.textContent = value || "01/01/2025";             
            }
            
            else if (inputId.includes('endDateExpInput')) {
                const num = inputId.replace('endDateExpInput', '');
                const previewElement = document.getElementById(`endDateExpPre${num}`);
                if (previewElement) previewElement.textContent = value || "01/01/2026";             
            }

            else if (inputId.includes('descExpInput')) {
                const num = inputId.replace('descExpInput', '');
                const previewElement = document.getElementById(`descExpPre${num}`);
                if (previewElement) previewElement.textContent = value || "Mission 1";             
            }
            
            else if (inputId.includes('titleFormInput')) {
                const num = inputId.replace('titleFormInput', '');
                const previewElement = document.getElementById(`formTitlePre${num}`);
                if (previewElement) previewElement.textContent = value || "Formation Développeur Full-Stack";             
            }

            else if (inputId.includes('schoolInput')) {
                const num = inputId.replace('schoolInput', '');
                const previewElement = document.getElementById(`schoolNamePre${num}`);
                if (previewElement) previewElement.textContent = value || "Université";             
            }

            else if (inputId.includes('startDateSchoolInput')) {
                const num = inputId.replace('startDateSchoolInput', '');
                const previewElement = document.getElementById(`startDateFormPre${num}`);
                if (previewElement) previewElement.textContent = value || "01/01/2025";             
            }

            else if (inputId.includes('endDateSchoolInput')) {
                const num = inputId.replace('endDateSchoolInput', '');
                const previewElement = document.getElementById(`endDateFormPre${num}`);
                if (previewElement) previewElement.textContent = value || "01/01/2026";             
            }

            else if (inputId.includes('descSchoolInput')) {
                const num = inputId.replace('descSchoolInput', '');
                const previewElement = document.getElementById(`missionFormPre${num}`);
                if (previewElement) previewElement.textContent = value || "Étude des droits..";             
            }
            
        })
    });
});




        


































                                // <div class="form-group row mx-auto mx-md-0 flex-md-grow-1" id="">
                                //     <label for="" class="p-0">Intitulé du poste</label>
                                //     <input type="text" class="form-control mb-3" placeholder="Développeur Full-Stack" id="titleExpInput">
                                //     <label for="" class="p-0">Nom de l'entreprise</label>
                                //     <input type="text" class="form-control mb-3" placeholder="Google" id="companyNameInput">
                                //     <label for="" class="p-0">Date de début</label>
                                //     <input type="date" class="form-control mb-3" id="startDateExpInput">
                                //     <label for="" class="p-0">Date de fin (Facultatif)</label>
                                //     <input type="date" class="form-control mb-3" id="endDateExpInput">
                                //     <label for="" class="p-0">Description des missions</label>
                                //     <textarea name="" id="" class="form-control mb-3" placeholder="Étude des droits.." id="descExpInput"></textarea>
                                // </div>

                                    // <label for="" class="p-0">Intitulé du poste</label>
                                    // <input type="text" class="form-control mb-3" placeholder="Développeur Full-Stack" id="titleExpInput">
                                    // <label for="" class="p-0">Nom de l'entreprise</label>
                                    // <input type="text" class="form-control mb-3" placeholder="Google" id="companyNameInput">
                                    // <label for="" class="p-0">Date de début</label>
                                    // <input type="date" class="form-control mb-3" id="startDateExpInput">
                                    // <label for="" class="p-0">Date de fin (Facultatif)</label>
                                    // <input type="date" class="form-control mb-3" id="endDateExpInput">
                                    // <label for="" class="p-0">Description des missions</label>
                                    // <textarea name="" id="" class="form-control mb-3" placeholder="Étude des droits.." id="descExpInput"></textarea>