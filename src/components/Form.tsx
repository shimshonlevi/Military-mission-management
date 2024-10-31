import React, { useState } from 'react'
import{Mission} from '../types/Types'
import { addMission } from '../conectApi'




interface MissionFormProps {
    onMissionAdded: () => void;
}

const Form: React.FC<MissionFormProps> = ({ onMissionAdded }) => {
    const [mission, setMission] = useState<Mission>({
        name: '',
        status: 'Pending',
        priority: 'Low',
        description: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await addMission(mission);
        onMissionAdded(); 
        setMission({ name: '', status: 'Pending', priority: 'Low', description: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Mission Name"
                value={mission.name}
                onChange={(e) => setMission({ ...mission, name: e.target.value })}
            />
            <select
                value={mission.priority}
                onChange={(e) => setMission({ ...mission, priority: e.target.value })}
            >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
            <select
                value={mission.status}
                onChange={(e) => setMission({ ...mission, status: e.target.value })}
            >
                <option value="Pending">Pending</option>
                <option value="In-Progress">In-Progress</option>
                <option value="Completed">Completed</option>
            </select>
            <textarea
                placeholder="Description"
                value={mission.description}
                onChange={(e) => setMission({ ...mission, description: e.target.value })}
            />
            <button type="submit">Add Mission</button>
        </form>
    );
};

export default Form
