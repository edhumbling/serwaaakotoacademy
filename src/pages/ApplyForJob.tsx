import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  jobType: 'teaching' | 'non-teaching';
  position: string;
  education: string;
  qualification: string;
  experience: string;
  certifications: string;
  resumeLink: string;
  additionalInfo: string;
  agreeToTerms: boolean;
};

const ApplyForJob = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [jobType, setJobType] = useState<'teaching' | 'non-teaching'>('teaching');
  
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm<FormData>({
    defaultValues: {
      jobType: 'teaching',
      agreeToTerms: false,
    }
  });

  const watchJobType = watch('jobType');

  const onSubmit = (data: FormData) => {
    setFormStatus('submitting');
    
    // Prepare WhatsApp message
    const message = `
*New Job Application*
*Name:* ${data.fullName}
*Email:* ${data.email}
*Phone:* ${data.phone}
*Job Type:* ${data.jobType === 'teaching' ? 'Teaching' : 'Non-Teaching'}
*Position:* ${data.position}
*Education:* ${data.education}
*Qualification:* ${data.qualification}
*Experience:* ${data.experience}
*Resume Link:* ${data.resumeLink}
*Additional Info:* ${data.additionalInfo}
    `.trim();
    
    // Encode the message for WhatsApp
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/233547798816?text=${encodedMessage}`, '_blank');
    
    // Set success status and reset form
    setFormStatus('success');
    setTimeout(() => {
      reset();
      setFormStatus('idle');
    }, 3000);
  };

  const teachingPositions = [
    'Kindergarten Teacher',
    'Primary School Teacher',
    'Junior High School Teacher',
    'Subject Teacher - Mathematics',
    'Subject Teacher - Science',
    'Subject Teacher - English',
    'Subject Teacher - Social Studies',
    'Special Education Teacher',
    'Physical Education Teacher',
    'ICT Teacher',
    'Creative Arts Teacher',
    'Religious and Moral Education Teacher',
    'Other'
  ];

  const nonTeachingPositions = [
    'Administrative Assistant',
    'School Secretary',
    'Accountant',
    'Librarian',
    'School Nurse',
    'Guidance Counselor',
    'Security Personnel',
    'Cleaner',
    'Kitchen Staff',
    'Driver',
    'Maintenance Staff',
    'ICT Support',
    'Other'
  ];

  const educationLevels = [
    'High School/SHS',
    'Certificate',
    'Diploma',
    'HND',
    'Bachelor\'s Degree',
    'Post-Graduate Diploma',
    'Master\'s Degree',
    'PhD',
    'Other'
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-4 text-gray-900">Apply for a Job</h1>
            <div className="h-1 w-20 bg-school-seaBlue mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our team at Serwaa Akoto Academy. We're looking for dedicated professionals who are passionate about education and making a difference in students' lives.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-school-seaBlue to-blue-500 p-6 text-white">
              <h2 className="text-xl font-semibold">Job Application Form</h2>
              <p className="text-sm opacity-90 mt-1">
                Please fill out all required fields marked with an asterisk (*).
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-8">
              {/* Job Type Selection */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Position Type</h3>
                <div className="space-y-2">
                  <Label className="text-base font-medium">
                    Select Job Category <span className="text-red-500">*</span>
                  </Label>
                  <RadioGroup 
                    defaultValue="teaching" 
                    className="flex flex-col space-y-1 sm:flex-row sm:space-y-0 sm:space-x-6"
                    onValueChange={(value) => setJobType(value as 'teaching' | 'non-teaching')}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="teaching" id="teaching" {...register('jobType')} />
                      <Label htmlFor="teaching" className="font-normal">Teaching Position</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="non-teaching" id="non-teaching" {...register('jobType')} />
                      <Label htmlFor="non-teaching" className="font-normal">Non-Teaching Position</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="position" className="text-base font-medium">
                    Specific Position <span className="text-red-500">*</span>
                  </Label>
                  <Select {...register('position', { required: 'Please select a position' })}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a position" />
                    </SelectTrigger>
                    <SelectContent>
                      {jobType === 'teaching' ? (
                        teachingPositions.map((position) => (
                          <SelectItem key={position} value={position}>
                            {position}
                          </SelectItem>
                        ))
                      ) : (
                        nonTeachingPositions.map((position) => (
                          <SelectItem key={position} value={position}>
                            {position}
                          </SelectItem>
                        ))
                      )}
                    </SelectContent>
                  </Select>
                  {errors.position && (
                    <p className="text-sm font-medium text-red-500">{errors.position.message}</p>
                  )}
                </div>
              </div>

              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Personal Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-base font-medium">
                      Full Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      placeholder="Enter your full name"
                      {...register('fullName', { required: 'Full name is required' })}
                      className={cn(errors.fullName && "border-red-500")}
                    />
                    {errors.fullName && (
                      <p className="text-sm font-medium text-red-500">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base font-medium">
                      Email Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className={cn(errors.email && "border-red-500")}
                    />
                    {errors.email && (
                      <p className="text-sm font-medium text-red-500">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base font-medium">
                      Phone Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      placeholder="Enter your phone number"
                      {...register('phone', { required: 'Phone number is required' })}
                      className={cn(errors.phone && "border-red-500")}
                    />
                    {errors.phone && (
                      <p className="text-sm font-medium text-red-500">{errors.phone.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-base font-medium">
                      Residential Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="address"
                      placeholder="Enter your address"
                      {...register('address', { required: 'Address is required' })}
                      className={cn(errors.address && "border-red-500")}
                    />
                    {errors.address && (
                      <p className="text-sm font-medium text-red-500">{errors.address.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Educational Background */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Educational Background</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="education" className="text-base font-medium">
                    Highest Level of Education <span className="text-red-500">*</span>
                  </Label>
                  <Select {...register('education', { required: 'Education level is required' })}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select education level" />
                    </SelectTrigger>
                    <SelectContent>
                      {educationLevels.map((level) => (
                        <SelectItem key={level} value={level}>
                          {level}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.education && (
                    <p className="text-sm font-medium text-red-500">{errors.education.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="qualification" className="text-base font-medium">
                    Professional Qualifications <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="qualification"
                    placeholder="List your relevant qualifications, certifications, and licenses"
                    {...register('qualification', { required: 'Qualifications are required' })}
                    className={cn(errors.qualification && "border-red-500")}
                  />
                  {errors.qualification && (
                    <p className="text-sm font-medium text-red-500">{errors.qualification.message}</p>
                  )}
                </div>
              </div>

              {/* Work Experience */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Work Experience</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="experience" className="text-base font-medium">
                    Relevant Work Experience <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="experience"
                    placeholder="Describe your relevant work experience, including roles, responsibilities, and duration"
                    {...register('experience', { required: 'Work experience is required' })}
                    className={cn(errors.experience && "border-red-500")}
                    rows={4}
                  />
                  {errors.experience && (
                    <p className="text-sm font-medium text-red-500">{errors.experience.message}</p>
                  )}
                </div>

                {jobType === 'teaching' && (
                  <div className="space-y-2">
                    <Label htmlFor="certifications" className="text-base font-medium">
                      Teaching Certifications
                    </Label>
                    <Textarea
                      id="certifications"
                      placeholder="List any teaching certifications, licenses, or specialized training"
                      {...register('certifications')}
                      rows={3}
                    />
                  </div>
                )}
              </div>

              {/* Resume Upload */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Resume/CV</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="resumeLink" className="text-base font-medium">
                    Resume/CV Link <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="resumeLink"
                    placeholder="Paste a shareable link to your resume (Google Drive, Dropbox, etc.)"
                    {...register('resumeLink', { 
                      required: 'Resume link is required',
                      pattern: {
                        value: /^(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/,
                        message: 'Please enter a valid URL'
                      }
                    })}
                    className={cn(errors.resumeLink && "border-red-500")}
                  />
                  {errors.resumeLink && (
                    <p className="text-sm font-medium text-red-500">{errors.resumeLink.message}</p>
                  )}
                  <p className="text-sm text-gray-500 mt-1">
                    Please upload your resume to a cloud storage service (Google Drive, Dropbox, OneDrive, etc.) and share the link here.
                    Make sure the link is accessible to anyone with the link.
                  </p>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Additional Information</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="additionalInfo" className="text-base font-medium">
                    Additional Information
                  </Label>
                  <Textarea
                    id="additionalInfo"
                    placeholder="Any additional information you would like to share"
                    {...register('additionalInfo')}
                    rows={3}
                  />
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox 
                    id="agreeToTerms" 
                    {...register('agreeToTerms', { 
                      required: 'You must agree to the terms and conditions' 
                    })} 
                  />
                  <div className="grid gap-1.5 leading-none">
                    <Label
                      htmlFor="agreeToTerms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the terms and conditions <span className="text-red-500">*</span>
                    </Label>
                    <p className="text-sm text-gray-500">
                      By submitting this application, I certify that all information provided is true and complete to the best of my knowledge.
                    </p>
                  </div>
                </div>
                {errors.agreeToTerms && (
                  <p className="text-sm font-medium text-red-500">{errors.agreeToTerms.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-school-seaBlue hover:bg-blue-600 text-white py-2 rounded-md transition-colors"
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? 'Submitting...' : 'Submit Application'}
                </Button>
                
                {formStatus === 'success' && (
                  <div className="mt-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-md">
                    <p className="font-medium">Application submitted successfully!</p>
                    <p className="text-sm mt-1">Your application has been forwarded via WhatsApp. We'll review your application and contact you soon.</p>
                  </div>
                )}
                
                {formStatus === 'error' && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md">
                    <p className="font-medium">Error submitting application</p>
                    <p className="text-sm mt-1">There was a problem submitting your application. Please try again later.</p>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ApplyForJob;
