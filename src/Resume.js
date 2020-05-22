import React from 'react';
import { Button } from 'react-bootstrap';
import './Resume.css';

function Resume() {
    return (
        <div className="Resumes" id="resume">
            <div className="text-center mt-3">
                <h1 className="display-3">
                    Resume and Contact
                </h1>
                <div className="mb-2">
                    <a href="resume.pdf" rel="noopener noreferrer" target="_blank"><Button variant="primary" size="lg">
                        Résumé
                    </Button>{' '}</a>
                    <a href="mailto:shikhar@tamu.edu"><Button variant="secondary" size="lg">
                        Email
                    </Button></a>

                </div>
            </div>
        </div>
    );
}

export default Resume;
