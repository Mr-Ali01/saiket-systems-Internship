const buttons = document.querySelectorAll("#project-filters button");
// console.log("button1",buttons)
const cards = document.querySelectorAll(".project-cards");
// console.log(cards[1]);
buttons.forEach((button)=>{
    // console.log(button);

    button.addEventListener("click", (e)=>{

        buttons.forEach((btn)=>{
        btn.classList.remove("theme-btn-primary");  
        })
        // console.log(this.dataset.filter);
        // console.log(e.currentTarget.dataset.filter);
                e.currentTarget.classList.add("theme-btn-primary")
        
        cards.forEach((card)=>{
            // console.log(card);
                // button.classList.add("bg-gradient-to-r","from-sky-500","to-sky-600","text-white")

            if(card.dataset.category  === e.currentTarget.dataset.filter) {
                console.log(card);
                // button.classList.add("bg-gradient-to-r","from-sky-500","to-sky-600","text-white")
                card.style.display="flex";
            }else{
                card.style.display="none";
                // button.classList.add("bg-gradient-to-r","from-sky-500","to-sky-600","text-white")

            }
            
        })
        
        
    })
})



