import React from 'react';

const Contact = () => {
  return (
    <section className="py-20 bg-blue-50 text-center" id="contact">
      <h2 className="text-4xl font-bold text-gray-800">Contact Me</h2>
      <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
        Let's work together on your next project. Feel free to reach out to me.
      </p>
      <div className="mt-6">
        <a href="mailto:example@gmail.com" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Send an Email
        </a>
      </div>
    </section>
  );
};

export default Contact;