
import React from 'react';
import { Mission } from '../types/Types';
import { deleteMission, updateMissionStatus } from '../conectApi';

interface MissionCardProps {
    mission: Mission;
    onMissionChange: () => void;
}

const Card: React.FC<MissionCardProps> = ({ mission, onMissionChange }) => {
    const handleDelete = async () => {
        await deleteMission(mission._id!);
        onMissionChange(); 
    };

    const handleStatusUpdate = async () => {
        await updateMissionStatus(mission._id!);
        onMissionChange();
    };

    return (
        <div className="mission-card">
            <h3>{mission.name}</h3>
            <p>{mission.description}</p>
            <p>Status: {mission.status}</p>
            <p>Priority: {mission.priority}</p>
            <button className="update-button" onClick={handleStatusUpdate}>Update Status</button>
            <button className="delete-button" onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default Card;
