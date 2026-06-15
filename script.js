function uploadResume(){

    const file =
    document.getElementById("resumeUpload").files[0];

    if(!file){
        alert("Please upload your resume");
        return;
    }

    document.getElementById("result").innerHTML = `
    
    <h3>✅ Resume Analyzed</h3>

    <p><b>Skills Found:</b> Python, SQL, Power BI, Excel</p>

    <p><b>Resume Score:</b> 87%</p>

    <p><b>Recommended Roles:</b></p>

    <ul>
        <li>Data Analyst</li>
        <li>Business Analyst</li>
        <li>AI Intern</li>
    </ul>

    `;
}
function generateLetter(){

    const role =
    document.getElementById("jobRole").value;

    if(role===""){
        alert("Please enter a job role");
        return;
    }

    document.getElementById("letterOutput").innerHTML = `
    
    <h3>Generated Cover Letter</h3>

    <p>
    Dear Hiring Manager,
    </p>

    <p>
    I am excited to apply for the ${role}
    position. My skills in Python, SQL,
    Data Analysis and problem solving make
    me a strong candidate for this role.
    </p>

    <p>
    I am eager to contribute to your
    organization and continuously learn
    new technologies.
    </p>

    <p>
    Thank you for your consideration.
    </p>

    <p>
    Sincerely,<br>
    Candidate
    </p>
    
    `;
}
function sendMessage(){

    let input =
    document.getElementById("userInput");

    let message = input.value;

    if(message === ""){
        return;
    }

    let chatBox =
    document.getElementById("chatBox");

    chatBox.innerHTML += `
        <div class="user-message">
            ${message}
        </div>
    `;

    let reply = "";

    if(message.toLowerCase().includes("job")){
        reply =
        "Based on your profile, Data Analyst and AI Intern roles are recommended.";
    }

    else if(message.toLowerCase().includes("skill")){
        reply =
        "You should focus on Power BI, Tableau and Advanced SQL.";
    }

    else if(message.toLowerCase().includes("interview")){
        reply =
        "Practice SQL queries, Python basics and project explanations.";
    }

    else{
        reply =
        "I can help with jobs, skills, resumes and interview preparation.";
    }

    chatBox.innerHTML += `
        <div class="bot-message">
            ${reply}
        </div>
    `;

    input.value = "";

    chatBox.scrollTop =
    chatBox.scrollHeight;
}
