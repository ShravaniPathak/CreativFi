import React from 'react'
import '../css/Waitlist.css';

const Waitlist = () =>
{
    return(
        <>
        <div class="modal">
        <div class="waitlist">
            <div class="header">
                <h2>Join the Waitlist</h2>
            </div>
            <div class="updates">
                <span>Enroll yourself for our waitlist to receive periodic updates and get started on your journey to being the best content creator freelancer.</span>
                <form>
                    <input name="enter_email" type="email" placeholder="Enter email" id="enter_email" />
                    <button id="submit">Submit</button>
                </form>
            </div>
        </div>
    </div>
</>
    );
};

export default Waitlist;
