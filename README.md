# MyApiServer

This project is just a quick API server that I have installed on my Raspberry Pi.
It is based on Express and uses MySql (MariaDB).

To get it running, make sure you have MySql running on localhost. On my project
I have created a 'myDb' database, together with creating a user 'newuser1' with the
password 'password'. On a secure server, these parameters should be stored in the
env file.

Also the form parameters should be filtered to prevent attacks. 
