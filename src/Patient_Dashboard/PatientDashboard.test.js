import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import PatientDashboard from './PatientDashboard';

describe('PatientDashboard Component', () => {
  const mockPatientData = {
    name: 'Patient Name',
    identifier: 'patient-id',
  };

  const mockVisits = [
    { uuid: 'visit-1', type: 'type-1' },
    { uuid: 'visit-2', type: 'type-2' },
  ];

  it('renders patient details and visit information', async () => {
    render(
      <Router>
        <PatientDashboard patientData={mockPatientData} visits={mockVisits} />
      </Router>
    );

    const patientNameElement = screen.getByTestId('patient-name');
    expect(patientNameElement).toBeInTheDocument();

  });
});
