@echo off

REM Initialize npm
call npm init -y

REM Install playwright
call npm init playwright@latest
echo playwright installation complete.

REM Install @faker-js/faker
call npm install @faker-js/faker
echo @faker-js/faker installation complete.

REM Install @types/node
call npm install @types/node
echo @types/node installation complete.

REM Install dotenv
call npm install dotenv
echo dotenv installation complete.

echo All installations complete.
pause
