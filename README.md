# Next Store App

Next Store App is a sample e-commerce application built with modern web technologies, showcasing features like server-side rendering (SSR), state management, and a responsive UI.

## Features

- **Next.js**: Framework for server-side rendering and static site generation.
- **React Query**: For efficient data fetching and caching.
- **Redux Toolkit**: State management with a focus on simplicity and performance.
- **Redux Persist**: Persists Redux store in localStorage for state persistence.
- **ShadCN/UI**: Pre-built UI components for a consistent design system.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **TypeScript**: Strongly typed JavaScript for better developer experience.
- **FakeStore API**: Used as the backend for fetching product data.
- **Dark and Light Theme**: Supports theme toggling for better user experience.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/next-store-app.git
   cd next-store-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Configure environment variables:
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Update the `API_URL` variable in the `.env` file with the appropriate backend URL.

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Scripts

- `dev`: Starts the development server with Turbopack.
- `build`: Builds the application for production.
- `start`: Starts the production server.
- `lint`: Runs ESLint to check for code quality issues.

## Technologies Used

- **Next.js**: For building the application.
- **React**: For building UI components.
- **React Query**: For managing server state.
- **Redux Toolkit**: For managing global state.
- **Tailwind CSS**: For styling.
- **ShadCN/UI**: For pre-built UI components.
- **TypeScript**: For type safety.
- **Axios**: For making HTTP requests.
- **Radix UI**: For accessible UI primitives.
- **Zod**: For schema validation.

## Project Structure

The project follows a modular structure:

- `src/app`: Contains the main application pages.
- `src/components`: Reusable UI components.
- `src/lib`: Utility functions and API integrations.
- `src/store`: Redux store and slices.
- `src/config`: Application constants and configuration.
- `src/types`: TypeScript type definitions.

## API Integration

The app uses the [FakeStore API](https://fakestoreapi.com/) to fetch product data. The API is integrated using Axios and React Query for efficient data fetching and caching.

## Deployment

The app is already deployed on [Vercel](https://vercel.com/) and can be accessed at the following URL:

[https://next-store-app-ashen.vercel.app/](https://next-store-app-ashen.vercel.app/)

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License.
