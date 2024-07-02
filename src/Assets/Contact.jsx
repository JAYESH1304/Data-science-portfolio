function Contact(){
    const HandleSubmit = () => {
        const scriptURL = 'https://script.google.com/macros/s/AKfycbxBTKgMxAoSTvb7VfP_59LrTJXQs6p2xwlpUnjcpOB2F4RkJ4pvUpmFFVNJBxQ-6IJs/exec'
        const form = document.forms['email_sub'];

        form.addEventListener('submit', e => {
            const button=document.getElementById('submit');
            button.style.backgroundColor="red";
            button.style.border = "1px solid black";
            e.preventDefault();
            console.log(form);
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(res => {
                alert('Form Submitted')
            })
            .catch(error => {
                console.error('Error!', error.message);
                alert('Error : submission unsuccesfull \n Try again.....');
            })
            .then( a => (form.reset()));
        })
    }
    return (
        <section  id="contact">
            <h3>Contact Me</h3>
            <form name="email_sub" method="post">
                <label>Name</label>
                <input type="text" name="name" required></input>

                <label>Email</label>
                <input type="text" name="email" required></input>

                <label>Contact Number</label>
                <input type="text" name="contact"></input>

                <label>Message</label>
                <textarea name="message" id="" cols="30"></textarea>
                <br></br>
                <input type="submit" onClick={HandleSubmit} id="submit" value="Send"></input>
            </form>
        </section>  
    )
}
export default Contact;