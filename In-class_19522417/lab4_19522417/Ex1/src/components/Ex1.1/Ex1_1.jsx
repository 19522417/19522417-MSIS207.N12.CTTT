import * as React from 'react';

function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 19522417, name: 'Truc' });
        }, 1000);
    });
}

export default function Ex1_1() {
    const [id, setId] = React.useState('loading...');
    const [name, setName] = React.useState('loading...');

    React.useEffect(() => {
        fetchUser().then((user) => {
            setId(user.id);
            setName(user.name);
        });
    });

    return (
        <>
            <h3 style={{ color: 'black' }}>Ex 1.1</h3>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
        </>
    );
}
