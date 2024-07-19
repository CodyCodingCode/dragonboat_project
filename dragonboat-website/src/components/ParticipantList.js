import React, { useEffect, useState } from 'react';
import { fetchParticipants, addParticipant } from '../api';

const ParticipantList = () => {
    const [participants, setParticipants] = useState([]);
    const [newParticipant, setNewParticipant] = useState({ name: '', team: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchParticipants()
            .then(data => {
                setParticipants(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching participants:', error);
                setLoading(false);
                setError('Failed to fetch participants');
            });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewParticipant(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newParticipant.name.trim() === '' || newParticipant.team.trim() === '') return;

        addParticipant(newParticipant)
            .then(data => {
                setParticipants([...participants, data]);
                setNewParticipant({ name: '', team: '' });
            })
            .catch(error => {
                console.error('Error adding participant:', error);
                setError('Failed to add participant');
            });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Participant List</h1>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={newParticipant.name}
                    onChange={handleInputChange}
                    placeholder="Enter participant name"
                />
                <input
                    type="text"
                    name="team"
                    value={newParticipant.team}
                    onChange={handleInputChange}
                    placeholder="Enter participant team"
                />
                <button type="submit">Add Participant</button>
            </form>
            <ul>
                {participants.length > 0 ? (
                    participants.map(participant => (
                        <li key={participant.id}>{participant.name} ({participant.team})</li>
                    ))
                ) : (
                    <p>No participants available.</p>
                )}
            </ul>
        </div>
    );
};

export default ParticipantList;
