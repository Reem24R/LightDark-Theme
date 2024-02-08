const dark=document.getElementById('dark1');
const body=document.querySelector('body');

dark.addEventListener('click', function()
{
    this.classList.toggle('bi-moon');
    if(this.classList.contains('bi-moon'))
    {
        body.style.backgroundColor='black';
        body.style.color='white';
        body.style.transition='1s';
    }else
    {
        body.style.backgroundColor='white';
        body.style.color='black';
        body.style.transition='1s';
    }
})
