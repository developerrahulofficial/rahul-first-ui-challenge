var iconShareBlock = document.querySelector('.icon-share'),
    iShare =document.querySelector('.i-share'),
    networks = document.querySelector('.network');



iconShareBlock.addEventListener('click', function(){

    // alert(networks.style.visibility);

 
   if (networks.style.visibility === 'hidden' ||  networks.style.visibility === '' ) {
    networks.style.visibility = 'visible';
    this.style.background = 'var(--desaturated-dark-blue)';
    iShare.style.fill = 'var(--light-grayish-blue)';
    return
   }

   networks.style.visibility = 'hidden';
   this.style.background = '';
   iShare.style.fillv= '';


})