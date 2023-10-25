const answer = 'de';

switch(true) {
    case answer === 'en':
        console.log('Hi!');
        break;
    case answer === 'de':
        console.log('Guten Tag!');
        break;
    case answer === 'ru':
        console.log('Привет!');
        break;
    default:
        console.log('Hi!');
}