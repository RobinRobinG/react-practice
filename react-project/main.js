const header = React.createElement('h1', {style: { color: 'pink'}}, 'Hello Dojo!');
const header2 = React.createElement('h2', {style: { color: 'green'}}, 'Things I need to do:');
const  list = React.createElement('ul', {style: { color: 'blue'}}, 
    React.createElement('li', null, 'Learn React'),
    React.createElement('li', null, 'Climb Mt. Everest'),
    React.createElement('li', null, 'Run a Marathon'),
    React.createElement('li', null, 'Feed the dogs')
);

const helloReact = React.createElement('div', null, header, header2, list);

ReactDOM.render(helloReact, document.getElementById('root'));
