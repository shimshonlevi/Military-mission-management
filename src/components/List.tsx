
import React, { useEffect, useState } from 'react';
import { Mission } from '../types/Types';
import { getMissions } from '../conectApi';
import Card from './Card';

interface MissionListProps {
    refresh: boolean;
    onMissionChange: () => void; // פונקציה לעדכון משימות
}

const List: React.FC<MissionListProps> = ({ refresh, onMissionChange }) => {
    const [missions, setMissions] = useState<Mission[]>([]);

    useEffect(() => {
        const fetchMissions = async () => {
            const response = await getMissions();
            setMissions(response.data);
        };
        fetchMissions();
    }, [refresh]); // יתעדכן בכל פעם שה-refresh משתנה

    return (
        <div>
            {missions.map((mission) => (
                <Card key={mission._id} mission={mission} onMissionChange={onMissionChange} />
            ))}
        </div>
    );
};

export default List;
