const generateManager = function (manager) {
    return `
    <div class= "col-4 mt-4">
        <div class= "card-header">
            <h3> ${manager.name}</h3>
            <h4>Manager</h4>
        </div>
        
        <div class"card-body">
            <p class="id"> ID: ${manager.id}</p>
            <p class="email"> Email: <a <href=:":${manager.email}">${manager.email}</a></p>
            <class="office"> Office Number: ${manager.officeNumber}</p>
        </div>
    `
}

const generateEngineer = function (engineer) {
    return `
    <div class="col-4 mt-4">
        <div class= "card-header">
            <h3>${engineer.name}</h3>
            <h4>Engineer</h4>
        </div>
       
         <div class="card-body">
            <p class="id">ID: ${engineer.id}</p>
            <p class="email">Email: <a href="${engineer.email}">${engineer.email}</a></p>
            <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
    </div>

    `
}

const generateIntern = function (intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4><i class="material-icons">assignment_ind</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    
    `
};

generateHTML = (data) => {

    pageArray = [];
   
    if (role === 'Manager') {
        const managerCard = generateManager(employee);

        pageArray.push(managerCard);
    }

    
    if (role === 'Engineer') {
        const engineerCard = generateEngineer(employee);

        pageArray.push(engineerCard);
    }

    
    if (role === 'Intern') {
        const internCard = generateIntern(employee);

        pageArray.push(internCard);
    }
    


    const employeeCards = pageArray.join('')

const generateTeam = generateTeamPage(employeeCards); 
return generateTeam;
}