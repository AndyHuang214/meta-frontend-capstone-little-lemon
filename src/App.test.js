import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For matchers like toHaveBeenCalledWith
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './BookingPage';

test('Renders the BookingForm Date label', () => {
  render(<BookingForm />);
  const linkElement = screen.getByText(/Date/i);
  expect(linkElement).toBeInTheDocument();
});



describe('BookingPage Functions', () => {

  describe('initializeTimes', () => {
    it('should return a default set of times when no date is provided', () => {
      // The expected default times from your component
      const expectedTimes = [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
      ];
      const result = initializeTimes(null); // Pass null or no argument
      expect(result).toEqual(expectedTimes);
    });

    it('should return a specific set of times when a date is provided', () => {
      // The expected times for a specific date from your component
      const expectedTimes = [
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
      ];
      // We can use any date string here, as the current implementation
      // returns the same set of times regardless of the specific date.
      const testDate = '2025-08-14';
      const result = initializeTimes(testDate);
      expect(result).toEqual(expectedTimes);
    });
  });

  describe('updateTimes', () => {
    it('should return the correct new state based on the selected date', () => {
      // Set up a mock state and action to test the reducer
      const initialState = [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
      ];
      const testDate = '2023-10-28';
      const action = { date: testDate };

      // We expect the new state to be the times for a specific date
      const expectedTimes = [
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
      ];

      // Call the reducer function
      const newState = updateTimes(initialState, action);

      // Assert that the new state matches the expected times
      expect(newState).toEqual(expectedTimes);
    });
  });

  it('should log form data to the console when the form is submitted', () => {
    // Mock the console.log function
    const logSpy = jest.spyOn(console, 'log');

    // Mock the props that BookingForm now requires
    const mockAvailableTimes = ['17:00', '18:00'];
    const mockOnDateChanged = jest.fn();

    // Render the component with the required props
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        onDateChanged={mockOnDateChanged}
      />
    );

    // Find the form and simulate submission
    const formElement = screen.getByRole('form');
    fireEvent.submit(formElement);

    // Assert that the log function was called correctly.
    // Note: We check that the FIRST call to console.log matches the expected data.
    // We also correct the expected 'occasion' value.
    expect(logSpy.mock.calls[0][1]).toEqual(
      expect.objectContaining({
        date: '',
        time: '17:00',
        guests: 1,
        occasion: 'Occasion',
        specialRequest: '',
      })
    );

    // It's good practice to restore the original function after the test
    logSpy.mockRestore();
  });
});

