# Skill Swap Platform

A comprehensive platform that enables users to list their skills and request others in return. Built with React, Node.js, TypeScript, and SQLite.

## Features

### User Features
- **Profile Management**: Create and edit profiles with name, location, profile photo, and availability
- **Skill Management**: List skills offered and skills wanted
- **Privacy Controls**: Make profiles public or private
- **Search & Browse**: Find users by skills
- **Swap System**: Request, accept, reject, and cancel skill swaps
- **Rating System**: Provide feedback after completed swaps
- **Real-time Updates**: Live notifications for swap requests and updates

### Admin Features
- **Content Moderation**: Reject inappropriate skill descriptions
- **User Management**: Ban users who violate policies
- **Swap Monitoring**: Track pending, accepted, and cancelled swaps
- **Platform Messaging**: Send announcements and updates
- **Analytics**: Download user activity and swap statistics reports

## Tech Stack

### Frontend
- React 18 with TypeScript
- Tailwind CSS for styling
- React Router for navigation
- Socket.io-client for real-time features
- React Hook Form for form handling
- React Query for data fetching

### Backend
- Node.js with Express
- TypeScript
- SQLite database (easily migratable to PostgreSQL/MySQL)
- JWT authentication
- Socket.io for real-time communication
- Multer for file uploads
- Joi for input validation

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd skill-swap-platform
   ```

2. **Install all dependencies**
   ```bash
   npm run install-all
   ```

3. **Set up environment variables**
   ```bash
   cp server/.env.example server/.env
   # Edit server/.env with your configuration
   ```

4. **Start the development servers**
   ```bash
   npm run dev
   ```

This will start:
- Backend server on `http://localhost:5000`
- Frontend development server on `http://localhost:3000`

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
skill-swap-platform/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── services/      # API services
│   │   ├── types/         # TypeScript type definitions
│   │   └── utils/         # Utility functions
│   └── package.json
├── server/                 # Node.js backend
│   ├── src/
│   │   ├── controllers/   # Route controllers
│   │   ├── middleware/    # Custom middleware
│   │   ├── models/        # Database models
│   │   ├── routes/        # API routes
│   │   ├── services/      # Business logic
│   │   ├── types/         # TypeScript types
│   │   └── utils/         # Utility functions
│   ├── database/          # Database files and migrations
│   └── package.json
├── package.json
└── README.md
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Users
- `GET /api/users` - Get all users (with filters)
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile
- `DELETE /api/users/:id` - Delete user (admin only)

### Skills
- `GET /api/skills` - Get all skills
- `POST /api/skills` - Add skill to user profile
- `DELETE /api/skills/:id` - Remove skill from profile

### Swaps
- `GET /api/swaps` - Get user's swaps
- `POST /api/swaps` - Create swap request
- `PUT /api/swaps/:id` - Update swap status
- `DELETE /api/swaps/:id` - Cancel swap request

### Admin
- `GET /api/admin/users` - Get all users (admin)
- `PUT /api/admin/users/:id/ban` - Ban user
- `GET /api/admin/reports` - Get platform reports
- `POST /api/admin/announcements` - Send platform announcement

## Database Schema

### Users
- id, email, password, name, location, profile_photo, availability, is_public, role, created_at, updated_at

### Skills
- id, user_id, name, description, category, is_offered, created_at

### Swaps
- id, requester_id, provider_id, skill_id, status, message, created_at, updated_at

### Ratings
- id, swap_id, rater_id, rated_id, rating, comment, created_at

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Demo Video

A 5-7 minute demo video will be created showcasing the platform's features and user experience. 