# Pizza Khalo Web App

Pizza Khalo is a web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, allowing users to order pizzas online. The application integrates Stripe as the payment gateway for seamless and secure transactions. Bootstrap is utilized for designing purposes to enhance user experience, and Redux is implemented for state management. Additionally, the web app provides auto-login functionality using cookies for user convenience.

## Features

- **Pizza Ordering**: Users can browse through a variety of pizzas and place orders with customizable toppings and sizes.
- **Stripe Integration**: Secure payment processing is facilitated through the integration of the Stripe payment gateway.
- **Responsive Design**: Bootstrap is employed for responsive and visually appealing design across various devices and screen sizes.
- **State Management**: Redux is utilized for efficient state management, ensuring seamless user interactions.
- **Auto-Login**: Users can enjoy the convenience of auto-login functionality through cookies, enhancing the user experience.

## Installation

To run the Pizza Khalo web app locally, follow these steps:

1. Clone the repository from GitHub:
   ```bash
   git clone https://github.com/your-username/pizza-khalo.git
   ```

2. Navigate to the project directory:
   ```bash
   cd pizza-khalo
   ```

3. Install dependencies for both the client and server:
   ```bash
   cd client
   npm install
   for server
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the `pizza-khalo` directory.
   - Add your MongoDB URI, Stripe API keys, and any other necessary environment variables to the `.env` file.

5. Start the server:
   ```bash
   npm start
   ```

6. Start the client:
   ```bash
   cd ../client
   npm start
   ```

7. Access the web app in your browser at `http://localhost:3000`.

## Usage

- Upon accessing the web app, users can browse through the available pizza options and customize their orders.
- Users can proceed to checkout, where they will be prompted to enter their payment details through the Stripe payment gateway.
- After successful payment processing, users will receive confirmation of their order.
- The auto-login feature ensures that returning users are seamlessly logged in, providing a smooth ordering experience.

## Contributing

Contributions to Pizza Khalo are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push to your branch.
4. Submit a pull request detailing the changes you've made.

## Contact

For any inquiries or feedback regarding Pizza Khalo, feel free to contact us at [singhalsuryansh.0306@gmail.com](mailto:singhalsuryansh.0306@gmail.com).

## Screenshots

Here are some screenshots showcasing the Pizza Khalo web app:

1. **Homepage**: 
   ![Homepage](https://github.com/singhal0306/pizza-khalo/assets/86726484/aa874363-5646-4eb4-ad8a-40d7b762a75a)
)

2. **Cart Page**: 
   ![Pizza Selection](https://github.com/singhal0306/pizza-khalo/assets/86726484/aaf81136-d4bc-4f5c-b4d4-a79af9c99ec9)
)

3. **Checkout Page**: 
   ![Checkout Page](https://github.com/singhal0306/pizza-khalo/assets/86726484/76965d92-08c8-4963-826b-2434f885ddfd)
)

4. **Order Confirmation**: 
   ![Order Confirmation](https://github.com/singhal0306/pizza-khalo/assets/86726484/33723978-bf14-4baa-8df4-ccf21c4aca78)
)

5. **Mobile View**:
   <div style="display:flex; justify-content: space-between;">
       <img src="https://github.com/singhal0306/pizza-khalo/assets/86726484/a75b9c97-ccf2-426d-9d3b-dbd98e6eb831" alt="Mobile View 1" style="flex-basis: 30%;">
       <img src="https://github.com/singhal0306/pizza-khalo/assets/86726484/5d47b6b5-f009-44ca-a456-e7c2c07cd7fd" alt="Mobile View 2" style="flex-basis: 30%;">
       <img src="https://github.com/singhal0306/pizza-khalo/assets/86726484/bc41f992-0b88-4a95-bc8a-7a53e6fde3fb" alt="Mobile View 3" style="flex-basis: 30%;">
   </div>
