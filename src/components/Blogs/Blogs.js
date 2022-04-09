import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='m-5 p-5 rounded-lg bg-gray-100' >
                <h1 className='text-3xl mb-3'>What is context api?</h1>
                <p>Ans: THe react context api has been around as an exerimental feature for a while now, but only in teact version 16.3.0 did it become safe to use in production. This new api solves one major problem  <strong>Prop Drilling</strong>. Even if you are not familiar with the term , if you have worked on a react.js app, it has probably happened to you. Besically context is designed to share data that can be considered <strong>"global"</strong> for a tree of React components, such as the current authenticated user, theme, or preferred language. For example, in the code below we manually thread through a <strong>"Theme"</strong> prop in order to style in Button component,class app extends React.</p>
            </div>
            <div className='m-5 p-5 rounded-lg bg-gray-100' >
                <h1 className='text-3xl mb-3'>What is Semantic tag?</h1>
                <p>
                    One of the most important feature of HTML5 is its semantic tags. Semantic Html refers to syntax that makes the HTML more comprehensible by better defining the different sections and layout of web pages.It makes web pages more informatives and adaptable, allowing browsers and search engines to better interpret content. Semantic HTMl elements are those that clearly describe their meaning in human and machine-readable way.
                </p>
            </div>
        </div>
    );
};

export default Blogs;