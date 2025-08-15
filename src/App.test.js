import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For matchers like toHaveBeenCalledWithq
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './BookingPage';

// Mock the react-router-dom module
// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'), // Use actual for all other exports
//   useNavigate: () => jest.fn(), // Mock useNavigate hook with a mock function
// }));
jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
  Link: ({ to, children }) => <a href={to}>{children}</a>,
  // Add other components you use from the library as needed
}));

// Mock the window.fetchAPI and window.submitAPI functions
window.fetchAPI = jest.fn((date) => ['17:00', '18:00', '19:00']);
window.submitAPI = jest.fn(() => true);

test('Renders the BookingForm Date label', () => {
  render(<BookingForm />);
  const linkElement = screen.getByText(/Date/i);
  expect(linkElement).toBeInTheDocument();
});



describe('BookingPage Functions', () => {

  describe('initializeTimes', () => {

    it('should call fetchAPI and return the result', () => {
      // 1. Define the mock return value for fetchAPI
      const mockTimes = ['17:00', '18:00', '19:00', '20:00'];
      window.fetchAPI.mockReturnValue(mockTimes);

      // 2. Call the function with a specific date
      const date = '2025-08-19';
      const result = initializeTimes(date);

      // 3. Assert that fetchAPI was called with the correct date
      const expectedDate = new Date(2025, 7, 19);
      expect(window.fetchAPI).toHaveBeenCalledWith(expectedDate);

      // 4. Assert that the result from initializeTimes is the mock value
      expect(result).toEqual(mockTimes);
    });

    it('should return the correct new state based on the selected date', () => {
        // Step 1: Set up a predictable mock for the nested function call.
        // We'll use the same mock as in the previous example.
        const mockTimes = ['17:00', '18:00', '19:00'];
        window.fetchAPI.mockReturnValue(mockTimes);

        // Step 2: Define the action to be passed to the reducer.
        const initialState = []; // The initial state doesn't matter for this test.
        const testDate = '2023-10-28';
        const action = { date: testDate };

        // Step 3: Call the reducer function (updateTimes).
        const newState = updateTimes(initialState, action);

        // Step 4: Assert that the nested function was called correctly.
        // The updateTimes reducer will pass a Date object to fetchAPI.
        const expectedDate = new Date(2023, 9, 28); 
        expect(window.fetchAPI).toHaveBeenCalledWith(expectedDate);

        // Step 5: Assert that the new state matches the value returned by the mock.
        expect(newState).toEqual(mockTimes);
    });

    it('should call the submitForm prop with correct data on form submission', () => {
      // 1. Mock the submitForm prop
      const mockSubmitForm = jest.fn();

      // 2. Mock the other required props
      const mockAvailableTimes = ['17:00', '18:00'];
      const mockOnDateChanged = jest.fn();

      // 3. Render the BookingForm component with the mocked props
      render(
        <BookingForm
          availableTimes={mockAvailableTimes}
          onDateChanged={mockOnDateChanged}
          submitForm={mockSubmitForm} // Pass the mock function to the component
        />
      );

      // 4. Find the form and trigger a submit event
      const formElement = screen.getByRole('form');
      fireEvent.submit(formElement);

      // 5. Assert that the submitForm mock function was called
      expect(mockSubmitForm).toHaveBeenCalledTimes(1);

      // 6. Assert that the submitForm mock function was called with the expected form data
      expect(mockSubmitForm).toHaveBeenCalledWith({
        date: '',
        time: '17:00',
        guests: 1,
        occasion: 'Occasion',
        specialRequest: '',
      });
    });

  });
});

