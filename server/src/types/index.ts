// NOTE: The import below will error until you run npm install in the server directory.
import { Request } from 'express';

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  location?: string;
  profile_photo?: string;
  availability?: string;
  is_public: boolean;
  role: 'user' | 'admin';
  is_banned: boolean;
  created_at: string;
  updated_at: string;
}

export interface Skill {
  id: string;
  user_id: string;
  name: string;
  description?: string;
  category: string;
  is_offered: boolean;
  created_at: string;
}

export interface Swap {
  id: string;
  requester_id: string;
  provider_id: string;
  skill_id: string;
  status: 'pending' | 'accepted' | 'rejected' | 'cancelled' | 'completed';
  message?: string;
  created_at: string;
  updated_at: string;
}

export interface Rating {
  id: string;
  swap_id: string;
  rater_id: string;
  rated_id: string;
  rating: number;
  comment?: string;
  created_at: string;
}

export interface UserProfile extends Omit<User, 'password'> {
  skills_offered: Skill[];
  skills_wanted: Skill[];
  rating_average: number;
  rating_count: number;
}

export interface SwapWithDetails extends Swap {
  requester: UserProfile;
  provider: UserProfile;
  skill: Skill;
}

export interface AuthRequest extends Request {
  user?: User;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
  location?: string;
}

export interface UpdateProfileRequest {
  name?: string;
  location?: string;
  availability?: string;
  is_public?: boolean;
}

export interface CreateSkillRequest {
  name: string;
  description?: string;
  category: string;
  is_offered: boolean;
}

export interface CreateSwapRequest {
  provider_id: string;
  skill_id: string;
  message?: string;
}

export interface UpdateSwapRequest {
  status: 'accepted' | 'rejected' | 'cancelled' | 'completed';
}

export interface CreateRatingRequest {
  swap_id: string;
  rated_id: string;
  rating: number;
  comment?: string;
}

export interface SearchFilters {
  skill?: string;
  category?: string;
  location?: string;
  availability?: string;
}

export interface AdminStats {
  total_users: number;
  total_swaps: number;
  pending_swaps: number;
  completed_swaps: number;
  average_rating: number;
}

export interface PlatformAnnouncement {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error';
  created_at: string;
}

// Socket.io event types
export interface SocketEvents {
  'swap_request': {
    swap: SwapWithDetails;
  };
  'swap_update': {
    swap: SwapWithDetails;
  };
  'new_message': {
    message: string;
    from: string;
  };
  'announcement': {
    announcement: PlatformAnnouncement;
  };
} 