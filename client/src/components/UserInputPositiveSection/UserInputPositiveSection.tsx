import { useState } from "react";
import IUserInputPositiveSection from "./Interface/IUserInputPositiveSection";
import "./UserInputPositiveSection.css";

const UserInputPositiveSection = (): React.ReactElement => {
    return (
        <div className="happy-section">
            <h2 className="happy-section__header">
                What Made You Happy Today?
            </h2>

            <div className="mood-section-card">
            </div>

            <div className="mood-section-card">
            </div>
            <textarea className="happy-section__input" />
        </div>
    )
}

export default UserInputPositiveSection;
