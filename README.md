Descrierea Proiectului
Backend (Server)
1.Tehnologii Utilizate:

Node.js: Platformă de runtime pentru construirea serverului.
Express.js: Framework pentru construirea aplicațiilor web și API-urilor.
MySQL: Sistem de management al bazelor de date relaționale.
CORS: Middleware pentru a permite cererile din alte domenii (cross-origin requests).

2.Funcționalități:

Conectarea la baza de date MySQL: Configurarea conexiunii la o bază de date locală MySQL.
Servirea unui mesaj simplu la ruta principală: Ruta / returnează un mesaj JSON.
Listarea camerelor: Ruta GET /cameras interoghează baza de date și returnează toate camerele.
Adăugarea unei noi camere: Ruta POST /cameras primește datele unei camere noi din corpul cererii și le inserează în baza de date.
Ștergerea unei camere: Ruta DELETE /cameras/:id șterge o cameră din baza de date pe baza ID-ului.
Actualizarea unei camere: Ruta PUT /cameras/:id actualizează informațiile unei camere existente în baza de date pe baza ID-ului.

Frontend (Client)
1.Tehnologii Utilizate:

React: Bibliotecă JavaScript pentru construirea interfeței de utilizator.
React Router: Pentru navigarea între diferite pagini ale aplicației.
Axios: Biblioteca pentru efectuarea cererilor HTTP.
CSS: Pentru stilizarea aplicației.

2.Funcționalități:

Afișarea camerelor: Componenta Cameras face o cerere GET către server pentru a prelua și afișa toate camerele disponibile.
Adăugarea unei noi camere: Componenta Add permite utilizatorului să completeze un formular și să trimită datele unei camere noi către server printr-o cerere POST.
Actualizarea unei camere: Componenta Update permite utilizatorului să modifice informațiile unei camere existente și să trimită modificările către server printr-o cerere PUT.
Ștergerea unei camere: Butonul Delete în componenta Cameras trimite o cerere DELETE către server pentru a șterge o cameră specifică.
Stilizarea:
Folosește CSS pentru a stiliza diferitele componente ale aplicației.
Layout-ul este adaptat pentru a fi responsiv, folosind flexbox și grid pentru aranjarea elementelor.
![image](https://github.com/Isarescu-Anamaria/Proiect-TD/assets/126576843/07e792bd-533e-4c53-b7cb-33e50f9a4834)
![image](https://github.com/Isarescu-Anamaria/Proiect-TD/assets/126576843/5d03dedd-d562-4556-9301-243ffe81ea07)
![image](https://github.com/Isarescu-Anamaria/Proiect-TD/assets/126576843/1517b37e-5e75-4e99-8759-f70e6c0eeac2)


