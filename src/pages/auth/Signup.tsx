import { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { PasswordInput } from '../../components/ui/password-input';
import { PasswordRequirementDisplay } from '../../components/ui/password-requirement-display';
import { supabase } from '@/lib/supabase';

export function Signup() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    orgName: '',
    orgType: 'school',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    country: '',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    password: '',
    confirmPassword: ''
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const [requirements, setRequirements] = useState({
    minLength: false,
    hasNumber: false,
    hasSpecialChar: false
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const validatePassword = (password: string) => {
    setRequirements({
      minLength: password.length >= 8,
      hasNumber: /\d/.test(password),
      hasSpecialChar: /[!@#$%^&*]/.test(password)
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
            org_id: ''
          }
        }
      })

      if (error) throw error

      // Continue with Edge Function call if needed
    } catch (err) {
      setError(err.message || 'Signup failed. Please try again.')
    } finally {
      setLoading(false)
    }
  };

  return (
    <div ref={heroRef} className="relative min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 dark:from-blue-950 dark:via-blue-900 dark:to-indigo-950 overflow-hidden">
      {/* 3D Interactive Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Primary large orb - follows mouse */}
        <div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-400/20 to-blue-500/15 blur-[120px] transition-all duration-700 ease-out"
          style={{
            top: '20%',
            left: `${30 + (mousePosition.x / 25)}%`,
            transform: `translate(-50%, -50%) scale(${1 + (mousePosition.x + mousePosition.y) / 2500})`,
          }}
        ></div>

        {/* Secondary orb - opposite movement */}
        <div
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-indigo-400/15 to-purple-500/10 blur-[100px] transition-all duration-500 ease-out"
          style={{
            bottom: '30%',
            right: `${20 - (mousePosition.x / 35)}%`,
            transform: `translate(50%, 50%) scale(${0.8 + (mousePosition.y / 2000)})`,
          }}
        ></div>

        {/* Floating geometric shapes */}
        <div
          className="absolute w-24 h-24 border border-blue-400/30 rounded-full transition-all duration-1000 ease-out"
          style={{
            top: `${40 + (mousePosition.y / 50)}%`,
            left: `${15 + (mousePosition.x / 70)}%`,
            transform: `scale(${1 + (mousePosition.x + mousePosition.y) / 3500})`,
          }}
        ></div>

        <div
          className="absolute w-32 h-32 border border-indigo-400/20 rotate-45 transition-all duration-800 ease-out"
          style={{
            top: `${70 + (mousePosition.x / 60)}%`,
            right: `${25 + (mousePosition.y / 55)}%`,
            transform: `rotate(${45 + (mousePosition.x / 12)}deg) scale(${0.9 + (mousePosition.y / 2200)})`,
          }}
        ></div>

        {/* Additional floating particles */}
        <div
          className="absolute w-12 h-12 bg-blue-400/20 rounded-full blur-sm transition-all duration-600 ease-out"
          style={{
            top: `${50 + (mousePosition.x / 90)}%`,
            left: `${75 + (mousePosition.y / 80)}%`,
          }}
        ></div>

        <div
          className="absolute w-16 h-16 bg-indigo-400/15 rounded-full blur-sm transition-all duration-900 ease-out"
          style={{
            bottom: `${40 + (mousePosition.y / 70)}%`,
            left: `${50 + (mousePosition.x / 100)}%`,
          }}
        ></div>
      </div>

      <div className="flex items-center justify-center min-h-screen relative z-10 px-4 py-8">
        <Card className="w-full max-w-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50 shadow-2xl">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <CardTitle className="text-2xl text-gray-900 dark:text-white">Create an account</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-300">Enter your information to create an account</CardDescription>
          </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {/* Location Lock Message */}
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <h3 className="text-sm font-semibold text-yellow-800 dark:text-yellow-200">System Locked</h3>
              </div>
              <p className="mt-2 text-sm text-yellow-700 dark:text-yellow-300">
                The TI-BOT system is currently locked for your location. Please contact Octa Node Engineering for access.
              </p>
            </div>

            {error && (
              <div className="p-3 text-sm text-red-700 bg-red-100 rounded-md">
                {error}
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="orgName">Organization Name</Label>
              <Input
                id="orgName"
                value={formData.orgName}
                onChange={(e) => setFormData({...formData, orgName: e.target.value})}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="orgType">Organization Type</Label>
              <Select
                value={formData.orgType}
                onValueChange={(value) => setFormData({...formData, orgType: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="school">School</SelectItem>
                  <SelectItem value="university">University</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <h2>Admin User Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <PasswordInput
              id="password"
              label="Password"
              value={formData.password}
              onChange={(e) => {
                setFormData({...formData, password: e.target.value});
                validatePassword(e.target.value);
              }}
              required
            />
            <PasswordRequirementDisplay requirements={requirements} />

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full" disabled={true}>
              System Locked - Contact Support
            </Button>
            <div className="text-sm text-center text-gray-500">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-primary hover:underline">
                Sign in
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
      </div>
    </div>
  );
}

export default Signup;
