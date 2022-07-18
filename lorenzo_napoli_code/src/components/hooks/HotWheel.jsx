


export const hotWheel = (event)=>{
 
        // e.preventDefault();
        const container = document.getElementById("scroll");
        console.log('cliccato');
        container.scrollLeft += event.deltaY *3;
     
}