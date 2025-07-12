// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { AuthProvider } from './contexts/AuthContext';
// import { SocketProvider } from '/contexts/SocketContext';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Profile from './pages/Profile';
// import Skills from './pages/Skills';
// import SwapRequests from './pages/SwapRequests';
// import AdminDashboard from './pages/AdminDashboard';
// import ProtectedRoute from './components/ProtectedRoute';
// import AdminRoute from './components/AdminRoute';

// const queryClient = new QueryClient();

// function App() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <AuthProvider>
//         <SocketProvider>
//           <Router>
//             <div className="min-h-screen bg-gray-50">
//               <Navbar />
//               <main className="container mx-auto px-4 py-8">
//                 <Routes>
//                   <Route path="/" element={<Home />} />
//                   <Route path="/login" element={<Login />} />
//                   <Route path="/register" element={<Register />} />
//                   <Route 
//                     path="/profile" 
//                     element={
//                       <ProtectedRoute>
//                         <Profile />
//                       </ProtectedRoute>
//                     } 
//                   />
//                   <Route 
//                     path="/skills" 
//                     element={
//                       <ProtectedRoute>
//                         <Skills />
//                       </ProtectedRoute>
//                     } 
//                   />
//                   <Route 
//                     path="/swap-requests" 
//                     element={
//                       <ProtectedRoute>
//                         <SwapRequests />
//                       </ProtectedRoute>
//                     } 
//                   />
//                   <Route 
//                     path="/admin" 
//                     element={
//                       <AdminRoute>
//                         <AdminDashboard />
//                       </AdminRoute>
//                     } 
//                   />
//                 </Routes>
//               </main>
//             </div>
//           </Router>
//         </SocketProvider>
//       </AuthProvider>
//     </QueryClientProvider>
//   );
// }

// export default App; 