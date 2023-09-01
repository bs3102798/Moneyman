import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can perform any actions you need, like sending the form data to a server
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Comment:', comment);
        // Clear the form
        setName('');
        setEmail('');
        setComment('');
    };

    return (
        <section id="contact">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <div>

                    <label>
                        Name:
                        <input type="text" value={name} onChange={handleNameChange} />
                    </label>
                </div>
                <div>

                    <label>
                        Email:
                        <input type="email" value={email} onChange={handleEmailChange} />
                    </label>
                </div>
                <div>

                    <label>
                        Comment:
                        <textarea value={comment} onChange={handleCommentChange} />
                    </label>
                </div>
                <div>

                    <button type="submit">Submit</button>
                </div>
            </form>
        </section>
    );
};

export default Contact;