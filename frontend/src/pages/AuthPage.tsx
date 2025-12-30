import React, { useState } from 'react';
import { 
  Mail, 
  Lock, 
  User, 
  Eye, 
  EyeOff, 
  Chrome, 
  Github, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Separator } from "../components/ui/separator";

export default function AuthPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Simulate loading state for UX
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-950 relative overflow-hidden selection:bg-violet-500/30">
      
      {/* Background Ambience (Anime Aesthetic) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-violet-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-fuchsia-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[20%] w-[20%] h-[20%] bg-indigo-500/10 rounded-full blur-[80px]" />
      </div>

      {/* Main Card */}
      <Card className="w-full max-w-md mx-4 border-slate-800 bg-slate-900/60 backdrop-blur-xl shadow-2xl z-10">
        <CardHeader className="text-center space-y-2">
          <div className="mx-auto bg-gradient-to-tr from-violet-600 to-fuchsia-600 p-3 rounded-xl w-fit shadow-lg shadow-violet-500/20">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight text-white">
            AniKeep
          </CardTitle>
          <CardDescription className="text-slate-400">
            Your gateway to the anime multiverse
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6 bg-slate-950/50">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Join Guild</TabsTrigger>
            </TabsList>

            {/* LOGIN FORM */}
            <TabsContent value="login">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email-login" className="text-slate-300">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                    <Input 
                      id="email-login" 
                      placeholder="senpai@example.com" 
                      className="pl-9 bg-slate-950/50 border-slate-800 focus-visible:ring-violet-500 text-slate-100 placeholder:text-slate-600"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password-login" className="text-slate-300">Password</Label>
                    <a href="#" className="text-xs text-violet-400 hover:text-violet-300 hover:underline">
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                    <Input 
                      id="password-login" 
                      type={showPassword ? "text" : "password"} 
                      className="pl-9 pr-9 bg-slate-950/50 border-slate-800 focus-visible:ring-violet-500 text-slate-100"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-slate-500 hover:text-slate-300 transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <Button 
                  disabled={isLoading} 
                  className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-semibold shadow-lg shadow-violet-900/20 transition-all duration-300"
                >
                  {isLoading ? "Syncing..." : "Enter World"}
                  {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </form>
            </TabsContent>

            {/* REGISTER FORM */}
            <TabsContent value="register">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-slate-300">Username</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                    <Input 
                      id="username" 
                      placeholder="OtakuKing99" 
                      className="pl-9 bg-slate-950/50 border-slate-800 focus-visible:ring-violet-500 text-slate-100 placeholder:text-slate-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email-register" className="text-slate-300">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                    <Input 
                      id="email-register" 
                      placeholder="name@domain.com" 
                      className="pl-9 bg-slate-950/50 border-slate-800 focus-visible:ring-violet-500 text-slate-100 placeholder:text-slate-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password-register" className="text-slate-300">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                    <Input 
                      id="password-register" 
                      type={showPassword ? "text" : "password"} 
                      className="pl-9 pr-9 bg-slate-950/50 border-slate-800 focus-visible:ring-violet-500 text-slate-100"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-slate-500 hover:text-slate-300 transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  <p className="text-[10px] text-slate-500">
                    Must be at least 8 characters long
                  </p>
                </div>

                <Button 
                  disabled={isLoading} 
                  className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-semibold shadow-lg shadow-violet-900/20"
                >
                  {isLoading ? "Creating..." : "Start Adventure"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        
        <CardFooter className="flex flex-col gap-4">
          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full bg-slate-800" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-slate-900 px-2 text-slate-500">
                Or continue with
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 w-full">
            <Button variant="outline" className="border-slate-800 bg-slate-950/50 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors">
              <Github className="mr-2 h-4 w-4" />
              Github
            </Button>
            <Button variant="outline" className="border-slate-800 bg-slate-950/50 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors">
              <Chrome className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}