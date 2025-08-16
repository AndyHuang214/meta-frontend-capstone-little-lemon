import { fireEvent, render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './BookingPage';

// Mock the react-router-dom module
jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
  Link: ({ to, children }) => <a href={to}>{children}</a>,
}));

// Mock the window.fetchAPI and window.submitAPI functions
window.fetchAPI = jest.fn((date) => ['17:00', '18:00', '19:00']);
window.submitAPI = jest.fn(() => true);

// Define mock values that can be reused across tests
const mockInitialValues = {
  date: '',
  time: '17:00',
  guests: 1,
  occasion: 'Select One',
  specialRequest: '',
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
};
const mockSubmitForm = jest.fn();

describe('BookingForm Element Attributes', () => {

  // Test for the Date input element attributes
  test('Date input should have correct attributes', () => {
    render(<BookingForm initialValues={mockInitialValues} submitForm={mockSubmitForm} />);
    const dateInput = screen.getByLabelText('Date');
    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute('id', 'date');
    expect(dateInput).toHaveAttribute('type', 'date');
  });

  // Test for the Time select element attributes
  test('Time select should have correct attributes', () => {
    render(<BookingForm initialValues={mockInitialValues} availableTimes={['17:00']} submitForm={mockSubmitForm} />);
    const timeSelect = screen.getByLabelText('Time');
    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect).toHaveAttribute('id', 'time');
    expect(timeSelect).toHaveAttribute('aria-haspopup', 'listbox');
  });

  // Test for the Guests input element attributes
  test('Guests input should have correct attributes', () => {
    render(<BookingForm initialValues={mockInitialValues} submitForm={mockSubmitForm} />);
    const guestsInput = screen.getByLabelText('Number of guests');
    expect(guestsInput).toBeInTheDocument();
    expect(guestsInput).toHaveAttribute('id', 'guests');
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('placeholder', '1');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
  });

  // Test for the Occasion select element attributes
  test('Occasion select should have correct attributes', () => {
    render(<BookingForm initialValues={mockInitialValues} submitForm={mockSubmitForm} />);
    const occasionSelect = screen.getByLabelText('Occasion');
    expect(occasionSelect).toBeInTheDocument();
    expect(occasionSelect).toHaveAttribute('id', 'occasion');
    expect(occasionSelect).toHaveAttribute('aria-haspopup', 'listbox');
  });

  // Test for the Special Requests textarea element attributes
  test('Special Requests textarea should have correct attributes', () => {
    render(<BookingForm initialValues={mockInitialValues} submitForm={mockSubmitForm} />);
    const specialRequestTextarea = screen.getByLabelText('Special Requests');
    expect(specialRequestTextarea).toBeInTheDocument();
    expect(specialRequestTextarea).toHaveAttribute('id', 'specialRequest');
    expect(specialRequestTextarea).toHaveAttribute('placeholder', "e.g., 'Please ensure a high chair is available for our party.'");
  });

  // Test for the submit button attributes
  test('Submit button should have correct attributes', () => {
    render(<BookingForm initialValues={mockInitialValues} submitForm={mockSubmitForm} />);
    const submitButton = screen.getByRole('button', { name: 'Make your reservation' });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute('type', 'submit');
    expect(submitButton).toHaveAttribute('aria-label', 'Make your reservation');
  });
});

describe('BookingPage Functions', () => {

  describe('initializeTimes', () => {

    it('should call fetchAPI and return the result', () => {
      const mockTimes = ['17:00', '18:00', '19:00', '20:00'];
      window.fetchAPI.mockReturnValue(mockTimes);

      const date = '2025-08-19';
      const result = initializeTimes(date);

      const expectedDate = new Date(2025, 7, 19);
      expect(window.fetchAPI).toHaveBeenCalledWith(expectedDate);

      expect(result).toEqual(mockTimes);
    });

    it('should return the correct new state based on the selected date', () => {
      const mockTimes = ['17:00', '18:00', '19:00'];
      window.fetchAPI.mockReturnValue(mockTimes);

      const initialState = [];
      const testDate = '2023-10-28';
      const action = { date: testDate };

      const newState = updateTimes(initialState, action);

      const expectedDate = new Date(2023, 9, 28);
      expect(window.fetchAPI).toHaveBeenCalledWith(expectedDate);

      expect(newState).toEqual(mockTimes);
    });

    it('should call the submitForm prop with correct data on form submission', async () => {
      // Mock the submitForm prop, which represents the function that handles submission logic
      const mockSubmitForm = jest.fn();

      // Define mock values that simulate the state passed from the parent component
      const mockInitialValues = {
        date: '2025-08-22',
        time: '17:00',
        guests: 1,
        occasion: 'Birthday',
        specialRequest: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
      };

      const mockAvailableTimes = ['17:00', '18:00'];
      const mockOnDateChanged = jest.fn();

      // Render the BookingForm component with all the necessary props
      render(
        <BookingForm
          initialValues={mockInitialValues}
          availableTimes={mockAvailableTimes}
          onDateChanged={mockOnDateChanged}
          submitForm={mockSubmitForm}
        />
      );

      // Find the form and trigger a submit event, wrapped in `act`
      const formElement = screen.getByRole('form');
      await act(async () => {
        fireEvent.submit(formElement);
      });

      // Assert that the submitForm mock function was called
      expect(mockSubmitForm).toHaveBeenCalledTimes(1);

      // Assert that the submitForm mock function was called with the expected form data
      expect(mockSubmitForm).toHaveBeenCalledWith({
        date: '2025-08-22',
        time: '17:00',
        guests: 1,
        occasion: 'Birthday',
        specialRequest: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
      });
    });
  });
});
