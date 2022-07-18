


export const hotWheel = (e)=>{
 
        // e.preventDefault();
        const container = document.getElementById("scroll");
        console.log('cliccato');
        container.scrollLeft += e.deltaY *3;
     
}