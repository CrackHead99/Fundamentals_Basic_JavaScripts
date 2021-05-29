const name = 'Alex';
const age = '31';
const job = "Web developer";
const city = 'Kuala Lumpur';

let html;

// without template literals
html =
'<ul>'
'<li>Name: ' + name + '</li>' +
'<li>Age: ' + age + '</li>'
'<li>Age: ' + job + '</li>'
'<li>Age: ' + city + '</li>'
'</ul>';

// Using template literals

html =
`
<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li>City: ${city}</li>
<li>${3+3}</li>
<li>${'hello'}</li>
<li>${age > 30 ? 'over 30' : 'under 30'}</li>
</ul>

`;

document.body.innerHTML = html;