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

const btnAddCompetence = document.getElementById('addCompetence');
const btnAddFormation = document.getElementById('addFormation');
const btnAddExperience = document.getElementById('addExperience');
const btnResetForm = document.getElementById('resetForm');
const btnExportCV = document.getElementById('downloadCV');

// Importation des elements du DOM pour la prévisualisation

const namePre = document.getElementById('namePre');
const firstnamePre = document.getElementById('firstnamePre');
const mainTitlePre = document.getElementById('mainTitlePre');
const addressPre = document.getElementById('addressPre');
const phonePre = document.getElementById('phonePre');
const mailPre = document.getElementById('mailPre');
const descPersoPre = document.getElementById('mainDescPre');
const compPre = document.getElementById('competencePre');

document.addEventListener('DOMContentLoaded', function() {
    
    const previewContainer = document.getElementById('previewContainer')
    
    // Gestion d'ecoutes des inputs pour la prévisualisation
    
    
        // Informations générale
    
    firstnameInput.addEventListener('input', () => {
        firstnamePre.innerText = firstnameInput.value || "John";
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
    
    formationTitle.addEventListener('input', () => {
        forma
    })


    fetch('./templates/default_cv.html')
    .then(response => response.text())
    .then(template => {
        previewContainer.innerHTML = template;
    });

});