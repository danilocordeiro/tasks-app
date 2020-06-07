# tasks-app

<h3>Technologies</h3>
<table>
<th>Component</th><th>Technology</th>
<tr>
<td>Backend (REST)</td><td>SpringBoot 2.3.0</td>
</tr>
<tr>
<td>Frontend</td><td>Angular 9</td>
</tr>
<tr>
<td>REST Documentation</td><td>Swagger UI</td>
</tr>
<tr>
<td>Database</td><td>MySQL</td>
</tr>
<tr>
<td>Persistence</td><td>JPA (Using Spring Data)</td>
</tr>
<tr>
<td>Client Build Tools</td><td>angular-cli, Webpack, npm</td>
</tr>
<tr>
<td>Server Build Tools</td><td>Gradle(Java) </td>
</tr>
</table>

<h3>Install and start Backend(SpringBoot Java)</h3>
<pre>
# Gradle Build : Navigate to folder /backend where build.gradle is present 
./gradlew build && ./gradlew bootRun
</pre>

<h3>Install and start Frontend</h3>
<pre>
# Navigate to /frontend (should contain package.json )
npm install && ng serve
</pre>

<h3>Accessing Application</h3>
<table>
<th>Component</th><th>URL</th>
<tr><td>Frontend</td><td>http://localhost:4200</td></tr>
<tr><td>Swagger (API Ref)</td><td>http://localhost:8080/swagger-ui.html</td></tr>
</table>
