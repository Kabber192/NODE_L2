require('dotenv').config();
const OS = require('os');
function Infa()
{
    if(adminchek())
    {
    console.log(OS.platform());
    console.log(OS.freemem());
    console.log(OS.homedir());
    console.log(OS.hostname());
    console.log(OS.networkInterfaces());
    }
}
function MEM()
{
 if(OS.freemem()/1024/1024>4000)
 {
    return true;
 }
 else
 {
    return false;
 }
}
function adminchek() {
    return process.env.MODE === 'admin' || 'user';
}
    console.log(Infa());