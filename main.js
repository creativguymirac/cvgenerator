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

        const compPre = document.getElementById('competencePre');
        
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
        
        // formationTitle.addEventListener('input', () => {
            
        // })
    });
    
});

let countForm = 0;
let countExp = 0;

btnAddFormation.addEventListener('click', () => {
    countForm++;
    formDiv.insertAdjacentHTML('beforeend',`
                                <h3 class="p-0 m-0 mb-2 h5">Formation ${countForm}</h3>
                                <label class="p-0">Intitulé du diplôme ou formation</label>
                                <input type="text" class="form-control mb-3" placeholder="Mastère" id="titleFormInput${countForm}">
                                <label class="p-0">Établissement</label>
                                <input type="text" class="form-control mb-3" placeholder="Université" id="schoolInput${countForm}">
                                <label class="p-0">Date de début</label>
                                <input type="date" class="form-control mb-3" id="startDateSchoolInpu${countForm}t">
                                <label class="p-0">Date de fin (Facultatif)</label>
                                <input type="date" class="form-control mb-3" id="endDateSchoolInput${countForm}">
                                <label class="p-0">Description</label>
                                <textarea name="" id="" class="form-control mb-3" placeholder="Étude des droits.." id="descSchoolInput${countForm}"></textarea>
                                `);
    
})

btnDelFormation.addEventListener('click', () => {
    countForm = countForm - countForm;
    formDiv.innerHTML = '';
})

btnAddExperience.addEventListener('click', () => {
    countExp++;
    expDiv.insertAdjacentHTML('beforeend',`
                                <h3 class="p-0 m-0 mb-2 h5">Expérience ${countExp}</h3>
                                <label for="" class="p-0">Intitulé du poste</label>
                                <input type="text" class="form-control mb-3" placeholder="Développeur Full-Stack" id="titleExpInput${countExp}">
                                <label for="" class="p-0">Nom de l'entreprise</label>
                                <input type="text" class="form-control mb-3" placeholder="Google" id="companyNameInput${countExp}">
                                <label for="" class="p-0">Date de début</label>
                                <input type="date" class="form-control mb-3" id="startDateExpInput${countExp}">
                                <label for="" class="p-0">Date de fin (Facultatif)</label>
                                <input type="date" class="form-control mb-3" id="endDateExpInput${countExp}">
                                <label for="" class="p-0">Description des missions</label>
                                <textarea name="" id="" class="form-control mb-3" placeholder="Étude des droits.." id="descExpInput${countExp}"></textarea>
                                `);
    
})

btnDelExperience.addEventListener('click', () => {
    countExp = countExp - countExp;
    expDiv.innerHTML = '';
})

        


































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