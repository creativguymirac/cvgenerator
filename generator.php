<?php 
error_reporting(E_ALL);
ini_set('display_errors', 1);
?>

<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>VitaePresss - Générateur</title>
        <link rel="stylesheet" href="css/app.css">
</head>
<body class="vw-100 vh-100">
    <main class="w-100 h-100 px-0 py-4 not-only:w-100 bg-white-custom overflow-x-hidden">
        <header class="w-100 mb-4">   
            <nav class="navbar navbar-expand-lg px-2 lg-px-8">
                <div class="d-flex justify-content-between container-fluid">
                    <img src="assets/images/logo.svg" alt="logo vitaePress" class="logo-responsive">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse flex-grow-reset " id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link" href="index.html">Accueil</a>
                            <a class="nav-link active" aria-current="page" href="#">Génerateur de CV</a>
                            <a class="nav-link" href="#">Mes CV</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <section class="vw-100 mt-7">
            <div class="w-100 w-md-70 w-lg-60 w-xl-40 px-4 lg-px-8">
                <h1 class="fw-bold">Générateur de CV</h1>
                <p class="">
                    Cet outil vous permet de générer facilement un CV structuré et élégant à partir d’un formulaire simple. Saisissez vos informations personnelles, votre formation et vos expériences professionnelles, puis obtenez automatiquement une mise en page claire et prête à l’emploi. Idéal pour les chercheurs d’emploi, étudiants ou professionnels en reconversion. Rapide, efficace et personnalisable.
                </p>
            </div>

            <div class="w-100 d-xl-flex gap-5 mt-5 px-4 lg-px-8">
                <div id="form" class="form-custom">
                    <form action="export.php" method="POST" class="w-100 d-flex flex-column  align-items-center">
                        
                        <div class="w-100 mb-2">
                            <h2 class="">Informations Général</h2>
                            <div class="d-md-flex gap-2">
                                <div class="form-group mx-auto mx-md-0 flex-md-grow-1">
                                    <label for="firstnameInput" class="p-0">Prénom</label>
                                    <input type="text" class="form-control mb-3" placeholder="John" name="firstnameInput" id="firstnameInput">
                                    <label for="nameInput" class="p-0">Nom</label>
                                    <input type="text" class="form-control mb-3" placeholder="Doe" name="nameInput" id="nameInput">
                                    <label for="mainTitleInput" class="p-0">Intitulé</label>
                                    <input type="text" class="form-control mb-3" placeholder="Développeur" name="mainTitleInput" id="mainTitleInput">
                                </div>
                                
                                <div class="form-group mx-auto mx-md-0 flex-md-grow-1">
                                    <label for="addressInput" class="p-0">Adresse</label>
                                    <input type="text" class="form-control mb-3" placeholder="7 rue de la République, 69003 Lyon" name="addressInput" id="addressInput">
                                    <label for="phoneInput" class="p-0">Numéro de téléphone</label>
                                    <input type="text" class="form-control mb-3" placeholder="06 62 54 65 96" name="phoneInput" id="phoneInput">
                                    <label for="mailInput" class="p-0">Adresse mail</label>
                                    <input type="email" class="form-control mb-3" placeholder="example@mail.com" name="mailInput" id="mailInput">
                                </div>
                            </div>
                            <label for="descPersoInput" class="p-0">Description</label>
                            <textarea class="form-control mb-3" placeholder="Je suis.." name="descPersoInput" id="descPersoInput"></textarea>
                        </div>

                        <div class="d-md-flex gap-2">
                            <div class="w-100 mb-4">
                                <h2>Formations</h2>
                                <div class="form-group row mx-auto mx-md-0 flex-md-grow-1" id="formDiv">

                                </div>
                                <button class="btn btn-lg btn-hero w-100 flex-grow-1 mb-2" type="button" id="addFormation">Ajouter une formation</button>
                                <button class="btn btn-lg btn-hero bg-danger w-100 flex-grow-1" type="button" id="delFormation">Reinitialiser formations</button>
                            </div>

                            <div class="w-100 mb-4">
                                <h2>Expériences</h2>
                                <div class="form-group row mx-auto mx-md-0 flex-md-grow-1" id="expDiv">
                                    
                                </div>
                                <button class="btn btn-lg btn-hero w-100 flex-grow-1 mb-2" type="button" id="addExperience">Ajouter une experience</button>
                                <button class="btn btn-lg btn-hero bg-danger w-100 flex-grow-1" type="button" id="delExperience">Reinitialiser experience</button>
                            </div>
                        </div>

                        <div class="w-100 row mb-4">
                            <div class="form-group row mx-auto" id="compDiv">
                                <h2 class="p-0 m-0">Compétences</h2>
                                
                            </div>
                            <div class="w-100 d-flex flex-wrap align-items-center gap-2 p-0 mb-3" id="manageComp">
                                <p class="p-0 m-0">Supprimer les compètences :</p>
                            </div>
                            <div class="w-100 d-flex gap-2 p-0">
                                <!-- <button class="btn btn-lg btn-hero flex-grow-1">Effacer</button> -->
                                <button class="btn btn-lg btn-hero flex-grow-1" type="button" id="addCompetence">Ajouter compétence</button>
                            </div>
                        </div>

                        <!-- <div class="w-100 row mb-4 px-3">
                            <h2 class="mb-3">Gestion du contenu du CV</h2>
                        </div> -->
                        <div class="w-100 d-flex gap-2 p-0">
                            <button class="btn btn-lg btn-hero flex-grow-1" type="button" id="resetForm">Réinitialiser CV</button>
                            <button class="btn btn-lg btn-hero flex-grow-1" type="submit" id="downloadCV">Télécharger mon CV</button>
                        </div>  
                    </form>
                </div>

                <div class="w-100 mt-5 mt-xl-0" id="preview">
                    <div class="preview-h scrollbar-hide">
                        <div class="cv-container" id="previewContainer">

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <script type="module" src="main.js"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    
</body>
</html>
