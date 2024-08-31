# Currency Converter and Chart Visualization

Welcome to the Currency Converter and Chart Visualization project! This project includes a currency converter tool and a chart visualization for tracking exchange rates. It is organized into three main pages:

1. **Home Page**: Introduction and navigation.
2. **Currency Converter**: A tool to convert amounts between different currencies.
3. **Chart Diagram**: Visual representation of exchange rates using various chart types.

## Project Structure

- **`index.html`**: Home page with basic navigation and social media links.
- **`converter.html`**: Currency converter page with functionality for converting amounts between selected currencies.
- **`diagram.html`**: Page displaying a chart of exchange rates with different chart types.

### HTML Files

#### `index.html`

- Displays a welcome message and navigation links.
- Includes social media icons in the footer.

#### `converter.html`

- Contains a form with two currency selection dropdowns and input fields for conversion.
- Includes buttons for converting currency and viewing conversion history.

#### `diagram.html`

- Displays a chart with options for different chart types (Bar, Line, Doughnut, PolarArea, Radar).
- Uses Chart.js for rendering charts.

### JavaScript Files

#### `Converter.js`

- Fetches currency data from the [Frankfurter API](https://www.frankfurter.app/).
- Provides functionality to convert amounts between selected currencies.
- Saves conversion history to local storage and displays it when requested.

#### `diagram.js`

- Initializes and updates charts based on user selection.
- Uses Chart.js to render charts on the `diagram.html` page.

### CSS Files

- **`Converter_Home.css`**: Styles for the home page.
- **`converter.css`**: Styles for the currency converter page.
- **`diagram.css`**: Styles for the chart diagram page.

## Installation

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/NGHANYISALAMATOUWOUYUEKE/Currency-Converter.git
    ```

2. **Navigate to the Project Directory**:

    ```bash
    cd Currency-Converter
    ```

3. **Open the Project**:
   - Open `index.html` in your web browser to view the home page.
   - Open `converter.html` to use the currency converter.
   - Open `diagram.html` to view and interact with the charts.

## Usage

1. **Currency Converter**:
   - Select currencies from the dropdown menus.
   - Enter the amount to convert.
   - Click "Convert" to see the result.
   - Click "History" to view past conversions.

2. **Chart Visualization**:
   - Select the desired chart type from the buttons.
   - The chart will update to display the selected type.

## Contributing

If you wish to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Open a pull request to merge your changes into the main repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Frankfurter API](https://www.frankfurter.app/) for providing currency exchange rate data.
- [Chart.js](https://www.chartjs.org/) for the charting library used.

For any issues or questions, please contact [your-email@example.com](mailto:your-email@example.com).

