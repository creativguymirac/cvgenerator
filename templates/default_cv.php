<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV - Export PDF</title>
</head>
<body>
    <div class="cv-container">
        <div class="header">
            <h1>John Doe</h1>
            <p>Développeur Full Stack</p>
            <p class="no-print">Cette section ne sera pas visible dans le PDF</p>
        </div>
        
        <div class="section">
            <h2>Informations Personnelles</h2>
            <div class="info-grid">
                <div>
                    <strong>Email:</strong> john.doe@example.com
                </div>
                <div>
                    <strong>Téléphone:</strong> +33 1 23 45 67 89
                </div>
                <div>
                    <strong>Ville:</strong> Paris, France
                </div>
                <div>
                    <strong>Site Web:</strong> www.johndoe.dev
                </div>
            </div>
        </div>
        
        <div class="section">
            <h2>Expérience Professionnelle</h2>
            <div>
                <h3>Développeur Senior - TechCorp</h3>
                <p><em>2020 - Présent</em></p>
                <p>Développement d'applications web avec PHP, JavaScript, React</p>
            </div>
            <div>
                <h3>Développeur Web - WebSolutions</h3>
                <p><em>2018 - 2020</em></p>
                <p>Création de sites vitrines et e-commerce</p>
            </div>
        </div>
        
        <div class="section">
            <h2>Compétences</h2>
            <ul>
                <li>PHP, Laravel, Symfony</li>
                <li>JavaScript, React, Vue.js</li>
                <li>HTML5, CSS3, Sass</li>
                <li>MySQL, MongoDB</li>
                <li>Git, Docker, CI/CD</li>
            </ul>
        </div>
    </div>

    <style>
        h1 {
            color: red;
        }
    </style>
</body>
</html>