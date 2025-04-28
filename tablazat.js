document.addEventListener('DOMContentLoaded', function()
{
const form = document.getElementById('data-form');
const tableBody = document.querySelector('#data-table body');
const searchInput  = document.getElementById('search');

let data = []; 

function validateNev(nev) 
{
    if(!nev)
    {
        return "A név megadása kötelező!";
    }
    if(nev.lenght > 40)
    {
        return "A név maximum 40 karakter hosszú lehet";
    }
    return "";
}

function validateNeptun(neptun)
{
    if(!neptun)
    {
        return "A neptun kód megadása kötelező!";
    }
    if(neptun.lenght !==6)
    {
        return "A neptun kód 6 karakter hosszú kell, hogy legyen!";
    }
    return ""; 
}

});