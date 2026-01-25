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
const compDiv = document.getElementById('compDiv');

const previewContainer = document.getElementById('previewContainer');

btnResetForm.addEventListener('click', () => {
    location.reload();
})

// btnExportCV.addEventListener('click', () => {
//     const data = previewContainer.innerHTML;
    
//     fetch('export.php', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data)
//     })
//     .then(response => response.text())
//     .then(data => console.log(data))
//     .catch(error => console.error('Erreur:', error));

    
// })


document.addEventListener('DOMContentLoaded', function() {

    
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
                                        <label for="titleExpInput${countExp}" class="p-0">Intitulé du poste</label>
                                        <input type="text" class="form-control mb-3" placeholder="Développeur Full-Stack" name="titleExpInput${countExp}" id="titleExpInput${countExp}">
                                        <label for="companyNameInput${countExp}" class="p-0">Nom de l'entreprise</label>
                                        <input type="text" class="form-control mb-3" placeholder="Google"  name="companyNameInput${countExp}" id="companyNameInput${countExp}">
                                        <label for="startDateExpInput${countExp}" class="p-0">Date de début</label>
                                        <input type="text" placeholder="01/01/2025" class="form-control mb-3" name="startDateExpInput${countExp}" id="startDateExpInput${countExp}">
                                        <label for="endDateExpInput${countExp}" class="p-0">Date de fin (Facultatif)</label>
                                        <input type="text" placeholder="01/01/2026" class="form-control mb-3" name="endDateExpInput${countExp}" id="endDateExpInput${countExp}">
                                        <label for="descExpInput${countExp}" class="p-0">Description des missions</label>
                                        <textarea name="" class="form-control mb-3" placeholder="Étude des droits.." name="descExpInput${countExp}" id="descExpInput${countExp}"></textarea>
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
                                        <label for="titleFormInput${countForm}" class="p-0">Intitulé du diplôme ou formation</label>
                                        <input type="text" class="form-control mb-3" placeholder="Master" name="titleFormInput${countForm}" id="titleFormInput${countForm}">
                                        <label for="schoolInput${countForm}" class="p-0">Établissement</label>
                                        <input type="text" class="form-control mb-3" placeholder="Université" name="schoolInput${countForm}" id="schoolInput${countForm}">
                                        <label for="startDateSchoolInput${countForm}" class="p-0">Date de début</label>
                                        <input type="text" placeholder="01/01/2025" class="form-control mb-3" name="startDateSchoolInput${countForm}" id="startDateSchoolInput${countForm}">
                                        <label for="endDateSchoolInput${countForm}" class="p-0">Date de fin (Facultatif)</label>
                                        <input type="text" placeholder="01/01/2025" class="form-control mb-3" name="endDateSchoolInput${countForm}" id="endDateSchoolInput${countForm}">
                                        <label for="descSchoolInput${countForm}" class="p-0">Description</label>
                                        <textarea name="" class="form-control mb-3" placeholder="Étude des droits.." name="descSchoolInput${countForm}" id="descSchoolInput${countForm}"></textarea>
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
                compDiv.innerHTML = '';
                compPre.innerHTML = '';
            }

            countComp++;

            compDiv.insertAdjacentHTML('beforeend', `
                                    <div class="w-100" id="newCompDiv${countComp}">
                                        <h3 class="p-0 m-0 mb-2 h5">Compétences ${countComp}</h3>
                                        <label for="competenceInput${countComp}" class="p-0">Compétences</label>
                                        <input type="text" class="form-control mb-3" placeholder="Excel" name="competenceInput${countComp}" id="competenceInput${countComp}">
                                        <label for="levelInput${countComp}" class="p-0">Niveau</label>
                                        <select name="" class="form-control mb-3" name="levelInput${countComp}" id="levelInput${countComp}">
                                            <option value="Débutant">Débutant</option>
                                            <option value="Amateur">Amateur</option>
                                            <option value="Confirmé">Confirmé</option>
                                            <option value="Expert">Expert</option>
                                        </select>
                                    </div>
            `);
            
            compPre.insertAdjacentHTML('beforeend', `
                                            <p id="competenceP${countComp}"><span id="compPre${countComp}">HTML CSS</span> - <span id="lvlPre${countComp}">Débutant</span></p>                
            `);

            manageComp.insertAdjacentHTML('beforeend', `
                    <button class="btn-del-content p-1" type="button" id="btnDelComp${countComp}">bouton supression</button>
            `);
        })          

        document.addEventListener('click', function(event) {
            const target = event.target.closest('[id*="btnDelComp"]');

            if(target && target.id.includes('btnDelComp')) {
                const numToDelete = parseInt(target.id.replace('btnDelComp', ''), 10);
                
                
                document.querySelectorAll(`[id$="${numToDelete}"]`).forEach(el => el.remove());
                
                
                const allElements = document.querySelectorAll('[id]');
                const numsMap = new Map(); 
                
                allElements.forEach(el => {
                    const id = el.id;
                    const matches = id.match(/(competenceP|btnDelComp|newCompDiv)(\d+)$/);
                    
                    if (matches) {
                        const type = matches[1];
                        const num = parseInt(matches[2], 10);
                        
                        if (num > numToDelete) {
                            if (!numsMap.has(num)) {
                                numsMap.set(num, {});
                            }
                            numsMap.get(num)[type] = el;
                        }
                    }
                });
                
                const sortedNums = Array.from(numsMap.keys()).sort((a, b) => a - b);
                
                sortedNums.forEach((oldNum, index) => {
                    const newNum = numToDelete + index;
                    
                    const elements = numsMap.get(oldNum);
                    Object.entries(elements).forEach(([type, el]) => {
                        el.id = `${type}${newNum}`;
                        updateContentWithNewNumber(el, oldNum, newNum);
                    });
                });
                
                if (typeof countComp !== 'undefined') {
                    countComp--;
                }
                
                event.stopPropagation();
                }

            function updateContentWithNewNumber(element, oldNum, newNum) {
                // Remplacer le numéro dans les textes
                const textNodes = getTextNodes(element);
                textNodes.forEach(node => {
                    node.nodeValue = node.nodeValue.replace(new RegExp(oldNum, 'g'), newNum);
                });
                
                // Remplacer le numéro dans les attributs data-* et autres
                element.querySelectorAll('[data-num], [data-index], [data-id]').forEach(el => {
                    ['data-num', 'data-index', 'data-id'].forEach(attr => {
                        if (el.hasAttribute(attr)) {
                            const value = el.getAttribute(attr);
                            if (value.includes(oldNum)) {
                                el.setAttribute(attr, value.replace(oldNum, newNum));
                            }
                        }
                    });
                });
                
                // Remplacer le numéro dans les labels, placeholders, etc.
                element.querySelectorAll('label, input, textarea, select').forEach(el => {
                    // Pour le texte des labels
                    // if (el.tagName === 'LABEL' && el.textContent.includes(oldNum)) {
                    //     el.textContent = el.textContent.replace(oldNum, newNum);
                    // }
                    
                    // Pour les attributs for
                    if (el.hasAttribute('for')) {
                        const forValue = el.getAttribute('for');
                        if (forValue.includes(oldNum)) {
                            el.setAttribute('for', forValue.replace(oldNum, newNum));
                        }
                    }
                    
                    // Pour les placeholders
                    // if (el.hasAttribute('placeholder')) {
                    //     const placeholder = el.getAttribute('placeholder');
                    //     if (placeholder.includes(oldNum)) {
                    //         el.setAttribute('placeholder', placeholder.replace(oldNum, newNum));
                    //     }
                    // }
                    
                    // Pour les noms (name attributes)
                    if (el.hasAttribute('name')) {
                        const nameValue = el.getAttribute('name');
                        if (nameValue.includes(oldNum)) {
                            el.setAttribute('name', nameValue.replace(oldNum, newNum));
                        }
                    }
                });
            }

            // Fonction utilitaire pour récupérer tous les nœuds texte dans un élément
            function getTextNodes(element) {
                const textNodes = [];
                
                function findTextNodes(node) {
                    if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== '') {
                        textNodes.push(node);
                    } else {
                        for (const child of node.childNodes) {
                            findTextNodes(child);
                        }
                    }
                }
                
                findTextNodes(element);
                return textNodes;
            }


            if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA' || event.target.tagName === 'SELECT') {
                const clickedInput = event.target;
                const inputId = clickedInput.id;
                
                console.log("ID de l'input cliqué :", inputId);
                console.log("Valeur actuelle :", clickedInput.value);
                
                window.currentSelectedInputId = inputId;
                
                document.querySelectorAll('input, textarea, select').forEach(el => {
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

            else if (inputId.includes('competenceInput')) {
                const num = inputId.replace('competenceInput', '');
                const previewElement = document.getElementById(`compPre${num}`);
                if (previewElement) { 
                    previewElement.textContent = value || "Excel";
                    document.getElementById(`btnDelComp${num}`).textContent = value || "Pas de texte";
                }
            }
            else if (inputId.includes('levelInput')) {
                const num = inputId.replace('levelInput', '');
                const previewElement = document.getElementById(`lvlPre${num}`);
                if (previewElement) previewElement.textContent = value || "Débutant";             
            }
        });
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