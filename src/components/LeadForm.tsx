import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { toast } from 'sonner@2.0.3';
import { Loader2, Send, CheckCircle2 } from 'lucide-react';

interface LeadFormProps {
  title?: string;
  subtitle?: string;
  source?: string;
}

export function LeadForm({ 
  title = "Request a Consultation", 
  subtitle = "Fill out the form below and our team will get back to you within 24 hours.",
  source = "general"
}: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    interest: '',
    message: '',
    consent: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.interest) {
      newErrors.interest = 'Please select your area of interest';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must agree to the privacy policy';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', { ...formData, source });
      
      setIsSuccess(true);
      toast.success('Thank you! We\'ll contact you within 24 hours.');
      
      // Reset form
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          industry: '',
          interest: '',
          message: '',
          consent: false
        });
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-8 text-center">
        <CheckCircle2 className="w-16 h-16 text-green-600 dark:text-green-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-2">
          Thank You!
        </h3>
        <p className="text-green-700 dark:text-green-300">
          Your request has been received. We'll contact you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 p-6">
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm">
          {subtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Name */}
        <div>
          <Label htmlFor="lead-name" className={errors.name ? 'text-red-600' : ''}>
            Full Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="lead-name"
            type="text"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="John Doe"
            className={`mt-1 ${errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            required
          />
          {errors.name && (
            <p id="name-error" className="text-red-600 text-sm mt-1" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <Label htmlFor="lead-email" className={errors.email ? 'text-red-600' : ''}>
            Email Address <span className="text-red-500">*</span>
          </Label>
          <Input
            id="lead-email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="john@company.com"
            className={`mt-1 ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            required
          />
          {errors.email && (
            <p id="email-error" className="text-red-600 text-sm mt-1" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <Label htmlFor="lead-phone" className={errors.phone ? 'text-red-600' : ''}>
            Phone Number <span className="text-red-500">*</span>
          </Label>
          <Input
            id="lead-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="+91 98765 43210"
            className={`mt-1 ${errors.phone ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            required
          />
          {errors.phone && (
            <p id="phone-error" className="text-red-600 text-sm mt-1" role="alert">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Company */}
        <div>
          <Label htmlFor="lead-company">Company Name</Label>
          <Input
            id="lead-company"
            type="text"
            value={formData.company}
            onChange={(e) => handleChange('company', e.target.value)}
            placeholder="Your Company"
            className="mt-1"
          />
        </div>

        {/* Industry */}
        <div>
          <Label htmlFor="lead-industry">Industry</Label>
          <Input
            id="lead-industry"
            type="text"
            value={formData.industry}
            onChange={(e) => handleChange('industry', e.target.value)}
            placeholder="e.g., Manufacturing, Healthcare"
            className="mt-1"
          />
        </div>

        {/* Interest */}
        <div>
          <Label htmlFor="lead-interest" className={errors.interest ? 'text-red-600' : ''}>
            Area of Interest <span className="text-red-500">*</span>
          </Label>
          <Select 
            value={formData.interest} 
            onValueChange={(value) => handleChange('interest', value)}
          >
            <SelectTrigger 
              id="lead-interest"
              className={`mt-1 ${errors.interest ? 'border-red-500 focus:ring-red-500' : ''}`}
              aria-invalid={!!errors.interest}
              aria-describedby={errors.interest ? 'interest-error' : undefined}
            >
              <SelectValue placeholder="Select a solution" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="auto-people-counting">Auto People Counting</SelectItem>
              <SelectItem value="pump-guru">PumpGuru IoT Solutions</SelectItem>
              <SelectItem value="security-systems">Security & Smart Systems</SelectItem>
              <SelectItem value="industry-automation">Industrial Automation</SelectItem>
              <SelectItem value="iot-ai">IoT & AI Solutions</SelectItem>
              <SelectItem value="blockchain">Blockchain Integration</SelectItem>
              <SelectItem value="oem-partnership">OEM Partnership</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.interest && (
            <p id="interest-error" className="text-red-600 text-sm mt-1" role="alert">
              {errors.interest}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <Label htmlFor="lead-message">Message</Label>
          <Textarea
            id="lead-message"
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            placeholder="Tell us about your project requirements..."
            className="mt-1 min-h-[100px]"
          />
        </div>

        {/* Consent */}
        <div className="flex items-start gap-2">
          <Checkbox
            id="lead-consent"
            checked={formData.consent}
            onCheckedChange={(checked) => handleChange('consent', checked as boolean)}
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? 'consent-error' : undefined}
            className={errors.consent ? 'border-red-500' : ''}
          />
          <div className="flex-1">
            <Label 
              htmlFor="lead-consent" 
              className={`text-sm cursor-pointer ${errors.consent ? 'text-red-600' : 'text-slate-600 dark:text-slate-300'}`}
            >
              I agree to the{' '}
              <a href="#" className="text-blue-600 hover:text-blue-700 underline">
                Privacy Policy
              </a>{' '}
              and consent to being contacted by Aventek <span className="text-red-500">*</span>
            </Label>
            {errors.consent && (
              <p id="consent-error" className="text-red-600 text-sm mt-1" role="alert">
                {errors.consent}
              </p>
            )}
          </div>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Submit Request
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
