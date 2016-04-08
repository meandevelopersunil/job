# job
I also explain each and ever step of algo in index.js file with proper comments
<br>
The Technology used in order to build this app is MEAN.
I also use the Bootstrap in order to build front end.
The hole Application hosted on <b>Heroku </b> at url <b>https://gentle-crag-28452.herokuapp.com/ </b>
<br>
Our System recommed those skills first those been adopted by maximum no of users.
<br>
In order to help the user while entering the job, i also use autoComplete reacommendation

<br>
<strong>
Algorith
</strong>
<br>
The Steps in Algorithm are
<ul>
<li>Initially parse the JSON
<li> Using forEach loop map the array of skills corresponding to roles.
<li>Internally sort the sills on the basis of no of times they occur in give role and put them accordingly in order.
<li>At the time of search we have autocomplete of the job, that will have the user alot at the time of typing.
<li> I Implement the two routes
  <ul>
    <li>https://gentle-crag-28452.herokuapp.com/jobs/:jobtype---> in order to get the required sills
    <li>https://gentle-crag-28452.herokuapp.com/search ---->In order to search the job for autoComplete
  </ul>
  <li> <b>Everything is dynamic: If their is any change is json file, that got reflected in real time</b>
</ul>

