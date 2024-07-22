import React, { useState } from "react";

/**
 * Component for calculating the number of days lived and exact age
 * based on the user's birthdate input.
 */

const Calculator: React.FC = () => {
    // Multiple states for storing user data and calculation results
    const [name, setName] = useState("");
    const [birthDateInput, setBirthdate] = useState<string>("");
    const [daysLived, setDaysLived] = useState<number>();
    const [exactAge, setExactAge] = useState<{
        years: number;
        months: number;
        days: number;
    }>({ years: 0, months: 0, days: 0 });

    /**
     * Handles the change event of the input field for birthdate.
     * @param e - the change event of the input field as a string
     */
    const handleBirthdateChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setBirthdate(e.target.value);
    };

    /**
     * Calculates the exact age of the user based on the birthdate input.
     * @param birthDateInput - the birthdate input as a string
     * @returns An object containing the exact age of the user in years, months, and days.
     */
    const calcExactAge = (
        birthDateInput: string
    ): { years: number; months: number; days: number } => {
        const birthDate = new Date(birthDateInput);
        const currentDate = new Date();
        let years = currentDate.getFullYear() - birthDate.getFullYear();
        let months = currentDate.getMonth() - birthDate.getMonth();
        let days = currentDate.getDate() - birthDate.getDate();

        // Adjust the age if the current month is less than the birth month
        if (days < 0) {
            months--;
            days += new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                0
            ).getDate();
        }

        // Adjust the age if the current year is less than the birth year
        if (months < 0) {
            years--;
            months += 12;
        }

        return { years, months, days };
    };

    /**
     * Calculates the number of days lived by the user based on the birthdate input.
     * @param birthDateInput - the birthdate input as a string
     * @returns An integer representing the number of days lived by the user.
     */
    const calcDaysLived = (birthDateInput: string): number => {
        const birthDate = new Date(birthDateInput);
        const currentDate = new Date();
        const daysLived = Math.floor(
            (currentDate.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24)
        );
        return daysLived;
    };

    /**
     * Handles the form submission event and calculates the exact age and number of days lived by the user.
     * @param e - the form submission event
     */
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const age = calcExactAge(birthDateInput);
        setExactAge(age);
        const days = calcDaysLived(birthDateInput);
        setDaysLived(days);
    };

    // Render the form
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">
                        Name:
                        <input
                            type="text"
                            id="name"
                            value={name}
                            placeholder="John Doe"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                                setName(event.target.value)
                            }
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="birthdate">
                        Enter your birth date:
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
                        <label>
                            Your exact age is {exactAge.years} years, {exactAge.months}{" "}
                            months, and {exactAge.days} days.
                        </label>
                    </div>
                )}
            </form>
        </div>
    );
};

export default Calculator;
