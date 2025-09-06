import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { Badge } from "./ui/badge";
import { User, Mail, MapPin, Stethoscope, GraduationCap, Building2, CheckCircle } from "lucide-react";
import { LogoOnly } from "./ui/logo";
import axios from 'axios';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function JoinModal({ isOpen, onClose, onSuccess }: JoinModalProps) {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNo: "",
    specialty: ""
  });

  const specialties = [
    "Cardiology", "Neurology", "Orthopedics", "Pediatrics", "Emergency Medicine",
    "Internal Medicine", "Surgery", "Anesthesiology", "Radiology", "Pathology",
    "Psychiatry", "Dermatology", "Ophthalmology", "ENT", "Urology",
    "Gynecology", "Oncology", "Infectious Disease", "Endocrinology", "Other"
  ];

  const experienceLevels = [
    "Medical Student", "Resident (1-3 years)", "Fellow", "Attending (4-10 years)",
    "Senior Physician (11-20 years)", "Department Head", "Chief of Staff", "Emeritus"
  ];

  const countries = [
    "United States", "Canada", "United Kingdom", "Germany", "France", "Australia",
    "India", "Singapore", "Japan", "South Korea", "Brazil", "Mexico", "Other"
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    // Here you would typically send the data to your backend
    console.log("Registration data:", formData);

    // const handleSignUp = async () => {

    //     setIsLoading(true);

    //     try {
    //       const response = await axios.post(
    //     "https://sheetdb.io/api/v1/zoqv5zw293h95",
    //     {
    //       name: formData.name,
    //       email: formData.email,
    //       mobileNo: formData.mobileNo,
    //       speciality: formData.specialty,
    //     });
      
  }

  const isStep1Valid = () => {
    return formData.name && formData.email && formData.mobileNo && formData.specialty;
  };

  const isStep2Valid = () => {
    return formData.specialty && formData.experience && formData.hospital && formData.country;
  };

  const isStep3Valid = () => {
    return formData.agreeTerms && formData.agreePrivacy;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <LogoOnly></LogoOnly>
          </DialogTitle>
          <DialogDescription>
            Connect with medical professionals worldwide and advance your practice
          </DialogDescription>
        </DialogHeader>

        {/* Progress Indicator */}
        {/* <div className="flex items-center justify-between mb-6">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="flex items-center">
              <div className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= num 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {step > num ? <CheckCircle className="h-4 w-4" /> : num}
              </div>
              {num < 4 && (
                <div className={`w-8 h-0.5 ${
                  step > num ? 'bg-green-600' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div> */}

        {/* Step 1: Personal Information */}
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <User className="h-5 w-5 text-green-600" />
              Personal Information
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name"> Name </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Enter Name"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            <div>
              <Label htmlFor="mobileNo">mobileNo Number *</Label>
              <Input
                id="mobileNo"
                value={formData.mobileNo}
                onChange={(e) => handleInputChange("mobileNo", e.target.value)}
                placeholder="Enter mobileNo number"
              />
            </div>

            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Stethoscope className="h-5 w-5 text-green-600" />
              Professional Details
            </h3>

            <div>
              <Label htmlFor="specialty">Medical Specialty *</Label>
              <Select value={formData.specialty} onValueChange={(value) => handleInputChange("specialty", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your specialty" />
                </SelectTrigger>
                <SelectContent>
                  {specialties.map((specialty) => (
                    <SelectItem key={specialty} value={specialty}>
                      {specialty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-end">
              <Button 
                onClick={handleSubmit} 
                disabled={!isStep1Valid()}
                className="bg-green-600 hover:bg-green-700"
              >
                Submit
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Professional Information */}
        {/* {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Stethoscope className="h-5 w-5 text-green-600" />
              Professional Details
            </h3>

            <div>
              <Label htmlFor="specialty">Medical Specialty *</Label>
              <Select value={formData.specialty} onValueChange={(value) => handleInputChange("specialty", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your specialty" />
                </SelectTrigger>
                <SelectContent>
                  {specialties.map((specialty) => (
                    <SelectItem key={specialty} value={specialty}>
                      {specialty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="experience">Experience Level *</Label>
              <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select experience level" />
                </SelectTrigger>
                <SelectContent>
                  {experienceLevels.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="hospital">Hospital/Institution *</Label>
              <Input
                id="hospital"
                value={formData.hospital}
                onChange={(e) => handleInputChange("hospital", e.target.value)}
                placeholder="Enter your hospital or institution"
              />
            </div>

            <div>
              <Label htmlFor="country">Country *</Label>
              <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="licenseNumber">Medical License Number (Optional)</Label>
              <Input
                id="licenseNumber"
                value={formData.licenseNumber}
                onChange={(e) => handleInputChange("licenseNumber", e.target.value)}
                placeholder="Enter license number"
              />
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                Back
              </Button>
              <Button 
                onClick={handleNext} 
                disabled={!isStep2Valid()}
                className="bg-green-600 hover:bg-green-700"
              >
                Next Step
              </Button>
            </div>
          </div>
        )} */}

        {/* Step 3: Terms and Preferences */}
        {/* {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              Terms & Preferences
            </h3>

            <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="agreeTerms"
                  checked={formData.agreeTerms}
                  onCheckedChange={(checked) => handleInputChange("agreeTerms", checked as boolean)}
                />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="agreeTerms" className="text-sm">
                    I agree to the Terms of Service and Code of Conduct *
                  </Label>
                  <p className="text-xs text-gray-600">
                    By checking this, you agree to maintain professional standards and ethical conduct.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="agreePrivacy"
                  checked={formData.agreePrivacy}
                  onCheckedChange={(checked) => handleInputChange("agreePrivacy", checked as boolean)}
                />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="agreePrivacy" className="text-sm">
                    I acknowledge the Privacy Policy and HIPAA compliance *
                  </Label>
                  <p className="text-xs text-gray-600">
                    Your data is protected according to medical privacy standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="subscribeUpdates"
                  checked={formData.subscribeUpdates}
                  onCheckedChange={(checked) => handleInputChange("subscribeUpdates", checked as boolean)}
                />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="subscribeUpdates" className="text-sm">
                    Send me medical updates and platform notifications
                  </Label>
                  <p className="text-xs text-gray-600">
                    Receive important medical news and platform updates (optional).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-blue-100 text-blue-700">HIPAA Compliant</Badge>
                <Badge className="bg-green-100 text-green-700">Secure</Badge>
              </div>
              <p className="text-sm text-gray-700">
                Your information is encrypted and stored securely. We never share personal data without consent.
              </p>
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                Back
              </Button>
              <Button 
                onClick={handleSubmit} 
                disabled={!isStep3Valid()}
                className="bg-green-600 hover:bg-green-700"
              >
                Complete Registration
              </Button>
            </div>
          </div>
        )} */}

        {/* Step 4: Success */}
        {/* {step === 4 && (
          <div className="text-center space-y-4 py-8">
            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Welcome to SphereRx!</h3>
            <p className="text-gray-600">
              Your registration is complete. You'll receive a confirmation email shortly.
            </p>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-green-700">
                🎉 You now have access to 25,000+ medical professionals worldwide!
              </p>
            </div>
          </div>
        )} */}
      </DialogContent>
    </Dialog>
  );
}