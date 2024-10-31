
import React, { useState } from 'react';
import List from './components/List';
import Form from './components/Form';

const App: React.FC = () => {
    const [refresh, setRefresh] = useState(false);

    const onMissionAdded = () => {
        setRefresh(!refresh); // מרענן את הרשימה בכל פעם שמשימה מתווספת
    };

    return (
        <div>
            <h1>Military Missions Dashboard</h1>
            <Form onMissionAdded={onMissionAdded} />
            <List refresh={refresh} onMissionChange={onMissionAdded} />
        </div>
    );
};

export default App;
