import React, { useState } from "react";

const Calculator: React.FC = () => {
    const [name, setName] = useState("");
    const [birthDateInput, setBirthdate] = useState<string>("");
    const [daysLived, setDaysLived] = useState<number>();
    const [exactAge, setExactAge] = useState<{ years: number, months: number, days: number }>({ years: 0, months: 0, days: 0 });

    const handleBirthdateChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setBirthdate(e.target.value);
    };

    const calcExactAge = (birthDateInput: string): { years: number, months: number, days: number } => {
        const birthDate = new Date(birthDateInput);
        const currentDate = new Date();
        let years = currentDate.getFullYear() - birthDate.getFullYear();
        let months = currentDate.getMonth() - birthDate.getMonth();
        let days = currentDate.getDate() - birthDate.getDate();

        if (days < 0) {
            months--;
            days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        return { years, months, days };
    };

    const calcDaysLived = (birthDateInput: string): number => {
        const birthDate = new Date(birthDateInput);
        const currentDate = new Date();
        const daysLived = Math.floor((currentDate.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24));
        return daysLived;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const age = calcExactAge(birthDateInput);
        setExactAge(age);
        const days = calcDaysLived(birthDateInput);
        setDaysLived(days);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:
                        <input
                            type="text"
                            id="name"
                            value={name}
                            placeholder="John Doe"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>): void => setName(event.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="birthdate">Enter your birth date:
                        <input
                            type="date"
                            id="birthdate"
                            value={birthDateInput}
                            onChange={handleBirthdateChange}
                        />
                    </label>
                </div>

                <button type="submit">Calculate</button>
                {name && (
                    <div>
                        <label htmlFor="salutation">{name}, you have lived for:</label>
                        <label htmlFor="daysLived"> {daysLived} days!</label>
                        <label>Your exact age is {exactAge.years} years, {exactAge.months} months, and {exactAge.days} days.</label>
                    </div>
                )}

            </form >
        </div >
    );
};

export default Calculator;
