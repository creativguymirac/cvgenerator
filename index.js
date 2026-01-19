import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/custom.scss';
import './templates/default_cv.php';

// Importation des elements du DOM pour le Formulaire

const name = document.getElementById('nameInput');
const firstname = document.getElementById('firstnameInput');
const mainTitle = document.getElementById('mainTitleInput');
const address = document.getElementById('addressInput');
const phone = document.getElementById('phoneInput');
const mail = document.getElementById('mailInput');
const descPerso = document.getElementById('descPersoInput');

const formTitle = document.getElementById('titleFormInput');
const schoolName = document.getElementById('schoolInput');
const startDateSchool = document.getElementById('startDateSchoolInput');
const endDateSchool = document.getElementById('endDateSchoolInput');
const descSchool = document.getElementById('descSchoolInput');
const btnAddFormation = document.getElementById('addFormation');

const expTitle = document.getElementById('titleExpInput');
const companyName = document.getElementById('companyNameInput');
const startDateCompany = document.getElementById('startDateExpInput');
const endStartCompany = document.getElementById('endDateExpInput');
const descCompany = document.getElementById('descExpInput');
const btnAddExperience = document.getElementById('addExperience');

const competence = document.getElementById('competenceInput');
const level = document.getElementById('levelInput');
const btnAddCompetence = document.getElementById('addCompetence');

const btnResetForm = document.getElementById('resetForm');
const btnExportCV = document.getElementById('downloadCV');

// Importation des elements du DOM pour la prévisualisation


