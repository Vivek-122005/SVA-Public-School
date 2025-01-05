import { useEffect, useState } from 'react';
import { getDatabase, ref, get } from 'firebase/database';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBOA-yFtuYmdVjAa9xoj7UeqBfUsQ5iSss",
    authDomain: "sav-public-school.firebaseapp.com",
    databaseURL: "https://sav-public-school-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "sav-public-school",
    storageBucket: "sav-public-school.appspot.com",
    messagingSenderId: "166292915984",
    appId: "1:166292915984:web:aa5f0b6c5efc672e690795",
    measurementId: "G-C8617DEWSF"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

interface RegistrationData {
    studentName: string;
    dob: string;
    class: string;
    parentName: string;
    phone: string;
    email: string | null;
    address: string;
}

const Data = () => {
    const [registrations, setRegistrations] = useState<RegistrationData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const dbRef = ref(db, 'registrations');
            try {
                const snapshot = await get(dbRef);
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    const registrationsArray: RegistrationData[] = Object.keys(data).map((key) => data[key]);
                    setRegistrations(registrationsArray);
                } else {
                    console.log('No data available');
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border border-gray-300">Student Name</th>
                        <th className="px-4 py-2 border border-gray-300">Date of Birth</th>
                        <th className="px-4 py-2 border border-gray-300">Class</th>
                        <th className="px-4 py-2 border border-gray-300">Parent Name</th>
                        <th className="px-4 py-2 border border-gray-300">Phone</th>
                        <th className="px-4 py-2 border border-gray-300">Email</th>
                        <th className="px-4 py-2 border border-gray-300">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {registrations.map((registration, index) => (
                        <tr key={index}>
                            <td className="px-4 py-2 border border-gray-300">{registration.studentName}</td>
                            <td className="px-4 py-2 border border-gray-300">{registration.dob}</td>
                            <td className="px-4 py-2 border border-gray-300">{registration.class}</td>
                            <td className="px-4 py-2 border border-gray-300">{registration.parentName}</td>
                            <td className="px-4 py-2 border border-gray-300">{registration.phone}</td>
                            <td className="px-4 py-2 border border-gray-300">{registration.email}</td>
                            <td className="px-4 py-2 border border-gray-300">{registration.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Data;
