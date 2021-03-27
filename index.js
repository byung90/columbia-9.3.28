const fs = require('fs');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'input',
      name: 'location',
      message: 'Where are you located?'
    },
    {
      type: 'input',
      name: 'bio',
      message: 'Short description about yourself:'
    },
    {
      type: 'input',
      name: 'linkedIn',
      message: 'What is your LinkedIn profile url?'
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your github username?'
    }
  ])
  .then(response => {
    const htmlEl = `<!DOCTYPE html>

    <head>
      <title>${response.name}</title>
    </head>
    
    <body>
      <h1 class="name">Name: ${response.name}</h1>
      <p class="location">Location: ${response.location}</p>
      <p class="bio">Bio: ${response.bio}</p>
      <p class="linkedIn">LinkedIn Url: Click <a href="${response.linkedIn}">Here<a></p>
      <p class="github">Github Id: <a href="https://github.com/${response.github}">${response.github}<a/></p>
    </body>
    
    </html>`
    fs.writeFile(`${response.name}` + '-profile.html', htmlEl, (err) => {
      if (err) {
        console.log(err);
      }
      else {
        console.log('File has been saved');
      }
    })
  })