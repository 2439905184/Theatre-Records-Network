class ToggleButton extends HTMLElement
{
    constructor()
    {
        super()
        this.isToggled = false
        this.onclick = (e)=>
        {
            this.isToggled = !this.isToggled
            // console.log(this.isToggled);
            if(this.isToggled)
            {
                this.style = "background-color:blue;color:white"
                // current_progress+=1
            }
            else
            {
                this.style = "background-color:none"
                // current_progress-=1
            }
            // console.log(current_progress)

        }
    }

}
customElements.define("toggle-button",ToggleButton)