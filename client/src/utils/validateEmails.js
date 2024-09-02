export default (emails) => {
    const emailsArray = emails
        .split(',')
        .map(email => email.trim())
        .filter(email => email !== '');

    const invalidEmails = emailsArray
        .filter(email => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email));

    if (invalidEmails.length) {
        return `These emails are invalid: ${invalidEmails}`;
    }

    return;
};